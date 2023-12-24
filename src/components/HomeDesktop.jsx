    import house from '../assets/home-1.svg';
    import service1 from '../assets/home-2.svg';
    import services from '../assets/home-3.svg';
    import { FaArrowRight } from "react-icons/fa6";
    import { FaChevronDown } from 'react-icons/fa';
    import { IoIosTimer } from "react-icons/io";
    import { RiCalendarEventLine } from "react-icons/ri";
    import cat from "../assets/cat.svg";
    import logo2 from "../assets/logo-white.svg";
    import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

    import Slider from 'react-slick';
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

    import { useNavigate } from 'react-router-dom';

    function HomeDesktop ({ features, experts, testimonials, contactInfo, settings}) {
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
                            <p className='flex items-center justify-start gap-2 text-color2 font-[700] leading-20 font-lato pb-12'>
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
                            <li key={index} className="bg-white rounded-lg flex flex-col items-start gap-2 max-w-[272px]">
                                <p className='text-color2'>
                                    {feature.icon}
                                </p>
                                <h3 className="font-[700] font-lato text-20 leading-20 text-color6 mb-2 pt-4">{feature.title}</h3>
                                <p className="font-lato font-normal text-16 leading-20 text-color7 mb-4">
                                    {feature.description}
                                </p>
                                <p className='flex items-center justify-center gap-2 text-color2 font-[700] leading-20 font-lato'>
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
                        <img src={logo2} alt="LOGO" className='w-[181px]'/>
                        <nav className="mb-4 w-[383px] flex items-center justify-center">
                            <ul className="flex space-x-4 w-[383px] items-center justify-center">
                                <li><p onClick={()=>navigate("/")} className="hover:underline">Inicio</p></li>
                                <li><p onClick={()=>navigate("/")} className="hover:underline">TMS</p></li>
                                <li><p onClick={()=>navigate("/servicios")} className="hover:underline">Servicios</p></li>
                                <li><p onClick={()=>navigate("/nosotros")} className="hover:underline">Nosotros</p></li>
                                <li><p onClick={()=>navigate("/nosotros")} className="hover:underline">Blog</p></li>
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
        )
    }

    export default HomeDesktop;