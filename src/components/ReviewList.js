/**
 * This component fetches the review list from the WordPress API.
 * It returns its important info so that the user can interact with it.
 * Was not sure what HTTP library to use, so ended up using fetch.
 */
import { useEffect, useState } from "react";
import "./ReviewList.css";
import ReviewItem from "./ReviewItem";
import LoadMoreBrands from "./LoadMoreBrands";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  
  /**
   * first useEffect hook to fetch the reviews from the API endpoint
   * & updating the reviews state
   */
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await fetch(
          "http://localhost/wordpress/wp-json/luisa-fullstack-exercise/v1/reviews"
        );
        const parsedData = await data.json();
        console.log(parsedData);
        setReviews(
          parsedData.key === "hub_toplists_order"
            ? parsedData.toplists["575"]
            : []
        );
      } catch (error) {
        console.error("This Error is Ocurring: ", error);
      }
    };

    fetchReviews();
  }, []);

   /**
   * second useEffect hook to set the initial visible reviews
   * while setting it to 3, the user, when opening the browser, will see the first 3
   */
  const [visibleReviews, setVisibleReviews] = useState([]);
  useEffect(() => {
    if (reviews.length > 0) {
      setVisibleReviews(reviews.slice(0, 3));
    }
  }, [reviews]);


  /**
   * returns each review to be displayed on the webpage
   */
  return (
    <div className="ReviewsList">
      <div className="line"></div>
      <div className="table-items"> 
        <ul className="review-items">
          {visibleReviews.map((review) => (
            <li key={review.brand_id} className="review-list">
              <ReviewItem review={review}/>
          </li>
        ))} <LoadMoreBrands reviews={reviews} />
      </ul>   
      </div>
    </div>
  );
};

export default ReviewList;
