import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReviewByReviewId = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();
  useEffect(() => {
    fetch(`https://fe-nc-games.herokuapp.com/api/reviews/${review_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.review);
        setReview(data.review);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h3>Here is review{review_id}</h3>
    </div>
  );
};

export default ReviewByReviewId;
