import banner from "../../assets/banner-servicios-3.svg";
import an1 from "../../assets/an-1.svg";
import an2 from "../../assets/an-2.svg";
import pip3 from "../../assets/pip-3.svg";
import { GoPlus } from "react-icons/go";
import FooterDesktop from "../FooterDesktop";
import ben1 from "../../assets/beneficio-1.svg"
import ben2 from "../../assets/beneficio-1.svg"
import ben3 from "../../assets/beneficio-1.svg"
import unam from "../../assets/unam.svg"
import u_colima from "../../assets/u-de-colima.svg"
import imp from "../../assets/imp.svg"
import terapeuta from "../../assets/man.svg"
import circleWhap from "../../assets/circle-whap.svg";
import circleCheck from "../../assets/circle-check.svg";
import circlePerson from "../../assets/circle-person.svg";
import circleCalendar from "../../assets/circle-calendar.svg";
import line from "../../assets/circle-line.svg";
import { FaArrowRight, FaCircle } from "react-icons/fa";
import { IoHeartCircleOutline } from "react-icons/io5";
import { publis_tms } from "../../publis";
import { CgFileDocument } from "react-icons/cg";
import { PiUserCircleFill } from "react-icons/pi";
import { LuLanguages } from "react-icons/lu";

function SanDesktop ({tms, nav}) {
    const beneficios = [
        {
            photo: ben1,
            title: "Beneficio 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        },
        {
            photo: ben2,
            title: "Beneficio 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        },
        {
            photo: ben3,
            title: "Beneficio 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        },
    ]
    const beneficios2 = [
        {
            photo: ben1,
            title: "Beneficio 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        },
        {
            photo: ben2,
            title: "Beneficio 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        },
        {
            photo: ben3,
            title: "Beneficio 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        },
    ]
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
                        Asesoría nutricional y Educación en Diabetes
                    </h1>
                </div>
                <div className='flex flex-col items-center justify-center px-4'>
                    <div className="pb-12 flex items-center justify-center mb-12 w-full gap-20 flex-wrap">
                        <div className="flex flex-col max-w-[700px]">
                            <h2 className="text-48 font-[700] font-roboto leading-52 mb-5">
                                ¿Qué es la <span className="text-color2 leading-52">Educación en Diabetes</span>?
                            </h2>
                            <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8 max-w-[600px]">
                                La Educación en Diabetes es un elemento crucial para el manejo efectivo de esta enfermedad. Proporciona los conocimientos y habilidades para comprender, prevenir y controlar diabetes de manera efectiva en la vida diaria.<br/><br/>
                                El objetivo es que los pacientes tomen el control de su salud, y mejoren su calidad de vida.
                            </p>
                        </div>
                        <img src={an1} alt="HOUSE" className='w-[500px] border-b-stone-600'/>
                    </div>

                    <div className="pb-36 border-b border-gray-300 flex items-center justify-center mb-12 w-full max-w-[1280px] gap-20 flex-wrap">
                        <img src={an2} alt="HOUSE" className='w-[520px] border-b-stone-600'/>
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
                </div>

                <div className='w-full px-4 py-8 pt-20 mb-12 flex flex-col items-center justify-center pb-12 border-b border-gray-300'>
                    <h2 className="text-44 font-[700] font-roboto leading-44 mb-12 text-center">
                        Preguntas <span className="text-color2 leading-52">Frecuentes</span>.
                    </h2>
                    <div className="flex flex-col gap-4 w-full max-w-[900px]">
                        <div className="p-4 border border-gray-500 w-full max-w-[900px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-20 font-roboto font-[700] w-full leading-20 text-color7">
                                    ¿Cuándo acudir a terapia individual?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                        <div className="p-4 border border-gray-500 w-full max-w-[900px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-20 font-roboto font-[700] w-full leading-20 text-color7">
                                    ¿Cuándo acudir a terapia de pareja?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                        <div className="p-4 border border-gray-500 w-full max-w-[900px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-20 font-roboto font-[700] w-full leading-20 text-color7">
                                    ¿Por qué acudir a terapia de pareja con un profesional?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                        <div className="p-4 border border-gray-500 w-full max-w-[900px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-20 font-roboto font-[700] w-full leading-20 text-color7">
                                    ¿Cuál es la finalidad de la terapia de pareja?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
                        <div className="p-4 border border-gray-500 w-full max-w-[900px] rounded-md">
                            <button className="flex justify-between items-center w-full text-left">
                                <span className="text-20 font-roboto font-[700] w-full leading-20 text-color7">
                                    ¿Qué hago si mi pareja no quiere o no puede ir a terapia?
                                </span>
                                <GoPlus size={20}/>
                            </button>
                        </div>
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

                    <div className="flex flex-col justify-center items-center pb-32 mt-32 border-b border-gray">
                        <h2 className="text-48 font-[700] font-roboto  leading-40 max-w-[320px] mb-12 text-center">
                            Tu terapeuta.
                        </h2>       
                        <div className="flex justify-center items-center flex-wrap gap-20">
                            <img src={terapeuta} alt="" className="w-[600px] mb-8"/>
                            <div className="w-full max-w-[600px] flex flex-col items-start justify-center">
                                <h3 className="text-48 leading-52 text-color6 font-roboto font-[700] mb-6" style={{letterSpacing:"1px"}}>
                                    Dr. José Luis Nogales Galván
                                </h3>
                                <h4 className="text-20 leading-22 text-color6 font-roboto font-[700] mb-8">
                                    Médico Psiquiatra, Maestro y Doctor en Psicoterapia Individual y de Pareja.
                                </h4>
                                <p className="text-16 font-[400] text-color7 font-lato mb-12">
                                    Lorem ipsum dolor sit amet consectetur. Pretium tellus leo elit et et amet. Tristique volutpat vel aenean lectus a dapibus euismod turpis amet.
                                    <br/><br/>
                                    Tellus commodo sit quis feugiat dui et pellentesque quis. Gravida velit nunc mi aliquam. Nullam leo sit faucibus tincidunt velit. Tellus in porta ornare faucibus tempus vel amet sed faucibus.
                                </p>
                                <div className="flex flex-wrap gap-4 gap-y-8 justify-center items-center">
                                    <img src={unam} alt="" />
                                    <img src={u_colima} alt="" />
                                    <img src={imp} alt="" />
                                </div>
                            </div>
                        </div>  
                    </div>

                    <div className="flex flex-col justify-center items-center mt-16 w-full max-w-[1280px]">
                        <h2 className="text-48 font-[700] font-roboto  leading-40 mb-12 text-center">
                            ¿Cómo agendo mi cita?
                        </h2>         
                        <div className="flex flex-col justify-center items-center gap-8 w-full max-w-[1280px]">
                            <div className="flex w-full justify-evenly items-center">
                                <div className="flex flex-col gap-4 justify-center items-center w-[213px]">
                                    <img src={circleWhap} alt="" />
                                    <h4 className="text-24 text-color6 font-[700] leading-24">Paso 1</h4>
                                    <p className="text-16 text-color7 font-[400] leading-16 text-center">Contáctanos por teléfono o vía Whatsapp.</p>
                                </div>
                                <div className="flex flex-col gap-4 justify-center items-center w-[213px]">
                                    <img src={circleCheck} alt="" />
                                    <h4 className="text-24 text-color6 font-[700] leading-24">Paso 2</h4>
                                    <p className="text-16 text-color7 font-[400] leading-16 text-center">Agenda una cita en el horario y día que más te convenga.</p>
                                </div>
                                <div className="flex flex-col gap-4 justify-center items-center w-[213px]">
                                    <img src={circlePerson} alt="" />
                                    <h4 className="text-24 text-color6 font-[700] leading-24">Paso 3</h4>
                                    <p className="text-16 text-color7 font-[400] leading-16 text-center">Asiste a tu cita en el horario y día acordado.</p>
                                </div>
                                <div className="flex flex-col gap-4 justify-center items-center w-[213px]">
                                    <img src={circleCalendar} alt="" />
                                    <h4 className="text-24 text-color6 font-[700] leading-24">Paso 4</h4>
                                    <p className="text-16 text-color7 font-[400] leading-16 text-center">Realiza el pago y agenda tu siguiente cita.</p>
                                </div>
                            </div>

                            <p className='flex items-center justify-center gap-2 text-20 text-color2 font-[700] leading-20 font-lato mt-12 mb-24'
                                onClick={() => window.open("https://w.app/psicomed", "_blank")}
                            >
                                Agenda una cita
                                <FaArrowRight />
                            </p>
                        </div>
                    </div>
                </div>

                <FooterDesktop />
            </div>
        </>
    )
}

export default SanDesktop;