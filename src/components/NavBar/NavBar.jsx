import React from "react";
import DesktopNavbar from "./DesktopNavBar";
import { useMediaQuery } from "@react-hook/media-query";
import MobileNavbar from "./MobilNavBar";

const Navbar = () => {

    const menu = [
      { name: "Inicio", link: "/" },
      { name: "Servicios", link: "/servicios" },
      { name: "Nosotros", link: "/nosotros" },
    ];
  
    const subMenu = [
      {
        title: "Estimulación Magnética Transcraneal",
        link: "/servicios/emt"
      },
      {
        title: "Psicoterapia Individual y de Pareja",
        link: "/servicios/pip"
      },
      {
        title: "Asesoría Nutricional",
        link: "/servicios/an"
      },
      {
        title: "Terapia Holística",
        link: "/servicios/th"
      }
    ];

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      {isDesktop ? (
        <DesktopNavbar
          menu={menu}
          subMenu={subMenu}
        />
      ) : (
        <MobileNavbar
          menu={menu}
          subMenu={subMenu}
        />
      )}
    </div>
  );
};

export default Navbar;
