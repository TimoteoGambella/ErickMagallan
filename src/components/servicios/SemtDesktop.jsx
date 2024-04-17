import banner from "../../assets/emt/Actipulse-Neuroscience.webp";
import emt1 from "../../assets/emt/03.png";
import emt2 from "../../assets/emt/02.png";
import { IoHeartCircleOutline } from "react-icons/io5";
import { FaCircle, FaRegArrowAltCircleDown } from "react-icons/fa";
import { GoDash, GoPlus } from "react-icons/go";
import FooterDesktop from "../Footer/FooterDesktop";
import { publis_tms } from "../../publis";
import { CgFileDocument } from "react-icons/cg";
import { PiUserCircleFill } from "react-icons/pi";
import { LuLanguages } from "react-icons/lu";
import { useState } from "react";
import unam from "../../assets/unam.svg";
import u_colima from "../../assets/u-de-colima.svg";
import imp from "../../assets/imp.svg";
import uni from "../../assets/univa.svg";

import t1 from "../../assets/professionals/Dr-José-Luis.jpg";
import t2 from "../../assets/professionals/MC-Rocío-González.jpg";
import { tms } from "../../utils";

function SemtDesktop() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [visiblePublications, setVisiblePublications] = useState(6);

    

    const handleLoadMore = () => {
        setVisiblePublications(prevCount => prevCount + 6);
    };

    const handleToggle = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

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
        <div>
            <div className="w-full flex flex-col items-center justify-center h-[540px] gap-8 text-center mb-20 relative"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                <h1 className='font-[700] text-[64px] text-color5 leading-52 font-lato'>
                    Estimulación Magnética Transcraneal
                </h1>
            </div>
            <div className="flex flex-col items-center">
                <div className='flex flex-col items-center justify-center w-full mx-20'>
                    <div className='flex flex-col items-center justify-center px-4 w-full'>
                        <div className="pb-12 border-b border-gray-300 flex flex-wrap items-center justify-evenly mb-12 gap-20 w-full">
                            <div className="flex flex-col max-w-[600px] flex-wrap">
                                <h2 className="text-48 font-[700] font-lato leading-52 mb-5">
                                    ¿Qué es la <span className="text-color2 leading-52">Estimulación Magnética Transcraneal</span>?
                                </h2>
                                <p className="flex flex-col gap-[24px] text-[22px] font-lato leading-20 text-color7 mb-8">
                                    <span>La Estimulación Magnética Transcraneal (EMT) es una técnica no invasiva que utiliza campos magnéticos para modular la actividad cerebral.</span>
                                    <span>Se aplica a través de una bobina colocada en el cuero cabelludo, generando corrientes eléctricas que afectan las neuronas, siendo utilizada en investigaciones y tratamientos neuropsiquiátricos.</span>
                                </p>
                            </div>
                            <img src={emt1} alt="HOUSE" className='h-[595px] border-b-stone-600' />
                        </div>

                        <div className="pb-36 border-b text-lato border-gray-300 flex flex-wrap items-center justify-evenly mb-12 gap-20 w-full">
                            <img src={emt2} alt="HOUSE" className='h-[595px] border-b-stone-600' />
                            <div className="flex flex-col text-lato max-w-[600px] flex-wrap">
                                <h2 className="text-48 font-[700] font-lato  leading-52 mb-12 text-center">
                                    ¿Cuáles son los <span className="text-color2 leading-52">beneficios</span>?
                                </h2>
                                <div className="flex items-center justify-center mb-4 gap-2">
                                    <div className="w-[40px]">
                                        <IoHeartCircleOutline style={{ height: "40px", width: "40px" }} color="#B18431" />
                                    </div>
                                    <p className="text-[22px] font-lato font-[500] leading-28 max-w-[544px]">
                                        <span className="font-bold">Tratamiento de trastornos mentales</span> como la depresión, el TOC y la esquizofrenia.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mb-4 gap-2">
                                    <div className="w-[40px]">
                                        <IoHeartCircleOutline style={{ height: "40px", width: "40px" }} color="#B18431" />
                                    </div>
                                    <p className="text-[22px] font-lato font-[500] leading-28 max-w-[544px]">
                                        <span className="font-bold">Mejora de funciones cognitivas</span> como la memoria y la atención.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mb-4 gap-2">
                                    <div className="w-[40px]">
                                        <IoHeartCircleOutline style={{ height: "40px", width: "40px" }} color="#B18431" />
                                    </div>
                                    <p className="text-[22px] font-lato font-[500] leading-28 max-w-[544px]">
                                        <span className="font-bold">Es una terapia no invasiva</span>, por lo que no requiere romper la piel ni provocar dolor de ningún tipo.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mb-4 gap-2">
                                    <div className="w-[40px]">
                                        <IoHeartCircleOutline style={{ height: "40px", width: "40px" }} color="#B18431" />
                                    </div>
                                    <p className="text-[22px] font-lato font-[500] leading-28 max-w-[544px]">
                                        <span className="font-bold">Sin medicamentos ni efectos secundarios graves</span> en los pacientes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pb-20 border-b border-gray-300 flex flex-col items-center justify-between max-w-[1280px]">
                            <h2 className="text-[54px] font-[700] font-lato leading-[60px] mb-12 mt-24 text-center">
                                Aplicación <span className="text-color2 leading-52">Clínica</span> del TMS.
                            </h2>

                            <div className="flex flex-wrap items-center justify-center gap-8">
                                {tms.map((tms, index) => (
                                    <div className="border border-color2 flex flex-col w-full h-[294px] max-w-[600px] p-8 items-start" style={{ borderRadius: "20px" }}>
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
                    </div>

                    <div className="pb-12 pt-20 border-b border-gray-300 flex flex-col items-center justify-center">
                        <h2 className="text-[54px] font-[700] font-lato  leading-[60px] mb-12 text-center">
                            Publicaciones <span className="text-color2 leading-40">científicas</span> sobre <span className="text-color2 leading-40">TMS</span>.
                        </h2>
                        <div className="flex flex-wrap items-center justify-center max-w-[1280px] gap-12 mt-6">
                            {publis_tms.slice(0, visiblePublications).map((publi, index) => (
                                <div className="flex flex-col items-start justify-start pb-2 w-[394px]" key={index}>
                                    <img src={publi.photo} alt={publi.title} className="w-[394px] h-[300px]" />
                                    <h3 className="font-[700] font-lato text-24 leading-24 text-color6 mb-4 mt-8">{publi.title}</h3>
                                    <p className='font-[400] font-lato text-16 leading-20 text-color6'>{publi.description}</p>
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
                    <div className="flex flex-col justify-center items-center pb-16 mt-28">
                        <h2 className="text-48 font-[700] font-lato  leading-40 max-w-[360px] mb-24 text-center">
                            Tus terapeutas.
                        </h2>
                        <div className="flex justify-center items-center flex-wrap gap-20">
                            <img src={t2} alt="" className="w-[600px] h-[600px] mb-8  object-cover object-top rounded-[32px]" />
                            <div className="w-full max-w-[600px] flex flex-col items-start justify-center">
                                <h3
                                    className="text-48 leading-52 text-color6 font-lato font-[700] mb-6"
                                    style={{ letterSpacing: "1px" }}
                                >
                                    M.C. Rocío González Saucedo
                                </h3>
                                <h4 className="text-20 leading-22 text-color6 font-lato font-[700] mb-8">
                                    Ingeniera Bioquímica, Diplomada en Nutrición Clínica y
                                    Educación en Diabetes, y Maestra en Ciencias Médicas y
                                    Nutrición Clínica.
                                </h4>
                                <p className="text-16 font-[400] text-color7 font-lato mb-12">
                                    Ingeniera Bioquímica con especialidad en Medio Ambiente y
                                    Sustentabilidad quién, al percatarse de la relación entre el
                                    entorno y la salud humana, decide cursar la maestría en
                                    Ciencias Médicas. Su fascinación por la influencia directa
                                    de la nutrición en la salud la llevó a profundizar en el
                                    estudio de la Nutrición Clínica, con un enfoque particular
                                    en personas que viven con Diabetes.
                                    <br />
                                    <br />
                                    Gracias a su formación como Terapeuta Holística, ha
                                    estudiado diversas técnicas de autoconocimiento y gestión
                                    emocional que complementan su enfoque clínico y permiten
                                    abordar a cada persona de manera integral, reconociendo la
                                    interconexión entre cuerpo, mente y espíritu.
                                </p>
                                <div className="flex flex-wrap gap-4 gap-y-8 justify-center items-center">
                                    <img src={unam} alt="" />
                                    <img src={u_colima} alt="" />
                                    <img src={imp} alt="" />
                                    <img src={uni} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center pb-16 border-b border-gray">
                        <div className="flex justify-center items-center flex-wrap gap-20">

                            <div className="w-full max-w-[600px] flex flex-col items-start justify-center">
                                <h3
                                    className="text-48 leading-52 text-color6 font-lato font-[700] mb-6"
                                    style={{ letterSpacing: "1px" }}
                                >
                                    Dr. José Luis Nogales Galván
                                </h3>
                                <h4 className="text-20 leading-22 text-color6 font-lato font-[700] mb-8">
                                    Médico Psiquiatra con Maestría y Doctorado en Psicoterapia Individual y de Pareja.
                                </h4>
                                <p className="text-16 font-[400] text-color7 font-lato mb-12">
                                    Médico con especialidad en Psiquiatría, egresado de la Universidad Nacional Autónoma de México, así como Maestría y Doctorado en Psicoterapia Inidividual y de Pareja, se ha convertido en un experto tanto en el abordaje individual como en el trabajo con parejas.
                                    <br />
                                    <br />
                                    Su enfoque se basa en una perspectiva sistémica centrada en las emociones, influenciada por la psicología de Jung. Su dedicación a comprender las complejidades emocionales y su formación especializada le permiten ofrecer un apoyo integral, adaptado a las necesidades únicas de cada individuo y relación.
                                </p>
                                <div className="flex flex-wrap gap-4 gap-y-8 justify-center items-center">
                                    <img src={unam} alt="" />
                                    <img src={u_colima} alt="" />
                                    <img src={imp} alt="" />
                                </div>
                            </div>
                            <img src={t1} alt="" className="w-[600px] h-[600px] mb-8  object-cover object-top rounded-[32px]" />
                        </div>
                    </div>

                    <div className='px-4 py-8 pt-20 mb-12 flex flex-col items-center justify-center pb-12 border-b border-gray-300'>
                        <h2 className="text-44 font-[700] font-lato leading-44 mb-12 text-center">
                            Preguntas <span className="text-color2 leading-52">Frecuentes</span>.
                        </h2>
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 w-full max-w-[1280px]">
                            {preguntas.map((pregunta, index) => (
                                <div key={index} className="py-6 px-4 border border-color8 rounded-2xl h-fit">
                                    <button onClick={() => handleToggle(index)} className="flex justify-between items-center w-full text-left">
                                        <span className="text-20 font-lato font-[700] leading-20 text-color7">
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

                </div>
            </div>
            <FooterDesktop />
        </div>
    )
}

export default SemtDesktop;