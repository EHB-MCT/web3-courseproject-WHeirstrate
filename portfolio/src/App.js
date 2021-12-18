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
  const navItems = 4;
  const navItemStyle = {
    width: width / navItems,
    //cursor: "none",
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
        <Link style={navItemStyle} to="/">
          <SketchComponent
            text={"Home"}
            width={width / navItems}
            height={80}
            position="odd"
          />
        </Link>
        <Link style={navItemStyle} to="/career">
          <SketchComponent
            text={"Carière"}
            width={width / navItems}
            height={80}
            position="even"
          />
        </Link>
        <Link style={navItemStyle} to="/skills">
          <SketchComponent
            text={"Vaardigheden"}
            width={width / navItems}
            height={80}
            position="odd"
          />
        </Link>
        <Link style={navItemStyle} to="/contact">
          <SketchComponent
            text={"Contact"}
            width={width / navItems}
            height={80}
            position="even"
          />
        </Link>
      </nav>
    </Router>
  );
}

export default App;
