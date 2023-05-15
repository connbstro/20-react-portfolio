import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/resume" element={<Skills />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
