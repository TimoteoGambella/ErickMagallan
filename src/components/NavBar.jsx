import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi"; // Importar el ícono de la flecha hacia abajo
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const menu = [
    { name: "Inicio", link: "/" },
    { name: "Servicios", link: "/servicios/emt" },
    { name: "Nosotros", link: "/nosotros" },
  ];

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
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
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdOutlineMenu className="w-6 h-6" />
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium">
            {menu.map((item, index) => (
              <li key={index} className="md:mr-5">
                <p
                  onClick={() => navigate(item.link)}
                  className={`block py-2 pr-4 pl-3 cursor-pointer hover:color2 md:hover:bg-transparent text-16 ${
                    isLinkActive(item.link) ||
                    (item.name === "Servicios" && isInServicios(currentPath))
                      ? "text-color2"
                      : "text-color6"
                  }`}
                >
                  {item.name}
                  {item.name === "Servicios" && (
                    <FiChevronDown className="inline-block w-4 h-4 ml-1" />
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
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

export default Navbar;
