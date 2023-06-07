/**
 * This component fetches the review list from the WordPress API.
 * It returns its important info so that the user can interact with it.
 * Was not sure what HTTP library to use, so ended up using fetch.
 */
import { useEffect, useState } from "react";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {

        /**
         * fetch function sends HTTP GET request to the API endpoint.
         * awaits the response from the API & stores the data
         * parses the data & stores it in the const parsedData
         * checks if key data property equals to "hub..", if true sets reviews state
         */
        const data = await fetch("http://localhost/wordpress/wp-json/luisa-fullstack-exercise/v1/reviews");
        const parsedData = await data.json();
        console.log(parsedData);
        setReviews(
          parsedData.key === "hub_toplists_order" ? parsedData.toplists["575"] : []
        );
      } catch (error) {
        console.error("This Error is Ocurring: ", error);
      }
    };

    fetchReviews();
  }, []);

  /**
   * returns the review list to be displayed on the webpage
   * list includes the review's necessary info for the user to interact with
   */
  return (
    <div class="Reviews List">
      <h1>Luisa Full Stack Exercise</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.brand_id}>
            <img src={review.logo} alt={review.brand_id} />
            <div>
              <h2>Rating: {review.info.rating}</h2>
              <p>Features: {review.info.features.join(", ")}</p>
              <p>Terms and Conditions: {review.terms_and_conditions}</p>
              <a href={review.play_url}>PLAY NOW</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
