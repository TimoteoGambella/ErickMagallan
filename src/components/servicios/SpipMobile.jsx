import banner from "../../assets/banner-servicios-2.svg";
import pip1 from "../../assets/pip-1.svg";
import emt2 from "../../assets/emt-2.svg";
import { IoHeartCircleOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import FooterMobile from ".././FooterMobile";

function SpipMobile ({tms}) {

    return(
        <>
            <div className='flex flex-col items-center justify-center'>
                <div className='w-full flex flex-col items-center justify-center h-[540px] gap-8 text-center mb-16' style={{
                    backgroundImage: `url(${banner})`,
                    backgroundPosition: "right",
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover"
                }}>
                    <h1 className='font-[700] text-48 text-color5 leading-52 font-lato max-w-[328px]'>
                        Psicoterapia Individual y de Pareja
                    </h1>
                </div>
                <div className='flex flex-col items-center justify-center px-4'>
                    <div className="pb-12 border-b border-gray-300 flex flex-col items-center justify-center mb-12">
                        <h2 className="text-36 font-[700] font-roboto  leading-52 max-w-[320px] mb-5">
                            ¿Por qué elegir la <span className="text-color2 leading-52">psicoterapia</span>?
                        </h2>
                        <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8 max-w-[320px]">
                            En nuestro espacio, la confianza y la comodidad son fundamentales. Aquí, te recibimos con los brazos abiertos, comprometidos no solo a ofrecer servicios de bienestar de calidad, sino a construir un refugio donde encuentres seguridad, comprensión y apoyo.
                        </p>
                        <img src={pip1} alt="HOUSE" className='w-[328px] border-b-stone-600'/>
                    </div>

                    <div className="pb-12 border-b border-gray-300 flex flex-col items-center justify-center mb-12">
                        <h2 className="text-36 font-[700] font-roboto  leading-52 max-w-[320px] mb-12 text-center">
                            ¿Cuáles son los <span className="text-color2 leading-52">beneficios</span>?
                        </h2>
                        <div className="flex items-center justify-center mb-4 gap-2">
                            <div className="w-[24px]">
                                <IoHeartCircleOutline style={{height:"24px", width:"24px"}} color="#B18431"/>
                            </div>
                            <p className="text-16 font-lato font-[400] leading-20 text-color7 max-w-[320px]">
                                Tratamiento de trastornos mentales como la depresión, el TOC y la esquizofrenia.
                            </p>
                        </div>
                        <div className="flex items-center justify-center mb-4 gap-2">
                            <div className="w-[24px]">
                                <IoHeartCircleOutline style={{height:"24px", width:"24px"}} color="#B18431"/>
                            </div>
                            <p className="text-16 font-lato font-[400] leading-20 text-color7 max-w-[320px]">
                                Mejora de funciones cognitivas como la memoria y la atención.
                            </p>
                        </div>
                        <div className="flex items-center justify-center mb-4 gap-2">
                            <div className="w-[24px]">
                                <IoHeartCircleOutline style={{height:"24px", width:"24px"}} color="#B18431"/>
                            </div>
                            <p className="text-16 font-lato font-[400] leading-20 text-color7 max-w-[320px]">
                                Es una terapia no invasiva, por lo que no requiere romper la piel ni provocar dolor de ningún tipo.
                            </p>
                        </div>
                        <div className="flex items-center justify-center mb-4 gap-2">
                            <div className="w-[24px]">
                                <IoHeartCircleOutline style={{height:"24px", width:"24px"}} color="#B18431"/>
                            </div>
                            <p className="text-16 font-lato font-[400] leading-20 text-color7 max-w-[320px]">
                                Sin medicamentos ni efectos secundarios graves en los pacientes.
                            </p>
                        </div>

                        <img src={emt2} alt="HOUSE" className='w-[328px] border-b-stone-600'/>
                    </div>

                    <div className="pb-12 border-b border-gray-300 flex flex-col items-center justify-center">
                        <h2 className="text-[54px] font-[700] font-roboto  leading-[60px] max-w-[320px] mb-12 text-center">
                            Aplicación <span className="text-color2 leading-52">Clínica</span> del TMS.
                        </h2>

                        <div className="flex flex-col items-center justify-center gap-8">
                            {tms.map((tms, index) => (
                                <div className="border border-color2 flex flex-col w-full max-w-[328px] px-4 py-8" style={{borderRadius:"20px"}}>
                                    <img src={tms.icon} alt="Logo" className="w-[32px] mb-4"/>
                                    <h3 className="text-20 font-[700] font-lato  leading-20 mb-4">
                                        {tms.title}
                                    </h3>
                                    <div className="flex items-top justify-start gap-2 mb-2">
                                        <div className="w-[6px] pt-2">
                                            <FaCircle className="w-2 h-2"/>
                                        </div>
                                        <p className="text-16 font-lato font-[400] leading-20 text-color7 flex items-center justify-center gap-2">
                                            {tms.p1}
                                        </p>
                                    </div>
                                    <div className="flex items-top justify-center gap-2">
                                        <div className="w-[6px] pt-2">
                                            <FaCircle className="w-2 h-2"/>
                                        </div>
                                        <p className="text-16 font-lato font-[400] leading-20 text-color7 flex items-center justify-center gap-2">
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

                <FooterMobile />
            </div>
        </>
    )
}

export default SpipMobile;