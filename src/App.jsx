import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/organisms/Navbar";
import GridBackground from "./components/atoms/GridBackground";
import Music from "./pages/Music";

function App() {
  return (
    <>
      <GridBackground>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </GridBackground>
    </>
  );
}

export default App;
