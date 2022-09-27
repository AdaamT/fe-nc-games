import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./styling/App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navbar";
import AllReviews from "./components/reviews";

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
      </Routes>

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
