import { useEffect, useState } from "react";
import { getCommentsByReviewId } from "../utils/api";
import { useParams } from "react-router-dom";

const CommentsByReviewId = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();
  useEffect(() => {
    getCommentsByReviewId(review_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <br />
      <h3>Comments for Review {review_id}:</h3>
      <br />
      {comments.map((comment) => {
        return (
          <li className="App-review-comments" key={comments.comment_id}>
            <p>Author: {comment.author}</p>
            <p> Comment: {comment.comment_id}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <p>Created: {comment.created_at}</p>
          </li>
        );
      })}
    </div>
  );
};

export default CommentsByReviewId;
