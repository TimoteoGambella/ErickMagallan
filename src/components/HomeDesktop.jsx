import house from '../assets/home-1.svg';
import service1 from '../assets/home-2.svg';
import services from '../assets/home-3.svg';
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronDown } from 'react-icons/fa';

import circleWhap from "../assets/circle-whap.svg";
import circleCheck from "../assets/circle-check.svg";
import circlePerson from "../assets/circle-person.svg";
import circleCalendar from "../assets/circle-calendar.svg";

import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import banner from "../assets/banner.svg";
import FooterDesktop from './FooterDesktop';
import { useState } from 'react';
import { GoDash, GoPlus } from 'react-icons/go';

function HomeDesktop({ features, experts, testimonials, settings }) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };
    const navigate = useNavigate();
    const settings2 = {
        ...settings,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow next-arrow`}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <FaArrowRight size={24} />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow prev-arrow`}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <FaArrowRight size={24} style={{ transform: "rotate(180deg)" }} />
            </div>
        );
    }

    const preguntas = [
        {
            title: "Psicoterapia individual y de parejas",
            description: [
                "La psicoterapia nos brinda la oportunidad de conocernos a nosotros mismos, entendiendo por qué tenemos conflictos que nos llevan a sentirnos deprimidos o ansiosos, cómo enfrentarlos y resolverlos mediante estrategias para su gestión y superarlos mejorando nuestras relaciones personales y de pareja.",
                (
                    <p className='flex items-end justify-start cursor-pointer gap-2 text-color2 font-[700] leading-20 font-lato w-32 h-5 mt-6'
                        onClick={() => navigate('/nosotros')}
                    >
                        Conoce más
                        <FaArrowRight />
                    </p>
                )
            ]
        },
        {
            title: "Estimulación Magnética Transcraneal",
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
    ];

    return (
        <div className='flex flex-col items-center justify-center'>

            <div className='w-full flex flex-col items-center justify-center h-[736px] gap-8 text-center mb-20' style={{
                backgroundImage: `url(${banner})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <h1 className='font-[700] text-[64px] text-color5 leading-[70px] font-lato max-w-[780px]'>
                    Tu espacio de salud mental y bienestar emocional.
                </h1>
                <h2 className='font-[400] text-[22px] text-color5 leading-32 font-lato'>
                    En Psicomed estamos para acompañarte en tu camino hacia una vida plena.
                </h2>
            </div>

            <div className='flex flex-col items-center justify-center px-4'>
                <div className="border-b border-gray-300 flex items-center justify-center flex-wrap w-full">
                    <div className='flex flex-col gap-5'>
                        <h2 className="text-48 font-[700] font-roboto leading-52 max-w-[550px] mb-5 gap-20">
                            En <span className="text-color2 leading-52">Psicomed</span>, queremos que te sientas <span className="text-color2">en casa</span>.
                        </h2>
                        <p className="text-20 font-lato font-normal leading-32 text-color7 mb-8 max-w-[550px]">
                            En nuestro espacio, la confianza y la comodidad son fundamentales. Aquí, te recibimos con los brazos abiertos, comprometidos no solo a ofrecer servicios de bienestar de calidad, sino a construir un refugio donde encuentres seguridad, comprensión y apoyo.
                        </p>
                    </div>
                    <img src={house} alt="HOUSE" className='w-full max-w-[500px] border-b-stone-600' />
                </div>

                <div className="pt-20 border-b border-gray-300 flex items-center justify-center pb-12 gap-20 flex-wrap">
                    <img src={service1} alt="HOUSE" className='w-full max-w-[600px]  border-b-stone-600 mb-5' />
                    <div className='flex flex-col gap-5'>
                        <h2 className="text-48 font-[700] font-roboto leading-52 max-w-[550px] mb-5">
                            Estimulación Magnética <span className="text-color2 leading-52">Transcraneal</span>.
                        </h2>
                        <p className="text-20 font-lato font-normal leading-32 text-color7 mb-8 max-w-[550px]">
                            En nuestro espacio, la confianza y la comodidad son fundamentales. Aquí, te recibimos con los brazos abiertos, comprometidos no solo a ofrecer servicios de bienestar de calidad, sino a construir un refugio donde encuentres seguridad, comprensión y apoyo.
                        </p>
                        <p className='flex items-center justify-start cursor-pointer gap-2 text-color2 font-[700] leading-20 font-lato pb-12'
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                })
                                navigate('/servicios/emt')
                            }}
                        >
                            Lee más sobre esto
                            <FaArrowRight />
                        </p>
                    </div>
                </div>

                <div className='mt-20'>
                    <h2 className="text-48 font-[700] font-roboto leading-52 mb-20 text-center">Nuestros <span className="text-color2 leading-40">servicios</span>.</h2>
                    <div className='flex items-center gap-16 w-[1280px] h-[645px]'>
                        <div className='max-w-[630px]'>
                            <ul className="space-y-4">
                                {preguntas.map((pregunta, index) => (
                                    <div key={index} className="block py-6 px-4 border border-color8 rounded-md h-full max-w-[600px]">
                                        <button onClick={() => handleToggle(index)} className="flex justify-between items-center w-full text-left">
                                            <span className="text-20 font-roboto font-[700] leading-20 text-color7">
                                                {pregunta.title}
                                            </span>
                                            {expandedIndex === index ? <GoDash size={20} /> : <GoPlus size={20} />}
                                        </button>
                                        {expandedIndex === index && (
                                            <div className="mt-4">
                                                {pregunta.description.map((item, idx) => (
                                                    <div key={idx} className="">
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
                            </ul>
                        </div>
                        <div className='w-[630px]'>
                            <img src={services} alt="SERVICES" className=' w-full max-w-[630px] m-auto' />
                        </div>
                    </div>
                    <div className='my-12 pt-12 border-b border-gray-300 flex items-top justify-center flex-wrap'></div>
                </div>

                <div className='mt-12 pb-12 border-b border-gray-300 flex items-top justify-center flex-wrap'>
                    <div className='flex flex-col mr-20'>
                        <h2 className="text-48 font-[700] font-roboto leading-52 mb-8 max-w-[400px]">¿Por qué elegir a <span className="text-color2 leading-40">Psicomed</span>?</h2>
                        <p className="text-[18px] font-lato font-normal leading-24 text-color7 mb-12 max-w-[384px]">
                            Elegir el apoyo adecuado es esencial en el camino hacia el bienestar. En Psicomed, estamos comprometidos a ser ese aliado confiable y experto que buscas.
                        </p>
                    </div>
                    {features.map((feature, index) => (
                        <li key={index} className="bg-white rounded-lg flex flex-col items-start gap-2 max-w-[272px] mr-4">
                            <p className='text-color2 cursor-pointer'>
                                {feature.icon}
                            </p>
                            <h3 className="font-[700] font-lato text-20 leading-20 text-color6 mb-2 pt-4">{feature.title}</h3>
                            <p className="font-lato font-normal text-16 leading-20 text-color7 mb-4 max-w-[240px] cursor-pointer">
                                {feature.description}
                            </p>
                            <p className='flex items-center justify-center gap-2 text-color2 font-[700] leading-20 font-lato cursor-pointer'
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    })
                                    navigate(feature.link)
                                }}
                            >
                                {feature.linkText}
                                <FaArrowRight />
                            </p>
                        </li>
                    ))}
                </div>

                <div className='mt-12 mb-16'>
                    <h2 className="text-48 font-[700] font-roboto text-color6 mb-12 text-center">Nuestros <span className="text-color2 leading-40">expertos</span>.</h2>
                    <div className='flex items-top justify-center gap-24'>
                        {experts.map((expert, index) => (
                            <div key={index} className={`bg-white rounded-lg ${index === 0 && "mb-12"}`}>
                                <img src={expert.img} alt={expert.name} className=' h-[398px] rounded-lg mb-4 w-full max-w-[418px]' />
                                <h3 className="font-[700] font-lato text-24 leading-20 text-color6 text-center mt-4">{expert.name}</h3>
                                <p className="font-lato font-normal text-[18px] leading-20 text-[#697077] text-center mt-1">{expert.title}</p>
                            </div>
                        ))}
                    </div>
                    <p className='flex items-center justify-center cursor-pointer gap-2 text-color2 font-[700] leading-20 font-lato'
                        onClick={() => navigate('/nosotros')}
                    >
                        Conoce al equipo
                        <FaArrowRight />
                    </p>
                </div>

            </div>
            <div className='py-16 bg-[#FFF9ED] w-full flex flex-col items-center justify-center'>
                <h2 className="text-48 font-[700] font-roboto text-color6 mb-12 text-center">Lo que dicen nuestros <span className="text-color2">pacientes.</span></h2>
                <div className='w-full h-auto overflow-hidden text-center'>
                    <Slider {...settings2}>
                        {testimonials.map((testimonial, index) => (
                            <div className="p-6 rounded-lg bg-[#FFF9ED] text-center mx-auto max-w-[800px]">
                                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <h3 className="font-[700] font-lato text-[26px] leading-tight text-color6 mb-4">{testimonial.name}</h3>
                                <p className='font-[400] font-lato text-20 leading-relaxed text-color6 max-w-[800px]'>{testimonial.feedback}</p>
                            </div>
                        ))}
                    </Slider>
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

                    <p className='flex items-center justify-center cursor-pointer gap-2 text-20 text-color2 font-[700] leading-20 font-lato mt-12'
                        onClick={() => window.open("https://w.app/psicomed", "_blank")}
                    >
                        Agenda una cita
                        <FaArrowRight />
                    </p>
                </div>
            </div>
            <FooterDesktop />
        </div>
    )
}

export default HomeDesktop;