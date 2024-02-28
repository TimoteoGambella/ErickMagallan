import NosotrosDesktop from "../components/NosotrosDesktop"
import NosotrosMobile from "../components/NosotrosMobile"
import { FaUserFriends } from 'react-icons/fa';
import { IoIosHeartHalf } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";
import person1 from '../assets/man.svg';
import person2 from "../assets/woman.svg"

import unam from "../assets/unam.svg"
import u_colima from "../assets/u-de-colima.svg"
import imp from "../assets/imp.svg"
import univa from "../assets/univa.svg"
import uni_tolima from "../assets/uni-tolima.svg"

function Nosotros () {
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
                />
            </div>
            <div className="hidden md:block">
                <NosotrosDesktop 
                    features={features}
                    experts={experts}
                />
            </div>
        </>
    )
}

export default Nosotros