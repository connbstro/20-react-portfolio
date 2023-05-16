import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Works from "./components/Works";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Works />} />
          <Route path="/resume" element={<Skills />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
