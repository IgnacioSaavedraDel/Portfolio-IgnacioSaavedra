import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/organisms/Navbar";
import GridBackground from "./components/atoms/GridBackground";
import Music from "./pages/Music";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <GridBackground>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </GridBackground>
    </>
  );
}

export default App;
