import { useParams } from "react-router-dom";

const ReviewsByCategory = () => {
  const { category_slug } = useParams();
  return <h3>{category_slug}</h3>;
};

export default ReviewsByCategory;
