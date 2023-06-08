/**
 * This component focuses on the star rating of the property "ratings" of each review
 * The goal is to display to the user star icons  based on the integer value of the "ratings" property
 */
import React from "react";
import { FaStar } from 'react-icons/fa';
import "./StarRating.css";

const StarRating = ({ rating }) => {
  const MAX_STARS = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < MAX_STARS; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} className="star" />);
      } else {
        stars.push(<FaStar key={i} className="star empty" />);
      }
    }
    return stars;
  };

  return <span className="stars">{renderStars()}</span>;
};

export default StarRating;