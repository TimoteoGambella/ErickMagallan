import { useNavigate } from "react-router-dom";
import cat from "../../assets/cat.svg";
import logo2 from "../../assets/logo-white.svg";
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { BsTelephone } from "react-icons/bs";
import mailIconOpen from "../../assets/mail-open-outline.svg";
import mailIcon from "../../assets/mail-outline.svg";
import timer from "../../assets/timer-outline.svg";
import today from "../../assets/today-outline.svg";
import viber from "../../assets/viber-circle.svg";
import location from "../../assets/location-outline.svg";

function FooterMobile() {
    const navigate = useNavigate();
    const scrollNav = (link) => {
        navigate(link)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const contactInfo = [
        {
            icon: <FaWhatsapp className='w-9 h-9' />,
            secondIcon: <img src={viber} alt="Correo electrónico" />,
            method: 'Vía Whatsapp',
            details: '(+52) 312 339 93 14',
            day: 'Lunes a Viernes',
            hour: '9am a 8pm'
        },
        {
            icon: <BsTelephone className='w-9 h-9' />,
            secondIcon: <img src={viber} alt="Correo electrónico" />,
            method: 'Vía telefónica',
            details: '(312) 313 50 75 / (312) 312 98 93',
            day: 'Lunes a Viernes',
            hour: '9am a 8pm'
        },
        {
            icon: <img src={mailIconOpen} alt="Correo electrónico" className='w-9 h-9' />,
            secondIcon: <img src={mailIcon} alt="Correo electrónico" />,
            method: 'Vía email',
            details: 'drnogalesgalvan@gmail.com',
            day: 'Lunes a Viernes',
            hour: '9am a 8pm'
        },
        {
            icon: <img src={location} alt="location" className="w-9 h-9" />,
            secondIcon: <img src={location} alt="location" className="w-6 h-6" />,
            method: 'Nuestro domicilio',
            details: 'Calle Manuel Payno #550 Jardines Vista Hermosa, Colima, Col.',
            day: 'Lunes a Viernes',
            hour: '9am a 8pm'
        },
    ];
    return (
        <div id="footer" className="w-full">
            <div className='flex flex-col items-center justify-center px-4'>
                <div className="pb-6 flex flex-col items-center justify-center mt-16 max-w-[320px]">
                    <h2 className="text-36 font-[700] font-lato  leading-36 mb-4">
                        Da el primer paso hacia <span className="text-color2">tu bienestar</span>.
                    </h2>
                    <p className="text-16 font-lato leading-20 text-color7 mb-8 max-w-[320px]">
                        Agenda tu cita vía Whatsapp ó llama a nuestros números de contacto.
                    </p>
                </div>
            </div>
            <div className='font-lato flex flex-col items-center justify-center gap-8'>
                {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-300 items-start flex flex-col w-full max-w-[328px] min-h-[292px] gap-8">
                        <p className="ml-[-2px]">
                            {info.icon}
                        </p>
                        <h3 className="font-[700] leading-24 text-24 mb-2">{info.method}</h3>
                        <div className='flex flex-col items-start justify-center gap-4'>
                            <p className="font-[700] text-lato text-16 leading-20 text-color6 flex items-center justify-center gap-2">
                                {info.secondIcon}
                                {info.details}
                            </p>
                            <p className="text-gray-500 font-semibold flex items-center justify-center gap-2">
                                <img src={today} alt="Correo electrónico" />
                                {info.day}
                            </p>
                            <p className="text-gray-500 font-semibold flex items-center justify-center gap-2">
                                <img src={timer} alt="Correo electrónico" />
                                {info.hour}
                            </p>
                            {info.method === "Nuestro domicilio" &&
                                <div className='w-[296px] h-[296px]'>
                                    <iframe
                                        title="Psicomed"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6899168049385!2d-103.70856388117558!3d19.2523412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255ab827db651d%3A0x9a66c57a12de163e!2sPsicomed!5e0!3m2!1ses!2sar!4v1703428549214!5m2!1ses!2sar"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            }
                        </div>
                    </div>
                ))}

                <img src={cat} alt="CAT" className='mb-16' />

            </div>
            <div className='font-lato bg-color6 w-full flex flex-col items-center justify-center pt-6 pb-12 text-color5 gap-8'>
                <img src={logo2} alt="LOGO" onClick={() => scrollNav("/")} />
                <nav className="mb-4">
                    <ul className="flex space-x-4 gap-2">
                        <li><p onClick={() => scrollNav("/")}>Inicio</p></li>
                        <li><p onClick={() => scrollNav("/servicios/emt")}>Servicios</p></li>
                        <li><p onClick={() => scrollNav("/nosotros")}>Nosotros</p></li>
                    </ul>
                </nav>
                <div className="flex space-x-4 mb-4">
                    <a href="https://www.facebook.com/C.B.I.Psicomed" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                    <a href="mailto:drnogalesgalvan@gmail.com"><FaEnvelope size={24} /></a>
                </div>
                <p>Psicomed © 2023. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default FooterMobile;