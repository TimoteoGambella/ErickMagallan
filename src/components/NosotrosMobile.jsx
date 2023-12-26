import { FaArrowRight } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { RiCalendarEventLine } from "react-icons/ri";
import cat from "../assets/cat.svg";
import logo2 from "../assets/logo-white.svg";
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import banner from "../assets/banner-nosotros.svg";

import ins1 from "../assets/ins-1-mobile.svg"
import ins2 from "../assets/ins-2.svg"
import ins3 from "../assets/ins-3.svg"

function NosotrosMobile ({features, contactInfo, experts}) {
    const navigate = useNavigate();
    const scrollNav = (link) =>{
        navigate(link)
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-full flex flex-col items-center justify-center h-[540px] gap-8 text-center mb-16' style={{
                backgroundImage: `url(${banner})`,
                backgroundPosition: "center",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
            }}>
                <h1 className='font-[700] text-48 text-color5 leading-52 font-lato max-w-[328px]'>
                    En Psicomed todos somos familia.
                </h1>
                <h2 className='font-[400] text-16 text-color5 leading-24 font-lato max-w-[328px]'>
                    Conoce nuestro equipo de terapeutas y nuestras instalaciones, queremos que te sientas en casa.
                </h2>
            </div>
            <div className='flex flex-col items-center justify-center px-4'>
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
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='mt-12 max-w-[320px] border-b border-gray-300 pb-16'>
                    <h2 className="text-36 font-[700] font-roboto text-color6 mb-12 max-w-[320px]">Conoce al <span className="text-color2 leading-40">equipo</span>.</h2>
                    
                    {experts.map((expert, index) => (
                        <div key={index} className={`bg-white rounded-lg ${index === 0 && "mb-12"}`}>
                            <img src={expert.img} alt={expert.name} className='w-full h-auto rounded-lg mb-8' />
                            <h3 className="font-[700] font-lato text-36 leading-40 text-color6">{expert.name}</h3>
                            <p className="font-lato font-[400] text-20 leading-20 text-[#697077] mt-6">{expert.title}</p>
                            <p className="font-lato font-[400] text-16 leading-20 text-[#697077] mt-6">
                                Lorem ipsum dolor sit amet consectetur. Pretium tellus leo elit et et amet. Tristique volutpat vel aenean lectus a dapibus euismod turpis amet.
                                Tellus commodo sit quis feugiat dui et pellentesque quis. Gravida velit nunc mi aliquam. Nullam leo sit faucibus tincidunt velit. Tellus in porta ornare faucibus tempus vel amet sed faucibus.
                            </p>
                            <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-8 w-full mt-12">
                                {expert.uni.map((uni,i)=>{
                                    return(
                                        <img src={uni} alt="ESTUDIO" className="w-[156px] h-[50px]"/>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col items-center justify-center px-4 border-b border-gray-300 pb-16'>
                    <div className="pb-6 flex flex-col items-center justify-center mt-16 max-w-[320px]">
                        <h2 className="text-36 font-[700] font-roboto  leading-36 mb-12">
                            Conoce nuestras <span className="text-color2">instalaciones</span>.
                        </h2>

                        <img src={ins1} alt="" className="w-[328px] h-[328px]"/>
                        <img src={ins2} alt="" className="w-[328px] h-[328px]"/>
                        <img src={ins3} alt="" className="w-[328px] h-[328px]"/>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center px-4'>
                    <div className="pb-6 flex flex-col items-center justify-center mt-16 max-w-[320px]">
                        <h2 className="text-36 font-[700] font-roboto  leading-36 mb-4">
                            Da el primer paso hacia <span className="text-color2">tu bienestar</span>.
                        </h2>
                        <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8 max-w-[320px]">
                            Agenda tu cita vía Whatsapp ó llama a nuestros números de contacto.
                        </p>
                    </div>
                </div>
            </div> 
            <div className='flex flex-col items-center justify-center gap-8'>
                {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-300 items-start flex flex-col w-full max-w-[328px] min-h-[292px] gap-8">
                        <p>
                            {info.icon}
                        </p>
                        <h3 className="font-[700] leading-24 text-24 mb-2">{info.method}</h3>
                        <div className='flex flex-col items-start justify-center gap-4'>
                            <p className="font-[700] text-lato text-16 leading-20 text-color6 flex items-center justify-center gap-2">
                                {info.secondIcon}
                                {info.details}
                            </p>
                            <p className="text-gray-500 flex items-center justify-center gap-2">
                                <RiCalendarEventLine/>
                                {info.day}
                            </p>
                            <p className="text-gray-500 flex items-center justify-center gap-2">
                                <IoIosTimer/>
                                {info.hour}
                            </p>
                            {info.method === "Nuestro domicilio" && 
                                <div className='w-[296px] h-[296px]'>
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6899168049385!2d-103.70856388117558!3d19.2523412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255ab827db651d%3A0x9a66c57a12de163e!2sPsicomed!5e0!3m2!1ses!2sar!4v1703428549214!5m2!1ses!2sar" 
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0 }} 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            }
                        </div>
                    </div>
                ))}

                <img src={cat} alt="CAT" className='mb-16' />

            </div>
            <div className='bg-color6 w-full flex flex-col items-center justify-center pt-6 pb-12 text-color5 gap-8'>
                <img src={logo2} alt="LOGO" onClick={()=>scrollNav("/")}/>
                <nav className="mb-4">
                    <ul className="flex space-x-4">
                        <li><p onClick={()=>scrollNav("/")} className="hover:underline">Inicio</p></li>
                        <li><p onClick={()=>scrollNav("/servicios")} className="hover:underline">Servicios</p></li>
                        <li><p onClick={()=>scrollNav("/nosotros")} className="hover:underline">Nosotros</p></li>
                    </ul>
                </nav>
                <div className="flex space-x-4 mb-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                    <a href="https://wa.me/numero" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></a>
                    <a href="mailto:email@example.com"><FaEnvelope size={24} /></a>
                </div>
                <p>Psicomed © 2023. All rights reserved.</p>
            </div>
        </div>
    )
}

export default NosotrosMobile