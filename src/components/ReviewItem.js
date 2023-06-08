/**
 * This component displays the necessary info for each review object from the list
 * the review object is passed as a prop to this component that it extracts its 4 properties &&
 * assings them to variables with the same name of the properties being extracted :
 * 1. logo, 2. rating, 3. features, 4. terms_and_conditions, 5. play_url
 */
import "./ReviewList.css";
import "./ReviewItem.css";
import StarRating from "../UI/StarRating";
import { AiFillCheckCircle } from "react-icons/ai";

const ReviewItem = ({ review }) => {
  const { logo, terms_and_conditions, play_url } = review;
  const { rating, features } = review.info;

  // Renders the features manually and adds the check Icon to each string
  const renderedFeatures = features.map((feature, index) => (
    <div key={index}>
      <AiFillCheckCircle className="icon" />
      {feature}
    </div>
  ));

  
  /**
   * Renders the layout and content of a review item on the website
   * it has a main 'review-item' container of the div classes corresponding to a specific item within it
   * TODO not sure if <div className="terms"> should display '21+ |' & | Gamble Responsibly
   */
  return (
    <div className="review-item">

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="rating">
        <StarRating rating={rating} />
      </div>

      <div className="features">{renderedFeatures}</div>

      <div className="play-now-terms-container">
        <div className="play-now">
          <a href={play_url} target="_blank" rel="noopener noreferrer">
            Play Now
          </a>
        </div>
       
        <div className="terms">  
          <span dangerouslySetInnerHTML={{ __html: review.terms_and_conditions }} />
        </div>
      </div>

    </div>
  );
};
  
export default ReviewItem;
