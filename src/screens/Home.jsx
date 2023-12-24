import house from '../assets/home-1.svg';
import service1 from '../assets/home-2.svg';
import services from '../assets/home-3.svg';
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronDown } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { IoIosHeartHalf } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";

import person1 from '../assets/man.svg';
import person2 from "../assets/woman.svg"

function Home () {
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

    return (
        <div className='flex flex-col items-center justify-center px-4'>
            <div className="pb-6 border-b border-gray-300 flex flex-col items-center justify-center">
                <h2 className="text-36 font-[700] font-roboto md:text-48 leading-52 max-w-[320px] md:max-w-[600px] mb-5">
                    En <span className="text-color2 leading-52">Psicomed</span>, queremos que te sientas <span className="text-color2">en casa</span>.
                </h2>
                <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8 max-w-[320px]">
                    En nuestro espacio, la confianza y la comodidad son fundamentales. Aquí, te recibimos con los brazos abiertos, comprometidos no solo a ofrecer servicios de bienestar de calidad, sino a construir un refugio donde encuentres seguridad, comprensión y apoyo.
                </p>
                <img src={house} alt="HOUSE" className='w-[328px] border-b-stone-600'/>
            </div>

            <div className="pt-6 border-b border-gray-300 flex flex-col items-center justify-center pb-12">
                <h2 className="text-36 font-[700] font-roboto md:text-48 leading-52 max-w-[320px] md:max-w-[600px]">
                Estimulación Magnética <span className="text-color2 leading-52">Transcraneal</span>.
                </h2>
                <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8 max-w-[320px]">
                    En nuestro espacio, la confianza y la comodidad son fundamentales. Aquí, te recibimos con los brazos abiertos, comprometidos no solo a ofrecer servicios de bienestar de calidad, sino a construir un refugio donde encuentres seguridad, comprensión y apoyo.
                </p>
                <img src={service1} alt="HOUSE" className='w-[328px] border-b-stone-600 mb-5'/>

                <p className='flex items-center justify-center gap-2 text-color2 font-[700] leading-20 font-lato pb-12'>
                    Lee más sobre esto
                    <FaArrowRight />
                </p>
            </div>

            <div className='mt-12 max-w-[320px] '>
                <h2 className="text-36 font-[700] font-roboto text-color6 mb-6">Nuestros <span className="text-color2 leading-40">servicios</span>.</h2>
                <ul className="space-y-4">
                    {['Psicoterapia individual y de parejas', 'Estimulación Magnética Transcraneal', 'Asesoría Nutricional y Educación en Diabetes', 'Medicina Genómica', 'Terapias Holísticas'].map((service, index) => (
                    <li key={index} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
                        <span className="font-[700] font-lato text-20 leading-20 text-color7">{service}</span>
                        <FaChevronDown />
                    </li>
                    ))}
                </ul>
                <img src={services} alt="SERVICES" className='mt-8 pb-12 border-b border-gray-300 w-[328px] m-auto'/>
            </div>

            <div className='mt-12 max-w-[320px] pb-12 border-b border-gray-300'>
                <h2 className="text-36 font-[700] font-roboto text-color6 mb-6 max-w-[320px]">¿Por qué elegir a <span className="text-color2 leading-40">Psicomed</span>?</h2>
                <p className="text-16 font-lato font-normal leading-20 text-color7 mb-12 max-w-[320px]">
                    Elegir el apoyo adecuado es esencial en el camino hacia el bienestar. En Psicomed, estamos comprometidos a ser ese aliado confiable y experto que buscas.
                </p>
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="bg-white rounded-lg p-4 flex flex-col items-start gap-2">
                            <p className='text-color2'>
                                {feature.icon}
                            </p>
                            <h3 className="font-[700] font-lato text-20 leading-20 ml-2 text-color6 mb-2">{feature.title}</h3>
                            <p className="font-lato font-normal text-16 leading-20 text-color7 mb-4">
                                {feature.description}
                            </p>
                            <p className='flex items-center justify-center gap-2 text-color2 font-[700] leading-20 font-lato'>
                                {feature.linkText}
                                <FaArrowRight />
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='mt-12 max-w-[320px] mb-16'>
                <h2 className="text-36 font-[700] font-roboto text-color6 mb-12 max-w-[320px]">Nuestros <span className="text-color2 leading-40">Expertos</span>.</h2>
                
                {experts.map((expert, index) => (
                    <div key={index} className="bg-white rounded-lg mb-12">
                        <img src={expert.img} alt={expert.name} className='w-full h-auto rounded-lg mb-4' />
                        <h3 className="font-[700] font-lato text-20 leading-20 text-color6 text-center">{expert.name}</h3>
                        <p className="font-lato font-normal text-16 leading-20 text-[#697077] text-center mt-1">{expert.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home