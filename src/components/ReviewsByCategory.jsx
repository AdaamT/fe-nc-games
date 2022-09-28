import { useParams } from "react-router-dom";

const ReviewsByCategory = () => {
  const { category_slug } = useParams();
  return <h3> Come enter {category_slug}</h3>;
};

export default ReviewsByCategory;
