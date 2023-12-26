import { IoIosTimer } from "react-icons/io";
import { RiCalendarEventLine } from "react-icons/ri";
import cat from "../assets/cat.svg";
import logo2 from "../assets/logo-white.svg";
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import banner from "../assets/banner-nosotros.svg";

import ins1 from "../assets/ins-1.svg"
import ins2 from "../assets/ins-2.svg"
import ins3 from "../assets/ins-3.svg"

function NosotrosDesktop ({features, contactInfo, experts}) {
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
            
            <div className='w-full flex flex-col items-center justify-center h-[736px] gap-8 text-center mb-20' style={{
                backgroundImage: `url(${banner})`,
                backgroundPosition: "center",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
            }}>
                <h1 className='font-[700] text-[64px] text-color5 leading-[70px] font-lato'>
                    En Psicomed todos somos familia.
                </h1>
                <h2 className='font-[400] text-[22px] text-color5 leading-32 font-lato max-w-[765px]'>
                    Conoce nuestro equipo de terapeutas y nuestras instalaciones, queremos que te sientas en casa.
                </h2>
            </div>

            <div className='flex flex-col items-center justify-center px-4'>
                <div className='mt-12 pb-12 border-b border-gray-300 flex items-top justify-center flex-wrap'>
                    <div className='flex flex-col mr-20'>
                        <h2 className="text-48 font-[700] font-roboto leading-52 mb-8 max-w-[400px]">¿Por qué elegir a <span className="text-color2 leading-40">Psicomed</span>?</h2>
                        <p className="text-[18px] font-lato font-normal leading-24 text-color7 mb-12 max-w-[384px]">
                            Elegir el apoyo adecuado es esencial en el camino hacia el bienestar. En Psicomed, estamos comprometidos a ser ese aliado confiable y experto que buscas.
                        </p>
                    </div>
                    {features.map((feature, index) => (
                        <li key={index} className="bg-white rounded-lg flex flex-col items-start gap-2 max-w-[272px]">
                            <p className='text-color2'>
                                {feature.icon}
                            </p>
                            <h3 className="font-[700] font-lato text-20 leading-20 text-color6 mb-2 pt-4">{feature.title}</h3>
                            <p className="font-lato font-normal text-16 leading-20 text-color7 mb-4 max-w-[240px] mr-4">
                                {feature.description}
                            </p>
                        </li>
                    ))}
                </div>

                <div className='mt-12 mb-20 border-b border-gray-300 pb-40'>
                    <h2 className="text-48 font-[700] font-roboto text-color6 mb-12 text-center">Conoce al <span className="text-color2 leading-40">equipo</span>.</h2>
                    <div className='flex flex-col items-top justify-center gap-24'>
                        {experts.map((expert, index) => (
                            <div key={index} className={`bg-white rounded-lg ${index === 0 && "mb-12"} flex gap-20 flex-wrap lg:flex-nowrap items-center justify-center`}>
                                {index===0 &&
                                    <img src={expert.img} alt={expert.name} className=' h-auto rounded-lg mb-4 w-full max-w-[418px]' />
                                }
                                <div className="flex flex-col w-full max-w-[600px]">
                                    <h3 className="font-[700] font-lato text-48 leading-52 text-color6 mb-4" style={{letterSpacing:"1px"}}>{expert.name}</h3>
                                    <p className="font-lato font-[700] text-[18px] leading-28 text-[#697077] mb-6">{expert.title}</p>
                                    <p className="font-lato font-[400] text-20 leading-28 text-[#697077] mb-12">
                                        Lorem ipsum dolor sit amet consectetur. Pretium tellus leo elit et et amet. Tristique volutpat vel aenean lectus a dapibus euismod turpis amet.
                                        Tellus commodo sit quis feugiat dui et pellentesque quis. Gravida velit nunc mi aliquam. Nullam leo sit faucibus tincidunt velit. Tellus in porta ornare faucibus tempus vel amet sed faucibus.
                                    </p>
                                    <div className="flex items-center justify-between flex-wrap gap-x-2 gap-y-8 w-full">
                                        {expert.uni.map((uni,i)=>{
                                            return(
                                                <img src={uni} alt="ESTUDIO" className="w-[156px] h-[50px]"/>
                                            )
                                        })}
                                    </div>
                                </div>
                                {index!==0 &&
                                    <img src={expert.img} alt={expert.name} className=' h-auto rounded-lg mb-4 w-full max-w-[418px]' />
                                }
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className='flex flex-col items-center justify-center px-4 border-b border-gray-300 pb-16'>
                <h2 className="text-48 font-[700] font-roboto  leading-36 mb-12">
                    Conoce nuestras <span className="text-color2">instalaciones</span>.
                </h2>
                <img src={ins1} alt="" className="w-[1280px] h-[580px]"/>
                <div className="pb-6 flex flex-wrap items-center justify-center mt-16 gap-12">
                    <img src={ins2} alt="" className="w-[616px] h-[580px]"/>
                    <img src={ins3} alt="" className="w-[616px] h-[580px]"/>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center px-4'>
                <div className="pb-6 flex items-center justify-center mt-16 gap-8">
                    <div className='flex flex-col mb-8'>
                        <h2 className="text-48 font-[700] font-roboto leading-52 mb-8">
                            Da el primer paso hacia <span className="text-color2">tu bienestar</span>.
                        </h2>
                        <p className="text-20 font-lato font-normal leading-20 text-color7 mb-8">
                            Agenda tu cita vía Whatsapp ó llama a nuestros números de contacto.
                        </p>
                    </div>
                    <img src={cat} alt="CAT" className='mb-16' />
                </div>
            </div>


            
            <div className='flex items-center justify-center gap-8 flex-wrap w-full mb-8'>
                {contactInfo.map((info, index) => (
                    <>
                        {info.method !== "Nuestro domicilio" &&
                            <div key={index} className="bg-white p-4 rounded-lg border border-gray-300 items-start flex flex-col w-full max-w-[405px] min-h-[230px] gap-8">
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
                                </div>
                            </div>
                        }
                    </>
                ))}
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-300 items-start flex flex-col w-[95%] max-w-[1280px] gap-8 mb-24">
                <p>
                    {contactInfo[3].icon}
                </p>
                <h3 className="font-[700] leading-24 text-24 mb-2">{contactInfo[3].method}</h3>
                <div className='flex flex-col items-start justify-center gap-4'>
                    <p className="font-[700] text-lato text-16 leading-20 text-color6 flex items-center justify-center gap-2">
                        {contactInfo[3].secondIcon}
                        {contactInfo[3].details}
                    </p>
                    <p className="text-gray-500 flex items-center justify-center gap-2">
                        <RiCalendarEventLine/>
                        {contactInfo[3].day}
                    </p>
                    <p className="text-gray-500 flex items-center justify-center gap-2">
                        <IoIosTimer/>
                        {contactInfo[3].hour}
                    </p>
                </div>
                <div className='w-full h-full min-w-[296px] grow'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6899168049385!2d-103.70856388117558!3d19.2523412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255ab827db651d%3A0x9a66c57a12de163e!2sPsicomed!5e0!3m2!1ses!2sar!4v1703428549214!5m2!1ses!2sar" 
                        width="100%" 
                        height="365px" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className='bg-color6 w-full flex flex-col items-center justify-center pt-6 pb-12 text-color5 gap-8'>
                <div className='flex items-center justify-between w-full px-20 max-w-[1280px]'>
                    <img onClick={()=>scrollNav("/")} src={logo2} alt="LOGO" className='w-[181px]'/>
                    <nav className="mb-4 w-[383px] flex items-center justify-center">
                        <ul className="flex space-x-4 w-[383px] items-center justify-center">
                            <li><p onClick={()=>scrollNav("/")} className="hover:underline">Inicio</p></li>
                            <li><p onClick={()=>scrollNav("/")} className="hover:underline">TMS</p></li>
                            <li><p onClick={()=>scrollNav("/servicios")} className="hover:underline">Servicios</p></li>
                            <li><p onClick={()=>scrollNav("/nosotros")} className="hover:underline">Nosotros</p></li>
                            <li><p onClick={()=>scrollNav("/nosotros")} className="hover:underline">Blog</p></li>
                        </ul>
                    </nav>
                    <div className="flex space-x-4 mb-4 w-[181px]">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                        <a href="https://wa.me/numero" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></a>
                        <a href="mailto:email@example.com"><FaEnvelope size={24} /></a>
                    </div>
                </div>
                <p className='w-full max-w-[383px] text-center'>Psicomed © 2023. All rights reserved.</p>
            </div>
        </div>
    )
}

export default NosotrosDesktop