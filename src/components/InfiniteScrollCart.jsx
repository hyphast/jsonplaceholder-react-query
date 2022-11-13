import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { RefetchPreloader } from './RefetchPreloader'

export const InfiniteScrollCart = ({
  title,
  cardColor = 'orange lighten-4',
  resource,
  field,
}) => {
  // const { ref, inView } = useInView()
  // const fetchResource = async ({ resource, limit = 5, page = 0 }) => {
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/${resource}?_limit=${limit}&_start=${page}`
  //   )
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok')
  //   }
  //   const data = response.json()
  //   return data
  // }
  // const {
  //   status,
  //   data,
  //   error,
  //   isPreviousData,
  //   isFetching,
  //   isFetchingNextPage,
  //   isFetchingPreviousPage,
  //   fetchNextPage,
  //   fetchPreviousPage,
  //   hasNextPage,
  //   hasPreviousPage,
  // } = useInfiniteQuery({
  //   queryKey: [resource],
  //   queryFn: () => fetchResource({ resource }),
  //   getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
  //   getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
  // })
  // React.useEffect(() => {
  //   if (inView) {
  //     fetchNextPage()
  //   }
  // }, [inView])
  // if (status.isLoading) {
  //   return <span>Loading...</span>
  // }
  // if (status.isError) {
  //   return <span>Error: {error?.message}</span>
  // }
  // return (
  //   <>
  //     <div
  //       style={{ maxHeight: '550px', overflow: 'auto' }}
  //       className={'card ' + cardColor}
  //     >
  //       {isFetching ? <RefetchPreloader /> : null}
  //       <div className="card-content">
  //         <span className="card-title center-align">{title}</span>
  //         {data && (
  //           <ul>
  //             {data.pages.map((page) => (
  //               <li className="card" key={page.nextId}>
  //                 {page.data.map((p) => (
  //                   <div className="card-content">
  //                     <span>{p[field]}</span>
  //                   </div>
  //                 ))}
  //               </li>
  //             ))}
  //           </ul>
  //         )}
  //         <div>
  //           <button
  //             ref={ref}
  //             onClick={() => fetchNextPage()}
  //             disabled={!hasNextPage || isFetchingNextPage}
  //           >
  //             {isFetchingNextPage
  //               ? 'Loading more...'
  //               : hasNextPage
  //               ? 'Load Newer'
  //               : 'Nothing more to load'}
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )
}
