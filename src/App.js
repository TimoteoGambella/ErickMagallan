import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Nosotros from "./screens/Nosotros";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/NavBar/NavBar";
import { SpipScreen } from "./screens/SpipScreen";
import { SemtScreen } from "./screens/SemtScreen";
import { SanScreen } from "./screens/SanScreen";
import { SthScreen } from "./screens/SthScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios/pip" element={<SpipScreen />} />
          <Route path="/servicios/emt" element={<SemtScreen />} />
          <Route path="/servicios/an" element={<SanScreen />} />
          <Route path="/servicios/th" element={<SthScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
