import banner from "../../assets/banner-servicios-pip.svg";
import pip1 from "../../assets/pip-1.svg";
import pip2 from "../../assets/pip-2.svg";
import pip3 from "../../assets/pip-3.svg";
import heart from "../../assets/pip-4.svg";
import pip5 from "../../assets/pip-5.svg";
import pip7 from "../../assets/pip-7.svg";
import { GoDash, GoPlus } from "react-icons/go";
import FooterMobile from ".././FooterMobile";
import ben1 from "../../assets/beneficio-1.svg";
import ben2 from "../../assets/beneficio-1.svg";
import ben3 from "../../assets/beneficio-1.svg";
import terapeuta from "../../assets/man.svg";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

import unam from "../../assets/unam.svg";
import u_colima from "../../assets/u-de-colima.svg";
import imp from "../../assets/imp.svg";

import circleWhap from "../../assets/circle-whap.svg";
import circleCheck from "../../assets/circle-check.svg";
import circlePerson from "../../assets/circle-person.svg";
import circleCalendar from "../../assets/circle-calendar.svg";
import line from "../../assets/circle-line.svg";

function SpipMobile({ tms }) {
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
      title: "¿Cuándo acudir a Psicoterapia de Pareja?",
      description: [
        "Si tu relación presenta una, o más de una de las siguientes señales, podría ser momento de iniciar un proceso psicoterapéutico:",
        [
          "Amenaza de separación.",
          "Disfunciones sexuales.",
          "Desacuerdos insuperables.",
          "Ya no hay diversión ni humor.",
          "Existen secretos y mentiras.",
          "Instatisfacción y frustración.",
          "Envidia y lucha de poder.",
          "Relaciones extramaritales.",
        ],
      ],
    },
    {
      title: "¿Cómo puedo agendar una cita?",
      description: [
        "Primero comunícate con nosotros a través de nuestros números telefónicos, o bien, mándanos un mensaje vía whatsapp solicitando una cita. Después indícanos el servicio que necesitas y nuestro equipo te agendará en el día y horario más cercano.",
        "No olvides asistir a tu cita en tiempo y forma, de lo contrario, procura cancelar con al menos 24 horas de anticipación.",
      ],
    },
    {
      title: "¿Cuándo acudir a terapia de pareja?",
      description: ["Lorem ipsu"],
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
      title: "¿Por qué acudir a Psicoterapia de Pareja con un profesional?",
      description: [
        <p>
          Acudir a <span className="font-bold">Psicoterapia de Pareja</span> con
          un profesional con formación y experiencia en el área te aportará las
          herramientas para analizar, comprender, modificar y ajustar tus
          procesos de comunicación, manejo de conflictos, toma de decisiones,
          solución de problemas y trato amoroso, desde diversos enfoques de la
          psicoterapia.
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
      title: "¿Cuál es la finalidad de la terapia de pareja?",
      description: [
        <p>
          Recomendamos que acudas a{" "}
          <span className="font-bold">Terapia de Pareja</span> para que ambos
          sean capaces de:
        </p>,
        [
          "Mejorar la relación para alcanzar su potencial amoroso máximo.",
          "Cumplir eficientemente con las tareas y metas según la etapa en que se encuentra la relación.",
          "Renovar el amor y el cariño entre ambos.",
          "Reafirmar la disposición y compromiso de seguir en la relación.",
          "Disolver la relación en buenos términos cuando se hayan agotado todos los recursos emocionales.",
          "Minimizar el impacto emocional en los hijos en caso de separación.",
        ],
      ],
    },
    {
      title: "¿Qué debo llevar para mi primer cita?",
      description: [
        "Solo necesitas venir con disposición de recibir el tratamiento indicado. Nuestras instalaciones te harán sentir como en casa, así que ven con confianza y seguridad.",
      ],
    },
    {
      title: "¿Qué hago si mi pareja no quiere o no puede ir a terapia?",
      description: [
        <p>
          No te preocupes, aún puedes asistir a{" "}
          <span className="font-bold">Terapia Individual</span> como miembro de
          la pareja. Cuando se logra el cambio en uno de los miembros, la otra
          parte cambia en respuesta.
        </p>,
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

  const beneficios = [
    {
      photo: heart,
      title: "Confidencialidad y Apoyo",
      description:
        "La psicoterapia individual proporciona un entorno confidencial y de apoyo donde los pacientes pueden expresar abiertamente sus preocupaciones.",
    },
    {
      photo: heart,
      title: "Mejora las relaciones interpersonales",
      description:
        "Explorar dinámicas personales mejora comunicación y fortalece relaciones para conexiones más saludables en lo personal y profesional.",
    },
    {
      photo: heart,
      title: "Adaptación a cambios",
      description:
        "La psicoterapia brinda herramientas para adaptarse y gestionar cambios en la vida, construyendo resiliencia y capacidad de afrontamiento.",
    },
  ];
  const beneficios2 = [
    {
      photo: heart,
      title: "Mejora de la comunicación",
      description:
        "La psicoterapia de pareja ofrece un espacio seguro para mejorar la comunicación, facilitando la expresión abierta y efectiva de pensamientos y emociones.",
    },
    {
      photo: heart,
      title: "Resolución de Conflictos",
      description:
        "Ayuda a las parejas a identificar y abordar conflictos de manera constructiva, proporcionando estrategias para encontrar soluciones y llegar a compromisos mutuos.",
    },
    {
      photo: heart,
      title: "Fortalecimiento de Vínculos",
      description:
        " Contribuye al fortalecimiento de la conexión emocional y afectiva entre las parejas, fomentando un entendimiento más profundo y una mayor intimidad.",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div
          className="w-full flex flex-col items-center justify-center h-[540px] gap-8 text-center mb-16"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <h1 className='font-[700] text-48 text-color5 leading-52 font-lato max-w-full'>
                        Psicoterapia Individual y de Pareja
                    </h1> */}
        </div>
        <div className="w-[328px]">
          <div className="flex flex-col items-center justify-center px-4 w-full">
            <div className="pb-12 flex flex-col items-center justify-center mb-12">
              <h2 className="text-36 font-[700] font-roboto  leading-52 mb-5 text-center">
                ¿Por qué elegir la{" "}
                <span className="text-color2 leading-52">psicoterapia</span>?
              </h2>
              <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8 text-center">
                En nuestro espacio, la confianza y la comodidad son
                fundamentales. Aquí, te recibimos con los brazos abiertos,
                comprometidos no solo a ofrecer servicios de bienestar de
                calidad, sino a construir un refugio donde encuentres seguridad,
                comprensión y apoyo.
              </p>
              <img
                src={pip1}
                alt="HOUSE"
                className="w-full border-b-stone-600"
              />
            </div>

            <div className="border-b border-gray-300 flex items-center justify-center mb-12 w-[328px] gap-20 flex-wrap">
              <h2 className="text-36 font-[700] font-roboto leading-40 text-center">
                ¿Qué <span className="text-color2 leading-52">terapia</span> es
                para mí?
              </h2>
              <div className="flex flex-wrap gap-8 justify-center items-center">
                {/* <img src={pip2} alt="" className="w-full"/> */}
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-32 font-[700] font-roboto leading-32 mb-8 text-center">
                    Psicoterapia{" "}
                    <span className="text-color2 leading-52">Individual</span>.
                  </h2>
                  <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8 text-center">
                    La psicoterapia individual es un proceso donde un
                    profesional de la salud mental trabaja en privado con el
                    paciente para abordar desafíos emocionales o mentales. Se
                    exploran pensamientos y emociones para promover la
                    comprensión, el crecimiento personal y estrategias para
                    enfrentar dificultades. Este enfoque personalizado ofrece un
                    espacio confidencial y de apoyo para expresar y manejar
                    preocupaciones.
                  </p>
                  {beneficios.map((beneficio, index) => {
                    return (
                      <div
                        key={index}
                        className="flex mb-4 flex-col justify-center items-center w-[328px]"
                      >
                        <img src={beneficio.photo} alt="" className="mb-5" />
                        <div className="flex flex-col items-center justify-center mb-8">
                          <h3 className="text-20 font-lato font-[700] leading-28 text-color6 text-center">
                            {beneficio.title}
                          </h3>
                          <p className="text-20 font-lato font-[400] leading-28 text-color7 text-center w-full">
                            {beneficio.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-wrap gap-20 justify-center items-center w-[328px]">
                <img src={pip2} alt="" className="w-full" />
                <div className="flex flex-col items-start">
                  <h2 className="text-32 font-[700] font-roboto leading-9 mb-8 text-center h-9">
                    Psicoterapia de{" "}
                    <span className="text-color2 leading-9">Pareja</span>.
                  </h2>
                  <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8 text-center">
                    Lorem ipsum dolor sit amet consectetur. Pretium tellus leo
                    elit et et amet. Tristique volutpat vel aenean lectus a
                    dapibus euismod turpis amet. Tellus commodo sit quis feugiat
                    dui et pellentesque quis. Gravida velit nunc mi aliquam.
                    Nullam leo sit faucibus tincidunt velit. Tellus in porta
                    ornare faucibus tempus vel amet sed faucibus.
                  </p>
                  {beneficios2.map((beneficio, index) => {
                    return (
                      <div className="flex mb-4 flex-col justify-center items-center">
                        <img src={beneficio.photo} alt="" className="mb-5" />
                        <div className="flex flex-col ml-5 items-center justify-center mb-8">
                          <h3 className="text-20 font-lato font-[700] leading-28 text-color6">
                            {beneficio.title}
                          </h3>
                          <p className="text-20 font-lato font-[400] leading-28 text-color7 text-center w-full">
                            {beneficio.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <img src={pip3} alt="" className="px-4 w-[328px]" />

          <div className="w-[328px] py-8 pt-20 mb-12 flex flex-col items-center justify-center pb-12 border-b border-gray-300">
            <h2 className="text-44 font-[700] font-roboto leading-44 mb-12 text-center">
              Preguntas{" "}
              <span className="text-color2 leading-52">Frecuentes</span>.
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
                    <span className="text-20 font-roboto font-[700] leading-20 text-color7">
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

          <div className="flex flex-col justify-center items-center mb-32">
            <h2 className="text-36 font-[700] font-roboto  leading-40 max-w-[320px] mb-12 text-center">
              Tu terapeuta.
            </h2>
            <img src={pip7} alt="" className="w-[328px] mb-8" />
            <div className="w-[328px] flex flex-col items-start justify-center">
              <h3 className="text-36 leading-36 text-color6 font-roboto font-[700] mb-6">
                Dr. José Luis Nogales Galván
              </h3>
              <h4 className="text-20 leading-22 text-color6 font-roboto font-[700] mb-8">
                Médico Psiquiatra, Maestro y Doctor en Psicoterapia Individual y
                de Pareja.
              </h4>
              <p className="text-16 font-[400] text-color7 font-lato mb-12">
                Médico con especialidad en Psiquiatría, egresado de la
                Universidad Nacional Autónoma de México, así como Maestría y
                Doctorado en Psicoterapia Inidividual y de Pareja, se ha
                convertido en un experto tanto en el abordaje individual como en
                el trabajo con parejas.
                <br />
                <br />
                Su enfoque se basa en una perspectiva sistémica centrada en las
                emociones, influenciada por la psicología de Jung. Su dedicación
                a comprender las complejidades emocionales y su formación
                especializada le permiten ofrecer un apoyo integral, adaptado a
                las necesidades únicas de cada individuo y relación.
              </p>
              <div className="flex flex-wrap gap-4 gap-y-8 justify-center items-center">
                <img src={unam} alt="" />
                <img src={u_colima} alt="" />
                <img src={imp} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-16 w-full max-w-[360px] border-b border-gray">
        <h2 className="text-48 font-[700] font-roboto  leading-40 mb-12 text-center">
          ¿Cómo agendo mi cita?
        </h2>
        <div className="flex flex-col justify-center items-center gap-8 w-full max-w-[360px]">
          <div className="flex flex-col w-full justify-evenly items-center gap-8">
            <div className="flex flex-col gap-4 justify-center items-center w-[213px]">
              <img src={circleWhap} alt="" />
              <h4 className="text-24 text-color6 font-[700] leading-24">
                Paso 1
              </h4>
              <p className="text-16 text-color7 font-[400] leading-16 text-center">
                Contáctanos por teléfono o vía Whatsapp.
              </p>
            </div>
            <img src={line} alt="" />
            <div className="flex flex-col gap-4 justify-center items-center w-[213px]">
              <img src={circleCheck} alt="" />
              <h4 className="text-24 text-color6 font-[700] leading-24">
                Paso 2
              </h4>
              <p className="text-16 text-color7 font-[400] leading-16 text-center">
                Agenda una cita en el horario y día que más te convenga.
              </p>
            </div>
            <img src={line} alt="" />
            <div className="flex flex-col gap-4 justify-center items-center w-[213px]">
              <img src={circlePerson} alt="" />
              <h4 className="text-24 text-color6 font-[700] leading-24">
                Paso 3
              </h4>
              <p className="text-16 text-color7 font-[400] leading-16 text-center">
                Asiste a tu cita en el horario y día acordado.
              </p>
            </div>
            <img src={line} alt="" />
            <div className="flex flex-col gap-4 justify-center items-center w-[213px]">
              <img src={circleCalendar} alt="" />
              <h4 className="text-24 text-color6 font-[700] leading-24">
                Paso 4
              </h4>
              <p className="text-16 text-color7 font-[400] leading-16 text-center">
                Realiza el pago y agenda tu siguiente cita.
              </p>
            </div>
          </div>

          <p
            className="flex items-center justify-center cursor-pointer gap-2 text-20 text-color2 font-[700] leading-20 font-lato mt-12 mb-24"
            onClick={() => window.open("https://w.app/psicomed", "_blank")}
          >
            Agenda una cita
            <FaArrowRight />
          </p>
        </div>
      </div>
        </div>
        <FooterMobile />
      </div>
    </>
  );
}

export default SpipMobile;
