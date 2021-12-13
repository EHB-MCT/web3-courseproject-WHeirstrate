import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
