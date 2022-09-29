import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { patchReviewVote } from "../utils/api";

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

  function handleUpVote() {
    setVoteCount(voteCount + 1);
    patchReviewVote(review.review_id, 1)
      .then(() => {})
      .catch(() => {
        setVoteCount(voteCount - 1);
      });
  }

  function handleDownVote() {
    setVoteCount(voteCount - 1);
    patchReviewVote(review.review_id, -1)
      .then(() => {})
      .catch(() => {
        setVoteCount(voteCount + 1);
      });
  }

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
      <p>
        Votes: {review.votes + voteCount}{" "}
        <button onClick={handleUpVote} disabled={voteCount > 0}>
          +1
        </button>
        <button onClick={handleDownVote} disabled={voteCount < 0}>
          -1
        </button>
      </p>
      <p>{review.review_body}</p>
      <p>Comments: {review.comment_count}</p>
      <p>Designer: {review.designer}</p>
      <p>Owner: {review.owner}</p>
      <p>Created: {review.created_at}</p>
    </div>
  );
};
export default ReviewByReviewId;
