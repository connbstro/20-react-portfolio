import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./components/Portfolio";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";

function App() {
  return (
    <div>
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Skills />} />
          <Route path="/skills" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
