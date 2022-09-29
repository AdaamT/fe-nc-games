// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./styling/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import AllReviews from "./components/AllReviews";
import AllCategories from "./components/AllCategories";
import ReviewByReviewId from "./components/ReviewByReviewId";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/categories/:category_slug" element={<AllReviews />} />
        <Route path="/reviews/:review_id" element={<ReviewByReviewId />} />
      </Routes>

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
