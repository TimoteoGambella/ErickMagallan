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


function FooterDesktop() {
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
            details: '(312) 312 33 50 75 / 312 312 98 93',
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
            <div className="w-full flex flex-col items-center">
                <div className="w-full my-12 px-20">
                    <div className='flex flex-col items-center justify-center border-t'>
                        <div className="pb-6 flex items-center justify-center mt-16 gap-8">
                            <div className='flex flex-col mb-8'>
                                <h2 className="text-48 font-[700] font-lato leading-52 mb-8">
                                    Da el primer paso hacia <span className="text-color2">tu bienestar</span>.
                                </h2>
                                <p className="text-20 font-lato leading-20 text-color7 mb-8">
                                    Agenda tu cita vía Whatsapp ó llama a nuestros números de contacto.
                                </p>
                            </div>
                            <img src={cat} alt="CAT" className='mb-16' />
                        </div>
                    </div>

                    <div className='font-lato flex items-center justify-start gap-8 flex-wrap mb-8'>
                        {contactInfo.map((info, index) => (
                            <>
                                {info.method !== "Nuestro domicilio" &&
                                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-300 items-start flex flex-col w-full max-w-[350px] min-h-[230px] gap-8">
                                        <p>
                                            {info.icon}
                                        </p>
                                        <h3 className="font-[700] leading-24 text-24 mb-2">{info.method}</h3>
                                        <div className='flex flex-col items-start justify-center gap-4'>
                                            <p className="font-[700] text-16 leading-20 text-color6 flex items-center justify-center gap-2">
                                                {info.secondIcon}
                                                {info.details}
                                            </p>
                                            <p className="text-gray-500 flex items-center justify-center gap-2">
                                                <img src={today} alt="today" />
                                                <p className="font-bold">{info.day}</p>
                                                <img src={timer} alt="timer" />
                                                <p className="font-bold">{info.hour}</p>
                                            </p>
                                        </div>
                                    </div>
                                }
                            </>
                        ))}
                    </div>
                  <div className="font-lato bg-white p-8 rounded-lg border border-gray-300 items-start justify-center flex flex-col gap-4">
                        <p className="ml-[-2px]">
                            {contactInfo[3].icon}
                        </p>
                        <h3 className="font-[700] leading-24 text-24 mb-2">{contactInfo[3].method}</h3>
                        <div className='flex flex-col items-start justify-start'>
                            <p className="font-[700] text-16 leading-20 text-color6 flex items-center justify-start gap-2 mb-2">
                                <p className="ml-[-2px]">
                                    {contactInfo[3].secondIcon}
                                </p>
                                {contactInfo[3].details}
                            </p>
                            <p className="text-gray-500 flex items-center justify-center gap-2 font-bold">
                                <img src={today} alt="today" />
                                {contactInfo[3].day}
                                <img src={timer} alt="timer" />
                                {contactInfo[3].hour}
                            </p>
                        </div>
                        <div className='w-full h-full min-w-[296px] grow'>
                            <iframe
                                title="ubicación"
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
                </div>
                <div className='bg-color6 font-lato w-full flex flex-col items-center justify-center pt-6 pb-12 text-color5 gap-8 px-3'>
                    <div className='flex items-center justify-between gap-10 w-full'>
                        <div className="w-auto min-w-36 max-w-[300px]">
                            <img onClick={() => scrollNav("/")} src={logo2} alt="LOGO" className='w-[181px]' />
                        </div>
                        <nav className="mb-4 flex flex-col items-center justify-center w-full flex-grow-0">
                            <ul className="flex space-x-4 items-center justify-center mb-4 gap-1">
                                <li><p onClick={() => scrollNav("/")} className="hover:cursor-pointer">Inicio</p></li>
                                <li><p onClick={() => scrollNav("/nosotros")} className="hover:cursor-pointer">Nosotros</p></li>
                                <li><p onClick={() => scrollNav("/servicios/emt")} className="hover:cursor-pointer">Estimulación Magnética Transcraneal</p></li>
                            </ul>
                            <ul className="flex space-x-4 items-center justify-center gap-1">
                                <li><p onClick={() => scrollNav("/servicios/emt")} className="hover:cursor-pointer">Psicoterapia Ind. y de Pareja</p></li>
                                <li><p onClick={() => scrollNav("/servicios/emt")} className="hover:cursor-pointer">Asesoría Nutricional</p></li>
                                <li><p onClick={() => scrollNav("/servicios/emt")} className="hover:cursor-pointer">Terapia Holística</p></li>
                            </ul>
                        </nav>
                        <div className="flex justify-end space-x-4 mb-4 w-auto">
                            <a href="https://www.facebook.com/C.B.I.Psicomed" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                            <a href="mailto:drnogalesgalvan@gmail.com"><FaEnvelope size={24} /></a>
                        </div>
                    </div>
                    <p className='w-full mx-auto text-center'>Psicomed © 2023. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    )
}

export default FooterDesktop;