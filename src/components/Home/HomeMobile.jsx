import house from "../../assets/home-1.svg";
import service1 from "../../assets/home/TMS.jpg";
import services from "../../assets/home/Nuestros servicios.jpeg";
import { FaArrowRight } from "react-icons/fa6";

import Slider from "react-slick";

import { useNavigate } from "react-router-dom";
import banner from "../../assets/home/banner-home.jpg";
import FooterMobile from "../Footer/FooterMobile";
import { useState } from "react";
import { GoDash, GoPlus } from "react-icons/go";

function HomeMobile({ features, experts, testimonials, settings }) {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const preguntas = [
    {
      title: "Psicoterapia individual y de parejas",
      description: [
        "La psicoterapia nos brinda la oportunidad de conocernos a nosotros mismos, entendiendo por qué tenemos conflictos que nos llevan a sentirnos deprimidos o ansiosos, cómo enfrentarlos y resolverlos mediante estrategias para su gestión y superarlos mejorando nuestras relaciones personales y de pareja.",
        <p
          className="flex items-end justify-start cursor-pointer gap-2 text-color2 font-[700] leading-20 font-lato w-32 h-5 mt-6"
          onClick={() => navigate("/nosotros")}
        >
          Conoce más
          <FaArrowRight />
        </p>,
      ],
    },
    {
      title: "Estimulación Magnética Transcraneal",
      description: [
        "Primero comunícate con nosotros a través de nuestros números telefónicos, o bien, mándanos un mensaje vía whatsapp solicitando una cita. Después indícanos el servicio que necesitas y nuestro equipo te agendará en el día y horario más cercano.",
        "No olvides asistir a tu cita en tiempo y forma, de lo contrario, procura cancelar con al menos 24 horas de anticipación.",
      ],
    },
    {
      title: "¿Tiene efectos secundarios?",
      description: [
        "En pacientes sin contraindicaciones, los efectos secundarios de la terapia magnética transcraneal son mínimos y regularmente disminuyen con el paso de las sesiones. Estos incluyen:",
        ["Cefalea transitoria", "Mareo", "Somnolencia"],
        "(Se presentan en menos del 2% de pacientes)",
      ],
    },
    {
      title: "¿Qué pasa si no puedo asistir a mi cita?",
      description: [
        <p>
          En caso de tener alguna complicación que te impida asistir, te pedimos
          que canceles con al menos 24 horas de anticipación. De lo contrario,
          se te pedirá que{" "}
          <span className="font-bold">cubras el 50% del costo</span> de tu cita.
        </p>,
        "Cancelar tu cita con anticipación nos permite utilizar ese horario para alguna persona que también lo necesite.",
      ],
    },
    {
      title: "¿A partir de cuánto tiempo empiezan a observarse las mejoras?",
      description: [
        "Las mejoras obtenidas con el uso de la estimulación magnética transcraneal pueden presentarse a partir de las sesión 5. No obstante para que las mejoras sean totalmente visibles y se mantenga el efecto terapéutico se requiere en promedio entre 15 y 20 sesiones.",
      ],
    },
    {
      title: "¿Lo que hable en mi terapia es confidencial?",
      description: [
        "Así es, nuestros expertos siempre respetarán la confidencialidad paciente - terapeuta, por lo que nada de lo que hables en la terapia será divulgado fuera de ella sin tu consentimiento.",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="w-full flex flex-col items-center justify-center h-[540px] gap-8 text-center mb-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-[700] text-48 text-color5 leading-52 font-lato max-w-[328px]">
        Tu espacio de <span className="text-color1 leading-52">salud mental</span> y <span className="text-color1 leading-52">bienestar emocional</span>.
        </h1>
        <h2 className="font-[400] text-16 text-color5 leading-24 font-lato max-w-[328px]">
        En Psicomed te apoyamos y acompañamos en tu camino hacia una vida plena.
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center px-4">
        <div className="pb-6 border-b border-gray-300 flex flex-col items-center justify-center">
          <h2 className="text-36 font-[700] font-lato leading-52 max-w-[320px] mb-5">
            En <span className="text-color2 leading-52">Psicomed</span>,
            queremos que te sientas <span className="text-color2">en casa</span>
            .
          </h2>
          <p className="text-16 font-lato leading-20 text-color7 mb-8 max-w-[320px]">
            En nuestro espacio, la confianza y la comodidad son fundamentales.
            Aquí, te recibimos con los brazos abiertos, comprometidos no solo a
            ofrecer servicios de bienestar de calidad, sino a construir un
            refugio donde encuentres seguridad, comprensión y apoyo.
          </p>
          <img
            src={house}
            alt="HOUSE"
            className="w-[328px] border-b-stone-600"
          />
        </div>

        <div className="pt-6 border-b border-gray-300 flex flex-col items-center justify-center pb-12">
          <h2 className="text-36 font-[700] font-lato  leading-52 max-w-[320px]">
            Estimulación Magnética{" "}
            <span className="text-color2 leading-52">Transcraneal</span>.
          </h2>
          <p className="text-16 font-lato leading-20 text-color7 mb-8 max-w-[320px]">
            En nuestro espacio, la confianza y la comodidad son fundamentales.
            Aquí, te recibimos con los brazos abiertos, comprometidos no solo a
            ofrecer servicios de bienestar de calidad, sino a construir un
            refugio donde encuentres seguridad, comprensión y apoyo.
          </p>
          <img
            src={service1}
            alt="HOUSE"
            className="w-[328px] border-b-stone-600 mb-5 rounded-xl"
          />

          <p
            className="flex items-center justify-center gap-2 text-color2 font-[700] leading-20 font-lato pb-12"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              navigate("/servicios/emt");
            }}
          >
            Lee más sobre esto
            <FaArrowRight />
          </p>
        </div>

        <div className="w-[328px] py-8 pt-20 mb-12 flex flex-col items-center justify-center pb-12 border-b border-gray-300">
          <h2 className="text-44 font-[700] font-lato leading-44 mb-12 text-center">
            Preguntas <span className="text-color2 leading-52">Frecuentes</span>
            .
          </h2>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 w-full max-w-[1280px]">
            {preguntas.map((pregunta, index) => (
              <div
                key={index}
                className="py-6 px-4 border border-color8 rounded-md h-fit"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="text-20 font-lato font-[700] leading-20 text-color7">
                    {pregunta.title}
                  </span>
                  {expandedIndex === index ? (
                    <GoDash size={20} />
                  ) : (
                    <GoPlus size={20} />
                  )}
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
                          <p className="font-lato text-color7">{item}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-[328px] mt-8">
            <img
              src={services}
              alt="SERVICES"
              className=" w-full max-w-[328px] h-full rounded-xl m-auto"
            />
          </div>
        </div>
        <div className="mt-12 max-w-[320px] pb-12 border-b border-gray-300">
          <h2 className="text-36 font-[700] font-lato text-color6 mb-6 max-w-[320px]">
            ¿Por qué elegir a{" "}
            <span className="text-color2 leading-40">Psicomed</span>?
          </h2>
          <p className="text-16 font-lato leading-20 text-color7 mb-12 max-w-[320px]">
            Elegir el apoyo adecuado es esencial en el camino hacia el
            bienestar. En Psicomed, estamos comprometidos a ser ese aliado
            confiable y experto que buscas.
          </p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="bg-white rounded-lg pb-8 flex flex-col items-start gap-2"
              >
                <p className="text-color2">{feature.icon}</p>
                <h3 className="font-[700] font-lato text-20 leading-20 text-color6 mb-2">
                  {feature.title}
                </h3>
                <p className="font-lato text-16 leading-20 text-color7 mb-4">
                  {feature.description}
                </p>
                <p
                  className="flex items-center justify-center gap-2 text-color2 font-[700] leading-20 font-lato cursor-pointer"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate(feature.link);
                  }}
                >
                  {feature.linkText}
                  <FaArrowRight />
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 max-w-[320px] mb-16">
          <h2 className="text-36 font-[700] font-lato text-color6 mb-12 max-w-[320px]">
            Nuestros <span className="text-color2 leading-40">expertos</span>.
          </h2>

          {experts.map((expert, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg ${index === 0 && "mb-12"}`}
            >
              <img
                src={expert.img}
                alt={expert.name}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="font-[700] font-lato text-20 leading-20 text-color6 text-center">
                {expert.name}
              </h3>
              <p className="font-lato text-16 leading-20 text-[#697077] text-center mt-1">
                {expert.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16 bg-[#FFF9ED] w-full flex flex-col items-center justify-center">
        <h2 className="text-32 font-[700] font-lato text-color6 mb-8 w-full max-w-[360px] text-center leading-32">
          Lo que dicen nuestros{" "}
          <span className="text-color2 leading-32">pacientes</span>.
        </h2>
        <div className="w-full h-[378px] overflow-hidden">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div className="p-6 rounded-lg bg-[#FFF9ED] text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="font-[700] font-lato text-20 leading-20 text-color6 mb-4">
                  {testimonial.name}
                </h3>
                <p className="font-[400] font-lato text-16 leading-20 text-color6 max-w-[320px] m-auto">
                  {testimonial.feedback}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <FooterMobile />
    </div>
  );
}

export default HomeMobile;
