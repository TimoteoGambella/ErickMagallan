// DesktopNavbar.js
import React from "react";
import logo from "../../assets/logo.svg";
import { AiOutlineMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const DesktopNavbar = ({ menu, scrollToBottom, currentPath, isLinkActive, isInServicios }) => {
  const navigate = useNavigate();

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
          {menu.map((item, index) => (
            <li key={index} className="md:mr-5">
              <p
                onClick={() => navigate(item.link)}
                className={`flex items-center py-2 pr-4 pl-3 cursor-pointer hover:color2 md:hover:bg-transparent text-16 ${isLinkActive(item.link) ||
                    (item.name === "Servicios" && isInServicios(currentPath))
                    ? "text-color2"
                    : "text-color6"
                  }`}
              >
                {item.name}
                {item.name === "Servicios" && (
                  <FiChevronDown className="w-4 h-4 ml-1" />
                )}
              </p>
            </li>
          ))}
        </ul>
        {/* Botón de Agenda una cita visible en la barra de navegación en desktop */}
        <button
          onClick={scrollToBottom}
          className="hidden md:flex bg-color1 hover:bg-color2 text-color6 font-lato font-[700] py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 md:mt-0 flex gap-1 items-center justify-center text-16 leading-16"
        >
          <AiOutlineMessage className="w-4 h-4" />
          Agenda una cita
        </button>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
