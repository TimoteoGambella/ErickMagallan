import banner from "../../assets/pip/Banner-Psicoterapias.jpg";
import heart from "../../assets/pip-4.svg";
import pip5 from "../../assets/pip/Psicoterapia individual (1).jpg";
import pip6 from "../../assets/pip/Psicoterapia de Pareja (1).jpg";
import pip7 from "../../assets/professionals/Dr-José-Luis.jpg";
import pip8 from "../../assets/pip/¿Por que asistir a una psicoterapia_ (1).jpg";
import { GoDash, GoPlus } from "react-icons/go";
import FooterDesktop from ".././FooterDesktop";
import unam from "../../assets/unam.svg";
import u_colima from "../../assets/u-de-colima.svg";
import imp from "../../assets/imp.svg";
import circleWhap from "../../assets/circle-whap.svg";
import circleCheck from "../../assets/circle-check.svg";
import circlePerson from "../../assets/circle-person.svg";
import circleCalendar from "../../assets/circle-calendar.svg";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function SpipDesktop({ tms, nav }) {
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
      <div className="flex flex-col items-center justify-center">
        <div
          className="w-full flex flex-col items-center justify-center h-[480px] gap-8 text-center mb-20 relative"
          style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
              backgroundPosition: "top -10px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
          }}>
          <h1 className='font-[700] text-[64px] text-color5 leading-52 font-lato'>
                        Psicoterapia Individual y de Pareja
                    </h1> 
        </div>
        <div className="flex flex-col items-center justify-center px-4">
          <div className="pb-12 flex items-center justify-center mb-12 w-full gap-20 flex-wrap">
            <div className="flex flex-col max-w-[700px]">
              <h2 className="text-48 font-[700] font-roboto leading-52 mb-5">
                ¿Por qué elegir la{" "}
                <span className="text-color2 leading-52">psicoterapia</span>?
              </h2>
              <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8">
                En nuestro espacio, la confianza y la comodidad son
                fundamentales. Aquí, te recibimos con los brazos abiertos,
                comprometidos no solo a ofrecer servicios de bienestar de
                calidad, sino a construir un refugio donde encuentres seguridad,
                comprensión y apoyo.
              </p>
            </div>
            <img
              src={pip8}
              alt="HOUSE"
              className="w-[500px] h-[500px] border-b-stone-600 rounded-xl object-cover"
            />
          </div>

          <div className="pb-36 border-b border-gray-300 flex items-center justify-center mb-12 w-full max-w-[1280px] gap-20 flex-wrap">
            <h2 className="text-48 font-[700] font-roboto leading-52 mb-8 text-center">
              ¿Qué <span className="text-color2 leading-52">terapia</span> es
              para mí?
            </h2>
            <div className="flex flex-wrap gap-20 justify-between items-center">
              <img src={pip5} alt="" className="w-[600px] h-[700px] border-b-stone-600 rounded-xl object-cover"/>
              <div className="flex flex-col w-[600px] items-start">
                <h2 className="text-48 font-[700] font-roboto leading-52 mb-8 text-center">
                  Psicoterapia{" "}
                  <span className="text-color2 leading-52">Individual</span>.
                </h2>
                <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8">
                  Proceso donde un profesional de la salud mental trabaja en
                  privado con el paciente para abordar desafíos emocionales o
                  mentales. Se exploran pensamientos y emociones para promover
                  la comprensión, el crecimiento personal y estrategias para
                  enfrentar dificultades.Este enfoque personalizado ofrece un
                  espacio confidencial y de apoyo para expresar y manejar
                  preocupaciones.
                </p>
                {beneficios.map((beneficio, index) => {
                  return (
                    <div key={index} className="flex mb-4 items-start">
                      <img src={beneficio.photo} alt="" />
                      <div className="flex flex-col ml-5">
                        <h3 className="text-20 font-lato font-[700] leading-28 text-color6">
                          {beneficio.title}
                        </h3>
                        <p className="text-20 font-lato font-[400] leading-28 text-color7">
                          {beneficio.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-wrap gap-20 justify-center items-center">
              <div className="flex flex-col w-[600px] items-start">
                <h2 className="text-48 font-[700] font-roboto leading-52 mb-8 text-center">
                  Psicoterapia de{" "}
                  <span className="text-color2 leading-52">Pareja</span>.
                </h2>
                <p className="text-16 font-lato font-normal leading-20 text-color7 mb-8">
                  Proceso terapéutico que busca fortalecer relaciones, resolver
                  conflictos y mejorar la comunicación entre las parejas.
                  Proporciona herramientas para abordar desafíos y construir una
                  base más sólida, promoviendo un crecimiento mutuo en la
                  relación.
                </p>
                {beneficios2.map((beneficio, index) => {
                  return (
                    <div key={index} className="flex mb-4 items-start">
                      <img src={beneficio.photo} alt="" />
                      <div className="flex flex-col ml-5">
                        <h3 className="text-20 font-lato font-[700] leading-28 text-color6">
                          {beneficio.title}
                        </h3>
                        <p className="text-20 font-lato font-[400] leading-28 text-color7">
                          {beneficio.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <img src={pip6} alt="" className="w-[600px] h-[700px] border-b-stone-600 rounded-xl object-cover"/>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pb-32 mt-32 border-b border-gray-300">
          <h2 className="text-48 font-[700] font-roboto  leading-40 max-w-[320px] mb-12 text-center">
            Tu terapeuta.
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-20">
            <img src={pip7} alt="" className="w-[600px] h-[700px] border-b-stone-600 rounded-xl object-cover"/>
            <div className="w-full max-w-[600px] flex flex-col items-start justify-center">
              <h3
                className="text-48 leading-52 text-color6 font-roboto font-[700] mb-6"
                style={{ letterSpacing: "1px" }}
              >
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
        </div>

        <div className="px-4 py-8 pt-20 mb-12 flex flex-col items-center justify-center pb-12 border-b border-gray-300">
          <h2 className="text-44 font-[700] font-roboto leading-44 mb-12 text-center">
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

        <div className="flex flex-col justify-center items-center mt-16 w-full py-16">
          <h2 className="text-48 font-[700] font-roboto  leading-40 mb-12 text-center">
            ¿Cómo agendo mi cita?
          </h2>
          <div className="flex flex-col justify-center items-center gap-8 w-full max-w-[1280px]">
            <div className="flex w-full justify-evenly items-center">
              <div className="flex flex-col gap-4 justify-center items-center w-[213px]">
                <img src={circleWhap} alt="" />
                <h4 className="text-24 text-color6 font-[700] leading-24">
                  Paso 1
                </h4>
                <p className="text-16 text-color7 font-[400] leading-16 text-center">
                  Contáctanos por teléfono o vía Whatsapp.
                </p>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center w-[213px]">
                <img src={circleCheck} alt="" />
                <h4 className="text-24 text-color6 font-[700] leading-24">
                  Paso 2
                </h4>
                <p className="text-16 text-color7 font-[400] leading-16 text-center">
                  Agenda una cita en el horario y día que más te convenga.
                </p>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center w-[213px]">
                <img src={circlePerson} alt="" />
                <h4 className="text-24 text-color6 font-[700] leading-24">
                  Paso 3
                </h4>
                <p className="text-16 text-color7 font-[400] leading-16 text-center">
                  Asiste a tu cita en el horario y día acordado.
                </p>
              </div>
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
              className="flex items-center justify-center cursor-pointer gap-2 text-20 text-color2 font-[700] leading-20 font-lato mt-12"
              onClick={() => window.open("https://w.app/psicomed", "_blank")}
            >
              Agenda una cita
              <FaArrowRight />
            </p>
          </div>
        </div>
        <FooterDesktop />
      </div>
    </>
  );
}

export default SpipDesktop;
