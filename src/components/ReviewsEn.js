import React, { useState } from 'react';
import data from '../data.json';

function Reviews() {
  const reviewsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const reviews = Object.values(data.en);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, endIndex);

  return (
    <div className="reviews-container">
      {currentReviews.map((review, index) => (
        <div key={index} className='reviews'>
          <h2>{review.name}</h2>
          <p>{review.review}</p>
          <h4>{review.date}</h4>
        </div>
      ))}
      <div className="pagination">
        <button className="rounded-navbar" onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button className="rounded-navbar" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Reviews;
