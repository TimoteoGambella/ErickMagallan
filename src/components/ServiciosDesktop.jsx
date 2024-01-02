import banner from "../assets/banner-servicios.svg";
import emt1 from "../assets/emt-1.svg";
import emt2 from "../assets/emt-2.svg";
import { IoHeartCircleOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import FooterDesktop from "./FooterDesktop";
import { publis_tms } from "../publis";
import { CgFileDocument } from "react-icons/cg";
import { PiUserCircleFill } from "react-icons/pi";
import { LuLanguages } from "react-icons/lu";

function ServiciosDesktop ({tms, nav}) {
    const navigate = useNavigate();

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

                    <div className="pb-36 border-b border-gray-300 flex items-center justify-center mb-12 w-full max-w-[1280px] gap-20 flex-wrap">
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

                    <div className="pb-20 border-b border-gray-300 flex flex-col items-center justify-center max-w-[1280px]">
                        <h2 className="text-[54px] font-[700] font-roboto leading-[60px] mb-12 mt-24 text-center">
                            Aplicación <span className="text-color2 leading-52">Clínica</span> del TMS.
                        </h2>

                        <div className="flex flex-wrap items-center justify-center gap-8">
                            {tms.map((tms, index) => (
                                <div className="border border-color2 flex flex-col w-full h-[294px] max-w-[616px] p-8 items-start" style={{borderRadius:"20px"}}>
                                    <img src={tms.icon} alt="Logo" className="w-[40px] mb-5 mt-4"/>
                                    <h3 className="text-28 font-[700] font-lato leading-32 mb-4">
                                        {tms.title}
                                    </h3>
                                    <div className="flex items-top justify-start gap-4 mb-3">
                                        <div className="w-[6px] pt-2">
                                            <FaCircle className="w-2 h-2"/>
                                        </div>
                                        <p className="text-20 font-lato font-[500] leading-24 text-color7 flex items-center justify-center gap-3">
                                            {tms.p1}
                                        </p>
                                    </div>
                                    <div className="flex items-top justify-center gap-4">
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

                <div className="pb-12 pt-20 border-b border-gray-300 flex flex-col items-center justify-center">
                        <h2 className="text-[54px] font-[700] font-roboto  leading-[60px] mb-12 text-center">
                            Publicaciones <span className="text-color2 leading-40">científicas</span> sobre <span className="text-color2 leading-40">TMS</span>.
                        </h2>
                        <div className="flex flex-wrap items-center justify-center max-w-[1280px] gap-12 mt-6">
                            {publis_tms.map((publi, index) => (
                                <div className="flex flex-col items-start justify-start pb-2 w-[394px]" key={index}>
                                    <img src={publi.photo} alt={publi.title} className="w-[394px] h-[300px]"/>
                                    <h3 className="font-[700] font-roboto text-24 leading-24 text-color6 mb-4 mt-8">{publi.title}</h3>
                                    <p className='font-[400] font-roboto text-16 leading-20 text-color6'>{publi.description}</p>
                                    <div className="flex items-center justify-start mt-4 gap-5">
                                        <div className="flex items-center justify-center gap-1">
                                            <CgFileDocument />
                                            <p>{publi.problem}</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1">
                                            <PiUserCircleFill />
                                            <p>Actipulse</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1">
                                            <LuLanguages />
                                            <p>{publi.language}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                <div className='w-full px-4 py-8 pt-20 pb-0 mb-12 flex flex-col items-center justify-center pb-12 border-b border-gray-300'>
                    <h2 className="text-44 font-[700] font-roboto leading-44 mb-12 text-center">
                        Preguntas <span className="text-color2 leading-52">Frecuentes</span>.
                    </h2>
                    <div className="flex flex-col gap-4 w-full max-w-[900px]">
                        <div className="p-4 border border-gray-500 w-full max-w-[900px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-20 font-roboto font-[700] w-full leading-20 text-color7">
                                    ¿Cómo puedo agendar una cita?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                        <div className="p-4 border border-gray-500 w-full max-w-[900px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-20 font-roboto font-[700] w-full leading-20 text-color7">
                                    ¿Qué pasa si no puedo asistir a mi cita?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                        <div className="p-4 border border-gray-500 w-full max-w-[900px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-20 font-roboto font-[700] w-full leading-20 text-color7">
                                    ¿Lo que hable en mi terapia es confidencial?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                        <div className="p-4 border border-gray-500 w-full max-w-[900px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-20 font-roboto font-[700] w-full leading-20 text-color7">
                                    ¿Qué debo llevar para mi primer cita?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                        <div className="p-4 border border-gray-500 w-full max-w-[900px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-20 font-roboto font-[700] w-full leading-20 text-color7">
                                    ¿Aceptan todas las formas de pago?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                    </div>
                </div>

                <FooterDesktop />
            </div>
        </>
    )
}

export default ServiciosDesktop;