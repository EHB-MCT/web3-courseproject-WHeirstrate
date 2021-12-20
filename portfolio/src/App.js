import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<Projects />} />
        </Routes>
      </div>
      <nav className="navContainer">
        <Link className="navItem" to="/">
          Projecten
        </Link>
        <Link className="navItem" to="/career">
          Tijdlijn
        </Link>
        <Link className="navItem" to="/skills">
          Vaardigheden
        </Link>
        <Link className="navItem" to="/contact">
          Contact
        </Link>
      </nav>
    </Router>
  );
}

export default App;
