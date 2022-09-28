import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fe-nc-games.herokuapp.com/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h2>Categories</h2>
      <br />
      <ul>
        {categories.map((category) => {
          return (
            <li className="App-category-list" key={category.slug}>
              <Link to={`/categories/${category.slug}`}>{category.slug}</Link>
              <p>{category.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllCategories;
