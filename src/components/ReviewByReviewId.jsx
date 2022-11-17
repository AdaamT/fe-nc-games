import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ChangeVoteCount from "./ChangeVoteCount";

const ReviewByReviewId = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();
  const [voteCount, setVoteCount] = useState(0);
  useEffect(() => {
    fetch(`https://fe-nc-games.herokuapp.com/api/reviews/${review_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data.review);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <br />
      <h3>Here is Review {review_id}</h3>
      <p>Title: {review.title}</p>
      <p>Category: {review.category}</p>
      <img className="App-img" src={review.review_img_url} alt="game" />
      <p>Votes: {review.votes + voteCount}</p>
      <ChangeVoteCount
        review_id={review_id}
        voteCount={voteCount}
        setVoteCount={setVoteCount}
      />
      <p>{review.review_body}</p>
      <Link to={`/reviews/${review.review_id}/comments`}>
        <p>Comments: {review.comment_count}</p>
      </Link>
      <p>Designer: {review.designer}</p>
      <p>Owner: {review.owner}</p>
      <p>Created: {review.created_at}</p>
    </div>
  );
};
export default ReviewByReviewId;
