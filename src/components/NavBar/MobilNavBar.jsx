import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

const MobileNavbar = ({ menu, subMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    if (item.name === "Servicios") {
      setIsSubMenuOpen(!isSubMenuOpen); // Toggle para abrir o cerrar el submenu
    } else {
      navigate(item.link);
      setIsOpen(false); // Cerrar el menú al hacer clic en un enlace diferente de "Servicios"
    }
  };

  const handleSubMenuClick = (subItem) => {
    navigate(subItem.link);
    setIsOpen(false); // Cerrar el menú al hacer clic en un enlace del submenu
  };

  const isLinkActive = (link) => {
    return location.pathname === link;
  };

  const isInServicios = () => {
    return location.pathname.startsWith("/servicios");
  };

  const scrollToBottom = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

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
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg md:hidden"
          onClick={toggleMenu}
        >
          <MdOutlineMenu className="w-6 h-6" />
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:hidden`}>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium">
            {menu.map((item, index) => (
              <li key={index} className="md:mr-5">
                <p
                  onClick={() => handleItemClick(item)}
                  className={`block py-2 pr-4 pl-3 cursor-pointer hover:color2 md:hover:bg-transparent text-16 ${
                    isLinkActive(item.link) || (item.name === "Servicios" && isInServicios())
                      ? "text-color2"
                      : "text-color6"
                  }`}
                >
                  {item.name}
                  {item.name === "Servicios" && (
                    <FiChevronDown className="inline-block w-4 h-4 ml-1" />
                  )}
                </p>
                {/* Mostrar el submenu si el ítem es "Servicios" y está abierto el menú */}
                {item.name === "Servicios" && isSubMenuOpen && (
                  <ul className="pl-4">
                    {subMenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="cursor-pointer">
                        <p
                          onClick={() => handleSubMenuClick(subItem)}
                          className={`py-1 cursor-pointer ${
                            isLinkActive(subItem.link) ? "text-color2" : "hover:text-color2"
                          }`}
                        >
                          {subItem.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {/* Botón de Agenda una cita en el menú hamburguesa */}
            <li className="md:hidden">
              <button
                onClick={() => {
                  scrollToBottom(); // Desplazarse hacia abajo al hacer clic
                  setIsOpen(false); // Cerrar el menú al hacer clic
                }}
                className="flex bg-color1 hover:bg-color2 text-color6 font-lato font-[700] py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 md:mt-0 gap-1 items-center justify-center text-16 leading-16"
              >
                <AiOutlineMessage className="w-4 h-4" />
                Agenda una cita
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
