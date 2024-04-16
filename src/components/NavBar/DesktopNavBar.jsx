import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { AiOutlineMessage } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const DesktopNavbar = ({menu, subMenu}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [display, setDisplay] = useState("hidden");

  const scrollToBottom = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const handleItemClick = (item) => {
    if (item.name !== "Servicios") {
      navigate(item.link);
      setDisplay("hidden"); // Ocultar el submenú al hacer clic en cualquier otro elemento del menú
    }
  };

  const handleServiciosHover = (isHovering) => {
    setDisplay(isHovering ? "flex" : "hidden");
  };

  const isServiciosPage = location.pathname.startsWith("/servicios");

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-[113px] h-[32px] md:w-[181px] md:h-[51px]"
          />
        </div>
        <ul className="hidden md:flex flex-row space-x-8 md:mt-0 md:font-medium">
        {menu.map((item, index) => {
            const liProps = {};
            if (item.name === "Servicios") {
              liProps.onMouseEnter = () => handleServiciosHover(true);
              liProps.onMouseLeave = () => handleServiciosHover(false);
            }
            return (
              <li key={index} className="md:mr-5" {...liProps}>
                <p
                  onClick={() => handleItemClick(item)}
                  className={`flex items-center py-2 pr-4 pl-3 cursor-pointer ${
                    item.link === location.pathname ||
                    (item.name === "Servicios" && isServiciosPage)
                      ? "text-color2"
                      : "text-color6"
                  } ${item.name.toLowerCase()} md:hover:bg-transparent text-16`}
                >
                  {item.name}
                  {item.name === "Servicios" && (
                    <FiChevronDown className="w-4 h-4 ml-1" />
                  )}
                </p>
                {item.name === "Servicios" && (
                  <SubMenu
                    subMenu={subMenu}
                    display={display}
                    setDisplay={setDisplay}
                  />
                )}
              </li>
            );
          })}
        </ul>
        <button
          onClick={scrollToBottom}
          className="bg-color1 hover:bg-color2 text-color6 font-lato font-[700] py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 md:mt-0 flex gap-1 items-center justify-center text-16 leading-16"
        >
          <AiOutlineMessage className="w-4 h-4" />
          Agenda una cita
        </button>
      </div>
    </nav>
  );
};

const SubMenu = ({ subMenu, display, setDisplay }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`absolute w-screen max-w-full bg-white items-center justify-center gap-4 py-4 flex-col md:flex-row text-center left-0 flex ${
        display === "flex" ? "z-10" : "hidden"
      }`}
    >
      {subMenu.map((subItem, subIndex) => (
        <p
          key={subIndex}
          onClick={() => {
            navigate(subItem.link);
          }}
          className={`block font-[700] leading-16 font-lato py-2 pr-4 pl-3 cursor-pointer ${
            subItem.link === location.pathname ? "text-color2" : "hover:color2"
          } md:hover:bg-transparent text-16`}
        >
          {subItem.title}
        </p>
      ))}
    </div>
  );
};

export default DesktopNavbar;
