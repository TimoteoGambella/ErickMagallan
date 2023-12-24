import house from '../assets/home-1.svg';
import service1 from '../assets/home-2.svg';
import services from '../assets/home-3.svg';
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronDown } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { IoIosHeartHalf } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { RiCalendarEventLine } from "react-icons/ri";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import cat from "../assets/cat.svg";
import logo2 from "../assets/logo-white.svg";
import person1 from '../assets/man.svg';
import person2 from "../assets/woman.svg"
import { FaFacebook, FaWhatsapp, FaEnvelope,FaHome } from 'react-icons/fa';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import character1 from "../assets/person1.svg"
import character2 from "../assets/person2.svg"
import character3 from "../assets/person3.svg"
import { useNavigate } from 'react-router-dom';
import HomeMobile from '../components/HomeMobile';
import HomeDesktop from '../components/HomeDesktop';

function Home () {
    const navigate = useNavigate();
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

      return (
        <>
            <div className="block md:hidden">
                <HomeMobile 
                    features={features}
                    experts={experts}
                    testimonials={testimonials}
                    contactInfo={contactInfo}
                    settings={settings}
                />
            </div>
            <div className="hidden md:block">
                <HomeDesktop 
                    features={features}
                    experts={experts}
                    testimonials={testimonials}
                    contactInfo={contactInfo}
                    settings={settings}
                />
            </div>
        </>
    )
    
}

export default Home