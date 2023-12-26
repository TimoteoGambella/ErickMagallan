import banner from "../assets/banner-servicios.svg";
import emt1 from "../assets/emt-1.svg";
import emt2 from "../assets/emt-2.svg";
import { IoHeartCircleOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import cat from "../assets/cat.svg";
import { IoIosTimer } from "react-icons/io";
import { RiCalendarEventLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import logo2 from "../assets/logo-white.svg";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function ServiciosDesktop ({tms, contactInfo}) {
    const navigate = useNavigate();
    const scrollNav = (link) =>{
        navigate(link)
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return(
        <>
            <div className='flex flex-col items-center justify-center'>
                <div className='w-full flex flex-col items-center justify-center h-[540px] gap-8 text-center mb-16' style={{
                    backgroundImage: `url(${banner})`,
                    backgroundPosition: "right",
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover"
                }}>
                    <h1 className='font-[700] text-[64px] text-color5 leading-52 font-lato'>
                        Estimulación Magnética Transcraneal
                    </h1>
                </div>
                <div className='flex flex-col items-center justify-center px-4'>
                    <div className="pb-12 border-b border-gray-300 flex items-center justify-center mb-12 w-full max-w-[1200px] gap-20 flex-wrap">
                        <div className="flex flex-col max-w-[600px]">
                            <h2 className="text-48 font-[700] font-roboto leading-52 mb-5">
                                ¿Qué es la <span className="text-color2 leading-52">Estimulación Magnética Transcraneal</span>?
                            </h2>
                            <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8">
                                La Estimulación Magnética Transcraneal (EMT) es una técnica no invasiva que utiliza campos magnéticos para modular la actividad cerebral. <br/><br/> Se aplica a través de una bobina colocada en el cuero cabelludo, generando corrientes eléctricas que afectan las neuronas, siendo utilizada en investigaciones y tratamientos neuropsiquiátricos.
                            </p>
                        </div>
                        <img src={emt1} alt="HOUSE" className='w-[328px] border-b-stone-600'/>
                    </div>

                    <div className="pb-12 border-b border-gray-300 flex items-center justify-center mb-12 w-full max-w-[1200px] gap-20 flex-wrap">
                        <img src={emt2} alt="HOUSE" className='w-[328px] border-b-stone-600'/>
                        <div className="flex flex-col max-w-[600px]">
                            <h2 className="text-48 font-[700] font-roboto  leading-52 mb-12 text-center">
                                ¿Cuáles son los <span className="text-color2 leading-52">beneficios</span>?
                            </h2>
                            <div className="flex items-center justify-center mb-4 gap-2">
                                <div className="w-[40px]">
                                    <IoHeartCircleOutline style={{height:"40px", width:"40px"}} color="#B18431"/>
                                </div>
                                <p className="text-[22px] font-lato font-[700] leading-28 text-color7 max-w-[544px]">
                                    Tratamiento de trastornos mentales como la depresión, el TOC y la esquizofrenia.
                                </p>
                            </div>
                            <div className="flex items-center justify-center mb-4 gap-2">
                                <div className="w-[40px]">
                                    <IoHeartCircleOutline style={{height:"40px", width:"40px"}} color="#B18431"/>
                                </div>
                                <p className="text-[22px] font-lato font-[700] leading-28 text-color7 max-w-[544px]">
                                    Mejora de funciones cognitivas como la memoria y la atención.
                                </p>
                            </div>
                            <div className="flex items-center justify-center mb-4 gap-2">
                                <div className="w-[40px]">
                                    <IoHeartCircleOutline style={{height:"40px", width:"40px"}} color="#B18431"/>
                                </div>
                                <p className="text-[22px] font-lato font-[700] leading-28 text-color7 max-w-[544px]">
                                    Es una terapia no invasiva, por lo que no requiere romper la piel ni provocar dolor de ningún tipo.
                                </p>
                            </div>
                            <div className="flex items-center justify-center mb-4 gap-2">
                                <div className="w-[40px]">
                                    <IoHeartCircleOutline style={{height:"40px", width:"40px"}} color="#B18431"/>
                                </div>
                                <p className="text-[22px] font-lato font-[700] leading-28 text-color7 max-w-[544px]">
                                    Sin medicamentos ni efectos secundarios graves en los pacientes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pb-12 border-b border-gray-300 flex flex-col items-center justify-center">
                        <h2 className="text-[54px] font-[700] font-roboto leading-[60px] mb-12 mt-24 text-center">
                            Aplicación <span className="text-color2 leading-52">Clínica</span> del TMS.
                        </h2>

                        <div className="flex flex-wrap items-center justify-center gap-8">
                            {tms.map((tms, index) => (
                                <div className="border border-color2 flex flex-col w-full h-[294px] max-w-[616px] p-4 items-start" style={{borderRadius:"20px"}}>
                                    <img src={tms.icon} alt="Logo" className="w-[40px] mb-5 mt-4"/>
                                    <h3 className="text-28 font-[700] font-lato leading-32 mb-4">
                                        {tms.title}
                                    </h3>
                                    <div className="flex items-top justify-start gap-2 mb-3">
                                        <div className="w-[6px] pt-2">
                                            <FaCircle className="w-2 h-2"/>
                                        </div>
                                        <p className="text-20 font-lato font-[500] leading-24 text-color7 flex items-center justify-center gap-3">
                                            {tms.p1}
                                        </p>
                                    </div>
                                    <div className="flex items-top justify-center gap-2">
                                        <div className="w-[6px] pt-2">
                                            <FaCircle className="w-2 h-2"/>
                                        </div>
                                        <p className="text-20 font-lato font-[500] leading-24 text-color7 flex items-center justify-center gap-3">
                                            {tms.p2}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='w-full px-4 py-8 pb-0 mb-12 flex flex-col items-center justify-center'>
                    <h2 className="text-36 font-[700] font-roboto  leading-40 max-w-[320px] mb-12 text-center">
                        Preguntas <span className="text-color2 leading-52">Frecuentes</span>.
                    </h2>
                    <div className="flex flex-col gap-4">
                        <div className="p-4 border border-gray-500 max-w-[328px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-[18px] font-roboto max-w-[264px] font-[700] leading-20 text-color7">
                                    ¿Cómo puedo agendar una cita?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                        <div className="p-4 border border-gray-500 max-w-[328px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-[18px] font-roboto max-w-[264px] font-[700] leading-20 text-color7">
                                    ¿Qué pasa si no puedo asistir a mi cita?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                        <div className="p-4 border border-gray-500 max-w-[328px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-[18px] font-roboto max-w-[264px] font-[700] leading-20 text-color7">
                                    ¿Lo que hable en mi terapia es confidencial?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                        <div className="p-4 border border-gray-500 max-w-[328px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-[18px] font-roboto max-w-[264px] font-[700] leading-20 text-color7">
                                    ¿Qué debo llevar para mi primer cita?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                        <div className="p-4 border border-gray-500 max-w-[328px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-[18px] font-roboto max-w-[264px] font-[700] leading-20 text-color7">
                                    ¿Aceptan todas las formas de pago?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
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
        </>
    )
}

export default ServiciosDesktop;