import { useEffect, useState } from "react";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://fe-nc-games.herokuapp.com/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
      });
  }, []);

  return (
    <div>
      <h2>Reviews!!</h2>
      <br />
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <p>Title: {review.title}p</p>
              <p>Category: {review.category}</p>
              <img
                className="App-img"
                src={review.review_img_url}
                alt="image of review"
              ></img>
              <p>Votes: {review.votes}</p>
              <p>Comment Count: {review.comment_count}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllReviews;
