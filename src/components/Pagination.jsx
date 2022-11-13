import React from 'react'

const totalPages = 5

export const Pagination = ({ page, setPage, isPreviousData }) => {
  return (
    <div className="row">
      <button
        className="waves-effect waves-light btn col s2 offset-s3"
        onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
        disabled={page === 0}
      >
        <i className="large material-icons">chevron_left</i>
      </button>
      <button
        className="waves-effect waves-light btn col s2 offset-s2"
        onClick={() => {
          if (!isPreviousData && page <= totalPages) {
            setPage((prev) => prev + 1)
          }
        }}
        disabled={isPreviousData || page > totalPages}
      >
        <i className="large material-icons">chevron_right</i>
      </button>
    </div>
  )
}
