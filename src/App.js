import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Nosotros from "./screens/Nosotros";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Servicios from "./screens/Servicios";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios/:type" element={<Servicios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
