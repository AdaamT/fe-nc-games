import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link className="App-Nav-Home" to="/">
        Home
      </Link>
      <Link className="App-Nav-reviews" to="/reviews">
        All Reviews
      </Link>
      <Link className="App-Nav-categories" to="/categories">
        All Categories
      </Link>
      <Link className="App-Nav-profile" to="/myprofile">
        My Profile
      </Link>
    </nav>
  );
};

export default NavBar;
