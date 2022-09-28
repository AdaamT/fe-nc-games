import { useParams } from "react-router-dom";

const ReviewsByCategory = () => {
  const { category_slug } = useParams();
  return <h3> Welcome to {category_slug}</h3>;
};

export default ReviewsByCategory;
