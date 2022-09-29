import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import ReviewsByCategory from "./ReviewsByCategory";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category_slug } = useParams();
  useEffect(() => {
    if (category_slug) {
      fetch(
        `https://fe-nc-games.herokuapp.com/api/reviews?category=${category_slug}`
      )
        .then((res) => res.json())
        .then((data) => {
          setReviews(data.reviews);
          setIsLoading(false);
        });
    } else {
      fetch("https://fe-nc-games.herokuapp.com/api/reviews")
        .then((res) => res.json())
        .then((data) => {
          setReviews(data.reviews);
          setIsLoading(false);
        });
    }
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <br />
      <h2>Reviews!!</h2>
      <ReviewsByCategory />
      <br />
      <ul>
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
      </ul>
    </div>
  );
};

export default AllReviews;
