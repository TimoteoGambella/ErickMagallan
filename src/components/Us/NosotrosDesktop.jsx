import banner from "../../assets/nosotros/11.jpg";

import unam from "../../assets/unam.svg";
import u_colima from "../../assets/u-de-colima.svg";
import imp from "../../assets/imp.svg";
import uni from "../../assets/univa.svg";

import t1 from "../../assets/professionals/Dr-José-Luis.jpg";
import t2 from "../../assets/professionals/MC-Rocío-González.jpg";

import ins1 from "../../assets/nosotros/11.jpg"
import ins2 from "../../assets/nosotros/6.jpg"
import ins3 from "../../assets/nosotros/12.jpeg"

import FooterDesktop from "../Footer/FooterDesktop";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function NosotrosDesktop ({features}) {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-center'>
            
            <div className="w-full flex flex-col items-center justify-center h-[480px] gap-8 text-center mb-20 relative"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}>
                <h1 className='font-[700] text-[64px] text-color5 leading-[70px] font-lato'>
                    En Psicomed todos somos familia.
                </h1>
                <h2 className='font-[400] text-[22px] text-color5 leading-32 font-lato max-w-[765px]'>
                    Conoce nuestro equipo de terapeutas y nuestras instalaciones, queremos que te sientas en casa.
                </h2>
            </div>

            <div className='mt-12 pb-12 border-b border-gray-300 flex items-top justify-center flex-wrap'>
                    <div className='flex flex-col mr-20'>
                        <h2 className="text-48 font-[700] font-lato leading-52 mb-8 max-w-[400px]">¿Por qué elegir a <span className="text-color2 leading-40">Psicomed</span>?</h2>
                        <p className="text-[18px] font-lato leading-24 text-color7 mb-12 max-w-[384px]">
                            Elegir el apoyo adecuado es esencial en el camino hacia el bienestar. En Psicomed, estamos comprometidos a ser ese aliado confiable y experto que buscas.
                        </p>
                    </div>
                    {features.map((feature, index) => (
                        <li key={index} className="bg-white rounded-lg flex flex-col items-start gap-2 max-w-[272px] mr-4">
                            <p className='text-color2 cursor-pointer'>
                                {feature.icon}
                            </p>
                            <h3 className="font-[700] font-lato text-20 leading-20 text-color6 mb-2 pt-4">{feature.title}</h3>
                            <p className="font-lato text-16 leading-20 text-color7 mb-4 max-w-[240px] cursor-pointer">
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
                <div className="flex flex-col justify-center items-center pb-16 mt-32 border-b border-gray">
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
                            <img src={t1} alt="" className="w-[600px] h-[600px] mb-8  object-cover object-top rounded-xl" />
                        </div>
                    </div>
                <div className="flex flex-col justify-center items-center pb-16 mt-32 border-b border-gray">
                        <h2 className="text-48 font-[700] font-lato  leading-40 max-w-[400px] mb-12 text-center">
                            Conoce al <span className="text-color2 leading-52">equipo</span>.
                        </h2>
                        <div className="flex justify-center items-center flex-wrap gap-20">
                            <img src={t2} alt="" className="w-[600px] h-[600px] mb-8  object-cover object-top rounded-xl" />
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
                    

            <div className='flex flex-col items-center justify-center px-4 py-16'>
                <h2 className="text-48 font-[700] font-lato  leading-36 mb-12">
                    Conoce nuestras <span className="text-color2">instalaciones</span>.
                </h2>
                <img src={ins1} alt="" className="w-[1280px] h-[580px] rounded-xl object-cover"/>
                <div className="pb-6 flex flex-wrap items-center justify-center mt-16 gap-12">
                    <img src={ins2} alt="" className="w-[616px] h-[580px] rounded-xl object-cover object-bottom"/>
                    <img src={ins3} alt="" className="w-[616px] h-[580px] rounded-xl object-cover"/>
                </div>
            </div>


            <FooterDesktop />
        </div>
    )
}

export default NosotrosDesktop