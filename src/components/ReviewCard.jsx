import { Link } from "react-router-dom";

const ReviewCard = (props) => {
  const review = props.review;
  console.log(review);

  return (
    <li className="App-reviews-list">
      <p>Title: {review.title}</p>
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
