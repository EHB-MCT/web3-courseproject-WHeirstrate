import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";
import { Link } from "react-router-dom";
import SketchComponent from "./components/SketchComponent";

import "./App.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const navItemStyle = {
    width: width / 3,
    cursor: "none",
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  return (
    <Router>
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <nav className="navContainer">
        <Link style={navItemStyle} to="/career">
          <SketchComponent text={"Career"} width={width / 3} height={80} />
        </Link>
        <Link style={navItemStyle} to="/skills">
          <SketchComponent text={"Skills"} width={width / 3} height={80} />
        </Link>
        <Link style={navItemStyle} to="/contact">
          <SketchComponent text={"Contact"} width={width / 3} height={80} />
        </Link>
      </nav>
    </Router>
  );
}

export default App;
