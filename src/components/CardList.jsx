import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Pagination } from './Pagination'
import { RefetchPreloader } from './RefetchPreloader'

export const CardList = ({
  title,
  cardColor = 'orange lighten-4',
  resource,
  field,
}) => {
  const [page, setPage] = useState(0)
  // const [users, setUsers] = useState(null)

  const fetchResource = async ({ resource, limit = 5, page = 0 }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resource}?_limit=${limit}&_start=${page}`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = response.json()

    return data
  }

  // useEffect(() => {
  //   (async function () {
  //     const users = await fetchUsers()
  //     setUsers(users)
  //   })()
  // }, [])

  const { isLoading, isError, data, error, isPreviousData, isFetching } =
    useQuery({
      queryKey: [resource, page],
      queryFn: () => fetchResource({ resource, page }),
      keepPreviousData: true,
    })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error?.message}</span>
  }

  return (
    <>
      <div className={'card ' + cardColor}>
        {isFetching ? <RefetchPreloader /> : null}
        <div className="card-content">
          <span className="card-title center-align">{title}</span>
          <Pagination
            page={page}
            setPage={setPage}
            isPreviousData={isPreviousData}
          />
          {data && (
            <ul>
              {data.map((d) => (
                <li className="card" key={d.id}>
                  <div className="card-content">
                    <span>{d[field]}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
