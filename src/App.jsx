import About from "./pages/About";
import Contact from "./pages/Contact";
import ChildAbout from "./pages/ChildAbout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// import Timer from "./components/Timer.jsx";
const App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact/1">Contact</Link>
            </li>
            <li>
              <Link to="/about/child">About</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact/:id" element={<Contact />} />
            <Route path="/about">
              <Route path="child" element={<ChildAbout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
