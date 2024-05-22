import banner from "../../assets/an/sweet-life-bPRZiasA8SM-unsplash.jpg";
import an1 from "../../assets/an/sweet-life-uaN7SjUfWv0-unsplash.jpg";
import an2 from "../../assets/an/sweet-life-iIDY3j_Gnjc-unsplash.jpg";
import an3 from "../../assets/an/dose-juice-sTPy-oeA3h0-unsplash (2).jpg";
import an4 from "../../assets/an/derick-mckinney-__QqvTI5Edc-unsplash.jpg";

import t1 from "../../assets/professionals/MC-Rocío-González.jpg";
import unam from "../../assets/unam.svg";
import u_colima from "../../assets/u-de-colima.svg";
import imp from "../../assets/imp.svg";
import uni from "../../assets/univa.svg";

import { IoHeartCircleOutline } from "react-icons/io5";
import { GoDash, GoPlus } from "react-icons/go";
import FooterMobile from "../Footer/FooterMobile";
import { useState } from "react";

function SanMobile() {
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
      title: "¿Cómo puedo agendar una cita?",
      description: [
        "Primero comunícate con nosotros a través de nuestros números telefónicos, o bien, mándanos un mensaje vía whatsapp solicitando una cita. Después indícanos el servicio que necesitas y nuestro equipo te agendará en el día y horario más cercano.",
        "No olvides asistir a tu cita en tiempo y forma, de lo contrario, procura cancelar con al menos 24 horas de anticipación.",
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
      title: "¿Lo que hable en mi terapia es confidencial?",
      description: [
        "Así es, nuestros expertos siempre respetarán la confidencialidad paciente - terapeuta, por lo que nada de lo que hables en la terapia será divulgado fuera de ella sin tu consentimiento.",
      ],
    },

    {
      title: "¿Qué debo llevar para mi primer cita?",
      description: [
        "Solo necesitas venir con disposición de recibir el tratamiento indicado. Nuestras instalaciones te harán sentir como en casa, así que ven con confianza y seguridad.",
      ],
    },
    {
      title: "¿Aceptan todas las formas de pago?",
      description: [
        "Aceptamos las siguientes formas de pago:",
        [
          "Efectivo.",
          "Transferencia bancaria.",
          "Tarjeta de débito o crédito.",
        ],
        "Si requieres factura, por favor comentalo a la hora de realizar el pago.",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-hidden">
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
            Asesoría Nutricional y Educación en Diabetes
          </h1>
        </div>
        <div className="w-[328px]">
          <div className="flex flex-col items-center justify-center px-4">
            <div className="pb-12 flex flex-col items-center justify-center mb-12">
              <h2 className="text-36 font-[700] font-lato  leading-52 max-w-[320px] mb-5">
                ¿Por qué tomar{" "}
                <span className="text-color2 leading-52">
                  Educación en Diabetes{" "}
                </span>
                ?
              </h2>
              <p className="text-16 font-[400] font-lato leading-20 text-color7 mb-8 max-w-[320px]">
                La Educación en Diabetes es un elemento crucial para el manejo efectivo de esta enfermedad. Proporciona los conocimientos y habilidades para comprender, prevenir y controlar la diabetes de manera efectiva en la vida diaria.
                <br />
                El objetivo es que los pacientes tomen el control de su salud, y mejoren su calidad de vida.
              </p>
              <img
                src={an1}
                alt="HOUSE"
                className="w-full border-b-stone-600 rounded-xl"
              />
            </div>

            <div className="pb-12 flex flex-col items-center justify-center mb-12">
              <h2 className="text-36 font-[700] font-lato  leading-52 max-w-[320px] mb-12 text-center">
                ¿Qué puedes{" "}
                <span className="text-color2 leading-52">aprender</span>?
              </h2>
              <div className="flex items-center justify-center mb-4 gap-2">
                <div className="w-[24px]">
                  <IoHeartCircleOutline
                    style={{ height: "24px", width: "24px" }}
                    color="#B18431"
                  />
                </div>
                <p className="min-w-[288px] max-w-[288px] text-16 font-lato font-[400] leading-20 text-color7 lg:max-w-[320px]">
                Importancia del monitoreo regular de <span className="font-semibold">niveles de glucosa.</span>
                </p>
              </div>
              <div className="flex items-center justify-center mb-4 gap-2">
                <div className="w-[24px]">
                  <IoHeartCircleOutline
                    style={{ height: "24px", width: "24px" }}
                    color="#B18431"
                  />
                </div>
                <p className="min-w-[288px] max-w-[288px] text-16 font-lato font-[400] leading-20 text-color7 lg:max-w-[320px]">
                Administración adecuada de <span className="font-semibold">insulina.</span>
                </p>
              </div>
              <div className="flex items-center justify-center mb-4 gap-2">
                <div className="w-[24px]">
                  <IoHeartCircleOutline
                    style={{ height: "24px", width: "24px" }}
                    color="#B18431"
                  />
                </div>
                <p className="min-w-[288px] max-w-[288px] text-16 font-lato font-[400] leading-20 text-color7 lg:max-w-[320px]">
                Planificación de <span className="font-semibold">comidas saludables.</span>
                </p>
              </div>
              <div className="flex items-center justify-center mb-4 gap-2">
                <div className="w-[24px]">
                  <IoHeartCircleOutline
                    style={{ height: "24px", width: "24px" }}
                    color="#B18431"
                  />
                </div>
                <p className="min-w-[288px] max-w-[288px] text-16 font-lato font-[400] leading-20 text-color7 lg:max-w-[320px]">
                <span className="font-semibold">Factores de riesgo y complicaciones</span> asociadas con la diabetes.
                </p>
              </div>

              <img
                src={an2}
                alt="HOUSE"
                className="w-full border-b-stone-600 rounded-xl"
              />
            </div>

            <div className="pb-12 flex flex-col items-center justify-center mb-12">
              <h2 className="text-36 font-[700] font-lato  leading-52 max-w-[320px] mb-5">
                ¿Por qué tomar{" "}
                <span className="text-color2 leading-52">
                  Asesoría Nutricional{" "}
                </span>
                ?
              </h2>
              <p className="text-16 font-lato leading-20 text-color7 mb-8 max-w-[320px]">
                Tomar una asesoría nutricional es fundamental para obtener un plan de alimentación personalizado que se ajuste a tus necesidades y objetivos de salud, proporcionándote educación, estableciendo metas realistas, ayudando en el manejo de condiciones médicas, previniendo enfermedades, corrigiendo desequilibrios nutricionales y brindando apoyo y motivación a lo largo del proceso, lo que en conjunto te permite mejorar tu salud y bienestar general de manera efectiva y sostenible.
              </p>
              <img
                src={an3}
                alt="HOUSE"
                className="w-full border-b-stone-600 rounded-xl"
              />
            </div>

            <div className="pb-12 flex flex-col items-center justify-center mb-12 border-b border-gray-300">
              <h2 className="text-36 font-[700] font-lato  leading-52 max-w-[320px] mb-12 text-center">
                ¿Qué puedes{" "}
                <span className="text-color2 leading-52">aprender</span>?
              </h2>
              <div className="flex items-center justify-center mb-4 gap-2">
                <div className="w-[24px]">
                  <IoHeartCircleOutline
                    style={{ height: "24px", width: "24px" }}
                    color="#B18431"
                  />
                </div>
                <p className="min-w-[288px] max-w-[288px] text-16 font-lato font-[400] leading-20 text-color7 lg:max-w-[320px]">
                Planificación de <span className="font-semibold">comidas equilibradas.</span>
                </p>
              </div>
              <div className="flex items-center justify-center mb-4 gap-2">
                <div className="w-[24px]">
                  <IoHeartCircleOutline
                    style={{ height: "24px", width: "24px" }}
                    color="#B18431"
                  />
                </div>
                <p className="min-w-[288px] max-w-[288px] text-16 font-lato font-[400] leading-20 text-color7 lg:max-w-[320px]">
                Estrategias para implementar <span className="font-semibold">cambios positivos</span> en tu estilo de vida
                </p>
              </div>
              <div className="flex items-center justify-center mb-4 gap-2">
                <div className="w-[24px]">
                  <IoHeartCircleOutline
                    style={{ height: "24px", width: "24px" }}
                    color="#B18431"
                  />
                </div>
                <p className="min-w-[288px] max-w-[288px] text-16 font-lato font-[400] leading-20 text-color7 lg:max-w-[320px]">
                Entendimiento de <span className="font-semibold">etiquetas nutrimentales.</span>
                </p>
              </div>
              <div className="flex items-center justify-center mb-4 gap-2">
                <div className="w-[24px]">
                  <IoHeartCircleOutline
                    style={{ height: "24px", width: "24px" }}
                    color="#B18431"
                  />
                </div>
                <p className="min-w-[288px] max-w-[288px] text-16 font-lato font-[400] leading-20 text-color7 lg:max-w-[320px]">
                <span className="font-semibold">Control de porciones</span> para equilibrar la ingesta calórica.
                </p>
              </div>
              <img
                src={an4}
                alt="HOUSE"
                className="w-full border-b-stone-600 rounded-xl"
              />
            </div>
          </div>

          <div className="w-[328px] py-8 mb-12 flex flex-col items-center justify-center pb-12">
            <h2 className="text-44 font-[700] font-lato leading-44 mb-12 text-center">
              Preguntas{" "}
              <span className="text-color2 leading-52">Frecuentes</span>.
            </h2>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 w-full max-w-[1280px]">
              {preguntas.map((pregunta, index) => (
                <div
                  key={index}
                  className="py-6 px-4 border border-color8 rounded-2xl h-fit"
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

          <div className="flex flex-col justify-center items-center pb-32 mb-32 border-b border-gray-300">
            <h2 className="text-36 font-[700] font-lato  leading-40 max-w-[320px] mb-12 text-center">
              Tu terapeuta.
            </h2>
            <img src={t1} alt="" className="w-[328px] max-h-[400px] rounded-xl object-cover mb-4" />
            <div className="w-[328px] flex flex-col items-start justify-center">
              <h3 className="text-36 leading-36 text-color6 font-lato font-[700] mb-6">
                M.C. Rocío González Saucedo
              </h3>
              <h4 className="text-20 leading-22 text-color6 font-lato font-[700] mb-8">
                Ingeniera Bioquímica, Diplomada en Nutrición Clínica y Educación en Diabetes, y Maestra en Ciencias Médicas y Nutrición Clínica.
              </h4>
              <p className="text-16 font-[400] text-color7 font-lato mb-12">
                Ingeniera Bioquímica con especialidad en Medio Ambiente y Sustentabilidad quién, al percatarse de la relación entre el entorno y la salud humana, decide cursar la maestría en Ciencias Médicas. Su fascinación por la influencia directa de la nutrición en la salud la llevó a profundizar en el estudio de la Nutrición Clínica, con un enfoque particular en personas que viven con Diabetes.
                <br />
                <br />
                Gracias a su formación como Terapeuta Holística, ha estudiado diversas técnicas de autoconocimiento y gestión emocional que complementan su enfoque clínico y permiten abordar a cada persona de manera integral, reconociendo la interconexión entre cuerpo, mente y espíritu.
              </p>
              <div className="flex flex-wrap gap-4 gap-y-8 justify-center items-center">
                <img src={unam} alt="" />
                <img src={u_colima} alt="" />
                <img src={uni} alt="" />
              </div>
            </div>
          </div>
        </div>
        <FooterMobile />
      </div>
    </>
  );
}

export default SanMobile;
