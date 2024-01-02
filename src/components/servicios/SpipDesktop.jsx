import banner from "../../assets/banner-servicios-2.svg";
import pip1 from "../../assets/pip-1.svg";
import pip2 from "../../assets/pip-2.svg";
import pip3 from "../../assets/pip-3.svg";
import { GoPlus } from "react-icons/go";
import FooterDesktop from ".././FooterDesktop";
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
import { FaArrowRight } from "react-icons/fa";

function SpipDesktop ({tms, nav}) {
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
                        Psicoterapia Individual y de Pareja
                    </h1>
                </div>
                <div className='flex flex-col items-center justify-center px-4'>
                    <div className="pb-12 flex items-center justify-center mb-12 w-full gap-20 flex-wrap">
                        <div className="flex flex-col max-w-[700px]">
                            <h2 className="text-48 font-[700] font-roboto leading-52 mb-5">
                                ¿Por qué elegir la <span className="text-color2 leading-52">psicoterapia</span>?
                            </h2>
                            <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8">
                                En nuestro espacio, la confianza y la comodidad son fundamentales. Aquí, te recibimos con los brazos abiertos, comprometidos no solo a ofrecer servicios de bienestar de calidad, sino a construir un refugio donde encuentres seguridad, comprensión y apoyo.
                            </p>
                        </div>
                        <img src={pip1} alt="HOUSE" className='w-[500px] border-b-stone-600'/>
                    </div>

                    <div className="pb-36 border-b border-gray-300 flex items-center justify-center mb-12 w-full max-w-[1280px] gap-20 flex-wrap">
                        <h2 className="text-48 font-[700] font-roboto leading-52 mb-8 text-center">
                            ¿Qué <span className="text-color2 leading-52">terapia</span> es para mí?
                        </h2>
                        <div className="flex flex-wrap gap-20 justify-center items-center">
                            <img src={pip2} alt="" />
                            <div className="flex flex-col w-[600px] items-start">
                                <h2 className="text-48 font-[700] font-roboto leading-52 mb-8 text-center">
                                    Psicoterapia <span className="text-color2 leading-52">Individual</span>.
                                </h2>
                                <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8">
                                    Lorem ipsum dolor sit amet consectetur. Pretium tellus leo elit et et amet. Tristique volutpat vel aenean lectus a dapibus euismod turpis amet. Tellus commodo sit quis feugiat dui et pellentesque quis. Gravida velit nunc mi aliquam. Nullam leo sit faucibus tincidunt velit. Tellus in porta ornare faucibus tempus vel amet sed faucibus.
                                </p>
                                {
                                    beneficios.map((beneficio, index) => {
                                        return(
                                            <div className="flex mb-4">
                                                <img src={beneficio.photo} alt="" />
                                                <div className="flex flex-col ml-5">
                                                    <h3 className="text-20 font-lato font-[700] leading-28 text-color6">{beneficio.title}</h3>
                                                    <p className="text-20 font-lato font-[400] leading-28 text-color7">{beneficio.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-20 justify-center items-center">
                            <div className="flex flex-col w-[600px] items-start">
                                <h2 className="text-48 font-[700] font-roboto leading-52 mb-8 text-center">
                                    Psicoterapia de <span className="text-color2 leading-52">Pareja</span>.
                                </h2>
                                <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8">
                                    Lorem ipsum dolor sit amet consectetur. Pretium tellus leo elit et et amet. Tristique volutpat vel aenean lectus a dapibus euismod turpis amet. Tellus commodo sit quis feugiat dui et pellentesque quis. Gravida velit nunc mi aliquam. Nullam leo sit faucibus tincidunt velit. Tellus in porta ornare faucibus tempus vel amet sed faucibus.
                                </p>
                                {
                                    beneficios2.map((beneficio, index) => {
                                        return(
                                            <div className="flex mb-4">
                                                <img src={beneficio.photo} alt="" />
                                                <div className="flex flex-col ml-5">
                                                    <h3 className="text-20 font-lato font-[700] leading-28 text-color6">{beneficio.title}</h3>
                                                    <p className="text-20 font-lato font-[400] leading-28 text-color7">{beneficio.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <img src={pip3} alt="" />
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

export default SpipDesktop;