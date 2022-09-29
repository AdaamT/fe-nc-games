import { Link } from "react-router-dom";

const ReviewCard = (props) => {
  const review = props.review;

  return (
    <li className="App-reviews-list">
      <Link to={`/reviews/${review.review_id}`}>
        <p>Title: {review.title}</p>
      </Link>
      <p>Category: {review.category}</p>
      <img className="App-img" src={review.review_img_url} alt="review"></img>
      <p>Votes: {review.votes}</p>
      <p>Comment Count: {review.comment_count}</p>
      <br />
      <br />
    </li>
  );
};

export default ReviewCard;
