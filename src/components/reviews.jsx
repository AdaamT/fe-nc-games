import { useEffect, useState } from "react";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fe-nc-games.herokuapp.com/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h2>Reviews!!</h2>
      <br />
      <ul>
        {reviews.map((review) => {
          return (
            <li className="App-reviews-list" key={review.review_id}>
              <p>Title: {review.title}</p>
              <p>Category: {review.category}</p>
              <img
                className="App-img"
                src={review.review_img_url}
                alt="review"
              ></img>
              <p>Votes: {review.votes}</p>
              <p>Comment Count: {review.comment_count}</p>
              <br />
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllReviews;
