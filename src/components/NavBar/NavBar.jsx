import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DesktopNavbar from "./DesktopNavBar";
import { useMediaQuery } from "@react-hook/media-query";
import MobileNavbar from "./MobilNavBar";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();
  const menu = [
    { name: "Inicio", link: "/" },
    { name: "Servicios", link: "/servicios/emt" },
    { name: "Nosotros", link: "/nosotros" },
  ];

  const scrollToBottom = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const isInServicios = (path) => {
    return path.includes("/servicios/");
  };

  const isLinkActive = (link) => {
    return (
      currentPath === link ||
      (link !== "/" && currentPath.startsWith(link))
    );
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      {isDesktop ? (
        <DesktopNavbar
          menu={menu}
          scrollToBottom={scrollToBottom}
          currentPath={currentPath}
          isLinkActive={isLinkActive}
          isInServicios={isInServicios}
        />
      ) : (
        <MobileNavbar
          menu={menu}
          scrollToBottom={scrollToBottom}
          currentPath={currentPath}
          isLinkActive={isLinkActive}
          isInServicios={isInServicios}
        />
      )}
    </div>
  );
};

export default Navbar;
