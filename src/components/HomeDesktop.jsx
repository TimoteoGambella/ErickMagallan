import house from '../assets/home-1.svg';
import service1 from '../assets/home-2.svg';
import services from '../assets/home-3.svg';
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronDown } from 'react-icons/fa';

import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import banner from "../assets/banner.svg";
import FooterDesktop from './FooterDesktop';

    function HomeDesktop ({ features, experts, testimonials, settings}) {
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
                    style={{ ...style, display: "block" }} // Asegúrate de que el estilo no sobrescriba lo que necesitas
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
                    style={{ ...style, display: "block" }} // Asegúrate de que el estilo no sobrescriba lo que necesitas
                    onClick={onClick}
                >
                    <FaArrowRight size={24} style={{ transform: "rotate(180deg)" }} />
                </div>
            );
        }

        return (
            <div className='flex flex-col items-center justify-center'>
                
                <div className='w-full flex flex-col items-center justify-center h-[736px] gap-8 text-center mb-20' style={{
                    backgroundImage: `url(${banner})`,
                    backgroundPosition: "center",
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover"
                }}>
                    <h1 className='font-[700] text-[64px] text-color5 leading-[70px] font-lato max-w-[780px]'>
                        Tu espacio de salud mental y bienestar emocional.
                    </h1>
                    <h2 className='font-[400] text-[22px] text-color5 leading-32 font-lato'>
                        En Psicomed estamos para acompañarte en tu camino hacia una vida plena.
                    </h2>
                </div>

                <div className='flex flex-col items-center justify-center px-4'>
                    <div className="border-b border-gray-300 flex items-center justify-center flex-wrap">
                        <div className='flex flex-col gap-5'>
                            <h2 className="text-48 font-[700] font-roboto leading-52 max-w-[550px] mb-5 gap-20">
                                En <span className="text-color2 leading-52">Psicomed</span>, queremos que te sientas <span className="text-color2">en casa</span>.
                            </h2>
                            <p className="text-20 font-lato font-normal leading-32 text-color7 mb-8 max-w-[550px]">
                                En nuestro espacio, la confianza y la comodidad son fundamentales. Aquí, te recibimos con los brazos abiertos, comprometidos no solo a ofrecer servicios de bienestar de calidad, sino a construir un refugio donde encuentres seguridad, comprensión y apoyo.
                            </p>
                        </div>
                        <img src={house} alt="HOUSE" className='w-full max-w-[500px] border-b-stone-600'/>
                    </div>

                    <div className="pt-20 border-b border-gray-300 flex items-center justify-center pb-12 gap-20 flex-wrap">
                        <img src={service1} alt="HOUSE" className='w-full max-w-[600px]  border-b-stone-600 mb-5'/>
                        <div className='flex flex-col gap-5'>
                            <h2 className="text-48 font-[700] font-roboto leading-52 max-w-[550px] mb-5">
                                Estimulación Magnética <span className="text-color2 leading-52">Transcraneal</span>.
                            </h2>
                            <p className="text-20 font-lato font-normal leading-32 text-color7 mb-8 max-w-[550px]">
                                En nuestro espacio, la confianza y la comodidad son fundamentales. Aquí, te recibimos con los brazos abiertos, comprometidos no solo a ofrecer servicios de bienestar de calidad, sino a construir un refugio donde encuentres seguridad, comprensión y apoyo.
                            </p>
                            <p className='flex items-center justify-start gap-2 text-color2 font-[700] leading-20 font-lato pb-12'
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
                        <div className='flex items-center justify-center gap-16 flex-wrap'>
                            <ul className="space-y-4">
                                {['Psicoterapia individual y de parejas', 'Estimulación Magnética Transcraneal', 'Asesoría Nutricional y Educación en Diabetes', 'Medicina Genómica', 'Terapias Holísticas'].map((service, index) => (
                                <li key={index} className="bg-white rounded-lg shadow-md p-4 py-6 flex justify-between items-center w-[574px]">
                                    <span className="font-[700] font-lato text-24 leading-20 text-color7">{service}</span>
                                    <FaChevronDown />
                                </li>
                                ))}
                            </ul>
                            <img src={services} alt="SERVICES" className='pb-12 border-b border-gray-300 w-full max-w-[630px] m-auto'/>
                        </div>
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
                                <p className='text-color2'>
                                    {feature.icon}
                                </p>
                                <h3 className="font-[700] font-lato text-20 leading-20 text-color6 mb-2 pt-4">{feature.title}</h3>
                                <p className="font-lato font-normal text-16 leading-20 text-color7 mb-4 max-w-[240px]">
                                    {feature.description}
                                </p>
                                <p className='flex items-center justify-center gap-2 text-color2 font-[700] leading-20 font-lato'
                                    onClick={()=>{
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
                                    <img src={expert.img} alt={expert.name} className=' h-auto rounded-lg mb-4 w-full max-w-[418px]' />
                                    <h3 className="font-[700] font-lato text-24 leading-20 text-color6 text-center mt-4">{expert.name}</h3>
                                    <p className="font-lato font-normal text-[18px] leading-20 text-[#697077] text-center mt-1">{expert.title}</p>
                                </div>
                            ))}
                        </div>
                        <p className='flex items-center justify-center gap-2 text-color2 font-[700] leading-20 font-lato'
                            onClick={()=>navigate('/nosotros')}
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
                                    <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
                                    <h3 className="font-[700] font-lato text-[26px] leading-tight text-color6 mb-4">{testimonial.name}</h3>
                                    <p className='font-[400] font-lato text-20 leading-relaxed text-color6 max-w-[800px]'>{testimonial.feedback}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <FooterDesktop />
            </div>
        )
    }

    export default HomeDesktop;