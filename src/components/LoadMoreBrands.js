/**
 * This component provides the Logic of the "Load More" button
 * It is responsible for the proper way to load in response to the user interaction with the button
 */
import React, { useState } from 'react';
import ReviewItem from './ReviewItem';

const LoadMoreBrands = ({ reviews }) => {
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useState(() => {
    setVisibleReviews(reviews.slice(0, 3));
  }, []);

  const loadMoreReviews = () => {
    setIsLoading(true);

    setTimeout(() => {
      const nextIndex = visibleReviews.length + 3;
      const nextReviews = reviews.slice(0, nextIndex);
      setVisibleReviews(nextReviews);
      setIsLoading(false);
    }, 2000); // when the user clicks the button this Simulates a delay of 2 seconds
  };

  /**
   * Renders the visible reviews to the user
   * & also the "Load More button"
   */
  return (
    <>
      {visibleReviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}

      <div className="load-more-container">
        <button
          className="load-more-button"
          onClick={loadMoreReviews}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </div>

      {visibleReviews.length === reviews.length && (
        <div className="all-brands-loaded">All brands have been loaded.</div>
      )}
    </>
  );
};

export default LoadMoreBrands;