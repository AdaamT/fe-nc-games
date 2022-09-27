import { useEffect, useState } from "react";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fe-nc-games.herokuapp.com/api/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.categories);
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
              <button>{category.slug}</button>
              <p>{category.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllCategories;
