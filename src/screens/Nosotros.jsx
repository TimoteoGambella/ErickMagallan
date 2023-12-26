import NosotrosDesktop from "../components/NosotrosDesktop"
import NosotrosMobile from "../components/NosotrosMobile"
import { FaUserFriends } from 'react-icons/fa';
import { IoIosHeartHalf } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp,FaHome } from 'react-icons/fa';
import person1 from '../assets/man.svg';
import person2 from "../assets/woman.svg"

import unam from "../assets/unam.svg"
import u_colima from "../assets/u-de-colima.svg"
import imp from "../assets/imp.svg"
import univa from "../assets/univa.svg"
import uni_tolima from "../assets/uni-tolima.svg"

function Nosotros () {
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
    const features = [
        {
            icon: <FaUserFriends className='w-12 h-12'/>,
            title: 'Equipo de expertos',
            description: 'Tenemos las herramientas para ofrecerte soluciones basadas en los más recientes hallazgos y metodologías en el ámbito psiquiátrico y terapéutico.',
            linkText: 'Conoce al equipo',
        },
        {
            icon: <IoChatbubblesSharp className='w-12 h-12'/>,
            title: 'Atención personalizada',
            description: 'Adaptamos nuestro enfoque y tratamiento según tus necesidades específicas, garantizando un cuidado a medida y centrado en ti.',
            linkText: 'Nuestros servicios',
        },
        {
            icon: <IoIosHeartHalf className='w-12 h-12'/>,
            title: 'Entorno seguro y respetuoso',
            description: 'Te ofrecemos un espacio donde puedes sentirte seguro y escuchado, en un ambiente de total confidencialidad.',
            linkText: 'Conoce el espacio',
        },
    ];
    const experts = [
        {
            img: person1,
            name: 'Dr. José Luis Nogales Galván',
            title: 'Maestría y Doctorado en Psicoterapia Individual y de Pareja por el Instituto Mexicano de la Pareja.',
            uni: [unam, u_colima, imp]
        },
        {
            img: person2,
            name: 'M.C. Rocío González Saucedo',
            title: 'Ingeniera Bioquímica y Maestra en Ciencias Médicas y Nutrición Clínica.',
            uni: [univa, u_colima, uni_tolima]
        },
    ];
    return(
        <>
            <div className="block md:hidden">
                <NosotrosMobile 
                    features={features}
                    experts={experts}
                    // testimonials={testimonials}
                    contactInfo={contactInfo}
                    // settings={settings}
                />
            </div>
            <div className="hidden md:block">
                <NosotrosDesktop 
                    features={features}
                    experts={experts}
                    // testimonials={testimonials}
                    contactInfo={contactInfo}
                    // settings={settings}
                />
            </div>
        </>
    )
}

export default Nosotros