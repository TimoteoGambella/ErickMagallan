import { useMediaQuery } from "@react-hook/media-query";
import NosotrosDesktop from "../components/Us/NosotrosDesktop"
import NosotrosMobile from "../components/Us/NosotrosMobile"
import { FaUserFriends } from 'react-icons/fa';
import { IoIosHeartHalf } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";

function Nosotros() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const features = [
        {
            icon: <FaUserFriends className='w-12 h-12' />,
            title: 'Equipo de expertos',
            description: 'Tenemos las herramientas para ofrecerte soluciones basadas en los más recientes hallazgos y metodologías en el ámbito psiquiátrico y terapéutico.',
            linkText: 'Conoce al equipo',
            link: '/nosotros'
        },
        {
            icon: <IoChatbubblesSharp className='w-12 h-12' />,
            title: 'Atención personalizada',
            description: 'Adaptamos nuestro enfoque y tratamiento según tus necesidades específicas, garantizando un cuidado a medida y centrado en ti.',
            linkText: 'Nuestros servicios',
            link: '/servicios/emt'
        },
        {
            icon: <IoIosHeartHalf className='w-12 h-12' />,
            title: 'Entorno seguro y respetuoso',
            description: 'Te ofrecemos un espacio donde puedes sentirte seguro y escuchado, en un ambiente de total confidencialidad.',
            linkText: 'Conoce el espacio',
            link: '/nosotros'
        },
    ];
    return (
        <div>
            {isDesktop ? (
                <NosotrosDesktop
                    features={features}
                />
            ) : (
                <NosotrosMobile
                    features={features}

                />
            )}
        </div>
    )
}

export default Nosotros