import { FaUserFriends } from 'react-icons/fa';
import { IoIosHeartHalf } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";
import professuibak1 from '../assets/professionals/Dr-José-Luis.jpg';
import professuibak2 from '../assets/professionals/MC-Rocío-González.jpg';

import character1 from "../assets/testimonio/Olivia-Ramirez.webp"
import character2 from "../assets/testimonio/Andres-Fuentes.webp"
import character3 from "../assets/testimonio/Julieta-Gonzalez.webp"
import HomeMobile from '../components/Home/HomeMobile';
import HomeDesktop from '../components/Home/HomeDesktop';
import { useMediaQuery } from '@react-hook/media-query';

function Home() {
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

    const experts = [
        {
            img: professuibak1,
            name: 'Dr. José Luis Nogales Galván',
            title: 'Médico Psiquiatra / Maestría y Doctorado en Psicoterapia Individual y de Pareja.',
        },
        {
            img: professuibak2,
            name: 'M.C. Rocío González Saucedo',
            title: 'Ingeniería Bioquímica / Diplomado en Nutrición Clínica y Educación en Diabetes / Maestría en Ciencias Médicas y Nutrición Clínica.',
        },
    ];

    const testimonials = [
        {
            image: character1,
            name: 'Olivia Ramírez',
            feedback: '"Psicomed se ha convertido en mi lugar de paz, el Dr. Nogales me hizo sentir escuchada y apoyada en todo momento. Además, el lugar está muy bonito y las terapias me han ayudado a mejorar mi bienestar emocional. ¡Los recomiendo altamente!"'
        },
        {
            image: character2,
            name: 'Andrés Fuentes',
            feedback: '"Mi experiencia en Psicomed fue excepcional. El enfoque integral en la salud mental y emocional me permitió encontrar equilibrio en mi vida. Además el personal es cálido y altamente capacitado, sin lugar a dudas lo recomiendo a mis amigos y familiares."'
        },
        {
            image: character3,
            name: 'Julieta González',
            feedback: '"Psicomed ha sido mi guía en el viaje hacia el equilibrio emocional. La combinación de terapias innovadoras y un equipo amable me hizo sentir respaldado en todo momento. Este centro en Colima es la respuesta perfecta para quienes buscan mejorar su salud mental."'
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: "linear",
    };

    return (
        <div>
            {isDesktop ? (
                <HomeDesktop
                    features={features}
                    experts={experts}
                    testimonials={testimonials}
                    settings={settings}
                />
            ) : (
                <HomeMobile
                    features={features}
                    experts={experts}
                    testimonials={testimonials}
                    settings={settings}
                />
            )}
        </div>
    )

}

export default Home