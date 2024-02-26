import banner from "../../assets/banner-servicios-3.svg";
import an1 from "../../assets/an-1.svg";
import an2 from "../../assets/an-2.svg";
import pip3 from "../../assets/pip-3.svg";
import { GoDash, GoPlus } from "react-icons/go";
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
import { FaArrowRight, FaCircle, FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoHeartCircleOutline } from "react-icons/io5";
import { publis_tms } from "../../publis";
import { CgFileDocument } from "react-icons/cg";
import { PiUserCircleFill } from "react-icons/pi";
import { LuLanguages } from "react-icons/lu";
import { useState } from "react";

function SanDesktop({ tms, nav }) {
    const [visiblePublications, setVisiblePublications] = useState(6);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    const handleLoadMore = () => {
        setVisiblePublications(prevCount => prevCount + 6);
    };

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

    const preguntas = [
        {
            title: "¿Cuáles son las contraindicaciones?",
            description: [
                "Existen 3 contraindicaciones definitivas al uso de estimulación transcraneal:",
                ['Antecedentes de epilepsia (de cualquier tipo, incluyendo crisis de ausencia', 'Dispositivos de metal en el cráneo como placas o clips en el cerebro', 'Existencia de implantes cocleares o marcapasos']
            ]
        },
        {
            title: "¿Cómo puedo agendar una cita?",
            description: [
                "Primero comunícate con nosotros a través de nuestros números telefónicos, o bien, mándanos un mensaje vía whatsapp solicitando una cita. Después indícanos el servicio que necesitas y nuestro equipo te agendará en el día y horario más cercano.",
                "No olvides asistir a tu cita en tiempo y forma, de lo contrario, procura cancelar con al menos 24 horas de anticipación."
            ]
        },
        {
            title: "¿Tiene efectos secundarios?",
            description: [
                "En pacientes sin contraindicaciones, los efectos secundarios de la terapia magnética transcraneal son mínimos y regularmente disminuyen con el paso de las sesiones. Estos incluyen:",
                ['Cefalea transitoria', 'Mareo', 'Somnolencia'],
                "(Se presentan en menos del 2% de pacientes)"
            ]
        },
        {
            title: "¿Qué pasa si no puedo asistir a mi cita?",
            description: [(
                <p>
                    En caso de tener alguna complicación que te impida asistir, te pedimos que canceles con al menos 24 horas de anticipación. De lo contrario, se te pedirá que <span className="font-bold">cubras el 50% del costo</span> de tu cita.
                </p>
            ),
                "Cancelar tu cita con anticipación nos permite utilizar ese horario para alguna persona que también lo necesite."
            ]
        },
        {
            title: "¿A partir de cuánto tiempo empiezan a observarse las mejoras?",
            description: [
                "Las mejoras obtenidas con el uso de la estimulación magnética transcraneal pueden presentarse a partir de las sesión 5. No obstante para que las mejoras sean totalmente visibles y se mantenga el efecto terapéutico se requiere en promedio entre 15 y 20 sesiones."
            ]
        },
        {
            title: "¿Lo que hable en mi terapia es confidencial?",
            description: [
                "Así es, nuestros expertos siempre respetarán la confidencialidad paciente - terapeuta, por lo que nada de lo que hables en la terapia será divulgado fuera de ella sin tu consentimiento."
            ]
        },
        {
            title: "¿Cuál es el seguimiento que un paciente requiere?",
            description: [
                "Dependiendo de la respuesta clínica de cada paciente se considera que una buena estrategía de seguimiento a mediano o largo plazo es continuar aplicando sesiones de estimulación transcraneal periódicas de mantenimiento con la frecuencia que la revaluación de paciente requiera para mantener o modificar los efectos terapéuticos obtenidos."
            ]
        },
        {
            title: "¿Qué debo llevar para mi primer cita?",
            description: [
                "Solo necesitas venir con disposición de recibir el tratamiento indicado. Nuestras instalaciones te harán sentir como en casa, así que ven con confianza y seguridad."
            ]
        },
        {
            title: "¿La terapia es dolorosa?",
            description: [(
                <p>
                    No, al ser una terapia <span className="font-bold">no invasiva</span>, no requiere romper la piel ni provocar dolor de ningún tipo al paciente.
                </p>
            )]
        },
        {
            title: "¿Aceptan todas las formas de pago?",
            description: [
                "Aceptamos las siguientes formas de pago:",
                ['Efectivo.', 'Transferencia bancaria.', 'Tarjeta de débito o crédito.'],
                "Si requieres factura, por favor comentalo a la hora de realizar el pago."
            ]
        },

    ];

    return (
        <>
            <div className="w-full">
                <div className='w-full flex flex-col items-center justify-center h-[540px] gap-8 text-center mb-16' style={{
                    backgroundImage: `url(${banner})`,
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                    <h1 className='font-[700] text-[64px] text-color5 leading-52 font-lato'>
                        Asesoría nutricional y Educación en Diabetes
                    </h1>
                </div>
                <div className='flex flex-col items-center justify-center mx-20'>
                    <div className='flex flex-col items-center justify-between px-4'>
                        <div className="pb-12 flex items-center justify-center mb-12 w-full gap-20 flex-wrap">
                            <div className="flex flex-col max-w-[700px]">
                                <h2 className="text-48 font-[700] font-roboto leading-52 mb-5">
                                    ¿Qué es la <span className="text-color2 leading-52">Educación en Diabetes</span>?
                                </h2>
                                <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8 max-w-[600px]">
                                    La Educación en Diabetes es un elemento crucial para el manejo efectivo de esta enfermedad. Proporciona los conocimientos y habilidades para comprender, prevenir y controlar diabetes de manera efectiva en la vida diaria.<br /><br />
                                    El objetivo es que los pacientes tomen el control de su salud, y mejoren su calidad de vida.
                                </p>
                            </div>
                            <img src={an1} alt="HOUSE" className='w-[500px] border-b-stone-600' />
                        </div>

                        <div className="pb-36 border-b border-gray-300 flex items-center justify-between mb-12 w-full gap-20 flex-wrap">
                            <img src={an2} alt="HOUSE" className='w-[520px] border-b-stone-600' />
                            <div className="flex flex-col max-w-[600px]">
                                <h2 className="text-48 font-[700] font-roboto  leading-52 mb-12 text-center">
                                    ¿Cuáles son los <span className="text-color2 leading-52">beneficios</span>?
                                </h2>
                                <div className="flex items-center justify-center mb-4 gap-2">
                                    <div className="w-[40px]">
                                        <IoHeartCircleOutline style={{ height: "40px", width: "40px" }} color="#B18431" />
                                    </div>
                                    <p className="text-[22px] font-lato font-[700] leading-28 text-color7 max-w-[544px]">
                                        Tratamiento de trastornos mentales como la depresión, el TOC y la esquizofrenia.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mb-4 gap-2">
                                    <div className="w-[40px]">
                                        <IoHeartCircleOutline style={{ height: "40px", width: "40px" }} color="#B18431" />
                                    </div>
                                    <p className="text-[22px] font-lato font-[700] leading-28 text-color7 max-w-[544px]">
                                        Mejora de funciones cognitivas como la memoria y la atención.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mb-4 gap-2">
                                    <div className="w-[40px]">
                                        <IoHeartCircleOutline style={{ height: "40px", width: "40px" }} color="#B18431" />
                                    </div>
                                    <p className="text-[22px] font-lato font-[700] leading-28 text-color7 max-w-[544px]">
                                        Es una terapia no invasiva, por lo que no requiere romper la piel ni provocar dolor de ningún tipo.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mb-4 gap-2">
                                    <div className="w-[40px]">
                                        <IoHeartCircleOutline style={{ height: "40px", width: "40px" }} color="#B18431" />
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
                                    <div className="border border-color2 flex flex-col w-full h-[294px] max-w-[616px] p-8 items-start" style={{ borderRadius: "20px" }}>
                                        <img src={tms.icon} alt="Logo" className="w-[40px] mb-5 mt-4" />
                                        <h3 className="text-28 font-[700] font-lato leading-32 mb-4">
                                            {tms.title}
                                        </h3>
                                        <div className="flex items-top justify-start gap-4 mb-3">
                                            <div className="w-[6px] pt-2">
                                                <FaCircle className="w-2 h-2" />
                                            </div>
                                            <p className="text-20 font-lato font-[500] leading-24 text-color7 flex items-center justify-center gap-3">
                                                {tms.p1}
                                            </p>
                                        </div>
                                        <div className="flex items-top justify-center gap-4">
                                            <div className="w-[6px] pt-2">
                                                <FaCircle className="w-2 h-2" />
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
                                {publis_tms.slice(0, visiblePublications).map((publi, index) => (
                                    <div className="flex flex-col items-start justify-start pb-2 w-[394px]" key={index}>
                                        <img src={publi.photo} alt={publi.title} className="w-[394px] h-[300px]" />
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
                            {visiblePublications < publis_tms.length && (
                                <p className='flex cursor-pointer items-center justify-center gap-4 text-20 text-color2 font-[700] leading-20 font-lato my-20 border rounded-lg border-color2 px-8 py-5' onClick={handleLoadMore}>
                                    Cargar más
                                    <FaRegArrowAltCircleDown size={22.75} />
                                </p>
                            )}
                        </div>
                    </div>

                    <div className='px-4 py-8 pt-20 mb-12 flex flex-col items-center justify-center pb-12 border-b border-gray-300'>
                        <h2 className="text-44 font-[700] font-roboto leading-44 mb-12 text-center">
                            Preguntas <span className="text-color2 leading-52">Frecuentes</span>.
                        </h2>
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 w-full max-w-[1280px]">
                            {preguntas.map((pregunta, index) => (
                                <div key={index} className="py-6 px-4 border border-color8 rounded-md h-fit">
                                    <button onClick={() => handleToggle(index)} className="flex justify-between items-center w-full text-left">
                                        <span className="text-20 font-roboto font-[700] leading-20 text-color7">
                                            {pregunta.title}
                                        </span>
                                        {expandedIndex === index ? <GoDash size={20} /> : <GoPlus size={20} />}
                                    </button>
                                    {expandedIndex === index && (
                                        <div className="mt-4">
                                            {pregunta.description.map((item, idx) => (
                                                <div key={idx} className="mb-2">
                                                    {Array.isArray(item) ? (
                                                        <ul className="list-disc pl-4">
                                                            {item.map((subItem, subIdx) => (
                                                                <li key={subIdx}>{subItem}</li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p className="text-color7">{item}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
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

                            <p className='flex items-center justify-center cursor-pointer gap-2 text-20 text-color2 font-[700] leading-20 font-lato mt-12 mb-24'
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