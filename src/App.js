import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./components/Portfolio";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter basename="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Skills />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
