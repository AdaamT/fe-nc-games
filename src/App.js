import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./styling/App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
