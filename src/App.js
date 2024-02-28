import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import NavBar from "./components/NavBar";
import Nosotros from "./screens/Nosotros";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Servicios from "./screens/Servicios";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
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
