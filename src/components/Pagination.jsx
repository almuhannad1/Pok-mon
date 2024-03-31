import React from 'react'

function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      {goToPrevPage && <button onClick={goToPrevPage}>Previous Page</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next Page</button>}
    </div>
  )
}

export default Pagination