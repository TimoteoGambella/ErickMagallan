import { useState } from "react";
import ServiciosMobile from "../components/ServiciosMobile";

import logo1 from "../assets/emt/trending-up-outline.svg"
import logo2 from "../assets/emt/Group 8.svg"
import logo3 from "../assets/emt/fitness-outline.svg"
import logo4 from "../assets/emt/extension-puzzle-outline.svg"
import logo5 from "../assets/emt/shapes-outline.svg"
import logo6 from "../assets/emt/flower-outline.svg"
import logo7 from "../assets/emt/partly-sunny-outline.svg"
import logo8 from "../assets/emt/balloon-outline.svg"

import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp,FaHome } from 'react-icons/fa';
import ServiciosDesktop from "../components/ServiciosDesktop";

function Servicios () {
    const [nav, setNav] = useState("emt");
    const contactInfo = [
        {
            icon: <FaWhatsapp className='w-9 h-9' />,
            secondIcon: <LiaPhoneVolumeSolid className='w-4 h-4'/>,
            method: 'Vía Whatsapp',
            details: '(+52) 312 339 93 14',
            day: 'Lunes a Viernes',
            hour: '9am a 8pm'
        },
        {
            icon: <BsTelephone className='w-9 h-9' />,
            secondIcon: <LiaPhoneVolumeSolid className='w-4 h-4'/>,
            method: 'Vía telefónica',
            details: '(312) 312 33 50 75 / 312 312 98 93',
            day: 'Lunes a Viernes',
            hour: '9am a 8pm'
        },
        {
            icon: <MdOutlineEmail className='w-9 h-9' />,
            secondIcon: <MdOutlineMail className='w-4 h-4'/>,
            method: 'Vía email',
            details: 'drnogalesgalvan@gmail.com',
            day: 'Lunes a Viernes',
            hour: '9am a 8pm'
        },
        {
            icon: <FaHome className='w-9 h-9' />,
            secondIcon: <IoLocationOutline className='w-6 h-6'/>,
            method: 'Nuestro domicilio',
            details: 'Calle Manuel Payno #550 Jardines Vista Hermosa, Colima, Col.',
            day: 'Lunes a Viernes',
            hour: '9am a 8pm'
        },
    ];
    const tms = [
          {
            title: "Enfermedad de Parkinson",
            p1: "Disminuye síntomas motores y no motores.",
            p2: "Ayuda a la mejor absorción del medicamento disminuyendo efectos secundarios",
            icon: logo1
          },
          {
            title: "Ansiedad",
            p1: "Mejora síntomas ansiosos como insomnio, sudoración, y sensación fatalista, entre otras.",
            p2: "Ayuda a disminuir pensamientos recurrentes que disparan los síntomas.",
            icon: logo2
          },
          {
            title: "Evento Vascular Cerebral",
            p1: "Rehabilita secuelas motrices",
            p2: "Apoyo en la disminución de disfagia",
            icon: logo3
          },
          {
            title: "Transtorno Obsesivo Compulsivo",
            p1: "Aminora conductas ritualistas y merma el análisis repetido de pensamientos.",
            p2: "Disminuye la sensación de agitación.",
            icon: logo4
          },
          {
            title: "Deterioro Cognitivo Leve",
            p1: "Ayuda a mejorar habilidades cognitivas",
            p2: "Retarda el progreso de pérdida de memoria",
            icon: logo5
          },
          {
            title: "Transtorno por Déficit de Atención e Hiperactividad",
            p1: "Ayuda a mantener la concentración durante mayor tiempo.",
            p2: "Disminuye la impulsividad.",
            icon: logo6
          },
          {
            title: "Depresión",
            p1: "Mejora el estado de ánimo",
            p2: "Ayuda a recuperar la motivación para hacer diversas actividades",
            icon: logo7
          },
          {
            title: "Autismo",
            p1: "Mejora la conducta social.",
            p2: "Disminuye el comportamiento obsesivo o conductas repetitivas.",
            icon: logo8
          }
    ]     

    return(
        <>
            <div className="bg-white flex items-center justify-center gap-4 py-4 flex-col md:flex-row text-center">
                <p className={`block font-[700] leading-16 font-lato py-2 pr-4 pl-3 cursor-pointer hover:color2 md:hover:bg-transparent text-16 ${nav === "nosotros" ? 'text-color2' : 'text-color6'}`} onClick={()=>setNav("nosotros")}>Nosotros</p>
                <p className={`block font-[700] leading-16 font-lato py-2 pr-4 pl-3 cursor-pointer hover:color2 md:hover:bg-transparent text-16 ${nav === "emt" ? 'text-color2' : 'text-color6'}`} onClick={()=>setNav("emt")}>Estimulación Magnética Transcraneal</p>
                <p className={`block font-[700] leading-16 font-lato py-2 pr-4 pl-3 cursor-pointer hover:color2 md:hover:bg-transparent text-16 ${nav === "nosotros" ? 'text-color2' : 'text-color6'}`} onClick={()=>setNav("nosotros")}>Nosotros</p>
            </div>
            <div className="block md:hidden">
                <ServiciosMobile 
                    tms={tms}
                    contactInfo={contactInfo}
                />
            </div>
            <div className="hidden md:block">
                <ServiciosDesktop 
                    tms={tms}
                    contactInfo={contactInfo}
                />
            </div>
        </>
    )
}

export default Servicios;