import React from 'react'

function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      {goToPrevPage && <button className="load-more" onClick={goToPrevPage}>Previous Page</button>}
      {goToNextPage && <button className="load-more"  onClick={goToNextPage}>Next Page</button>}
    </div>
  )
}

export default Pagination