import { FaUserFriends } from 'react-icons/fa';
import { IoIosHeartHalf } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";
import person1 from '../assets/man.svg';
import person2 from "../assets/woman.svg"

import character1 from "../assets/person1.svg"
import character2 from "../assets/person2.svg"
import character3 from "../assets/person3.svg"
import HomeMobile from '../components/HomeMobile';
import HomeDesktop from '../components/HomeDesktop';

function Home () {
    const features = [
        {
            icon: <FaUserFriends className='w-12 h-12'/>,
            title: 'Equipo de expertos',
            description: 'Tenemos las herramientas para ofrecerte soluciones basadas en los más recientes hallazgos y metodologías en el ámbito psiquiátrico y terapéutico.',
            linkText: 'Conoce al equipo',
            link: '/nosotros'
        },
        {
            icon: <IoChatbubblesSharp className='w-12 h-12'/>,
            title: 'Atención personalizada',
            description: 'Adaptamos nuestro enfoque y tratamiento según tus necesidades específicas, garantizando un cuidado a medida y centrado en ti.',
            linkText: 'Nuestros servicios',
            link: '/servicios/emt'
        },
        {
            icon: <IoIosHeartHalf className='w-12 h-12'/>,
            title: 'Entorno seguro y respetuoso',
            description: 'Te ofrecemos un espacio donde puedes sentirte seguro y escuchado, en un ambiente de total confidencialidad.',
            linkText: 'Conoce el espacio',
            link: '/nosotros'
        },
    ];

    const experts = [
        {
            img: person1,
            name: 'Dr. José Luis Nogales Galván',
            title: 'Doctorado en Psicoterapia Individual y de Pareja.',
        },
        {
            img: person2,
            name: 'M.C. Rocío González Saucedo',
            title: 'Maestría en Ciencias Médicas.',
        },
    ];

    const testimonials = [
        {
            image: character1, 
            name: 'Ambar Ramírez',
            feedback: 'Psicomed se ha convertido en mi lugar de paz, el Dr. Nogales me hizo sentir escuchada y apoyada en todo momento. Además, el lugar está muy bonito y las terapias me han ayudado a mejorar mi bienestar emocional. ¡Los recomiendo altamente!'
        },
        {
            image: character2, 
            name: 'Erick Magallán',
            feedback: 'Mi experiencia en Psicomed fue excepcional. El enfoque integral en la salud mental y emocional me permitió encontrar equilibrio en mi vida. Además el personal es cálido y altamente capacitado, sin lugar a dudas lo recomiendo a mis amigos y familiares.'
        },
        {
            image: character3, 
            name: 'Julieta González',
            feedback: 'Psicomed ha sido mi guía en el viaje hacia el equilibrio emocional. La combinación de terapias innovadoras y un equipo amable me hizo sentir respaldado en todo momento. Este centro en Colima es la respuesta perfecta para quienes buscan mejorar su salud mental.'
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

      return (
        <>
            <div className="block md:hidden">
                <HomeMobile 
                    features={features}
                    experts={experts}
                    testimonials={testimonials}
                    settings={settings}
                />
            </div>
            <div className="hidden md:block">
                <HomeDesktop 
                    features={features}
                    experts={experts}
                    testimonials={testimonials}
                    settings={settings}
                />
            </div>
        </>
    )
    
}

export default Home