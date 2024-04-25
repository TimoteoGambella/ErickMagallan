import banner from "../../assets/th/camille-brodard-AVi4lkHl5L4-unsplash.jpg";
import t1 from "../../assets/professionals/MC-Rocío-González.jpg";
import th1 from "../../assets/th-1.svg";
import th2 from "../../assets/th/i710024-6.jpg";
import th3 from "../../assets/th/chelsea-shapouri-r40EYKVyutI-unsplash.jpg";
import th4 from "../../assets/th/christin-hume-0MoF-Fe0w0A-unsplash.jpg";
import th5 from "../../assets/th/motoki-tonn-X00q3RXcyZ4-unsplash.jpg";
import th6 from "../../assets/th/toa-heftiba-a9pFSC8dTlo-unsplash.jpg";
import th7 from "../../assets/th/unseen-studio-s9CC2SKySJM-unsplash.jpg";

import uni from "../../assets/univa.svg";

import heart from "../../assets/pip-4.svg";
import { GoDash, GoPlus } from "react-icons/go";
import FooterDesktop from "../Footer/FooterDesktop";
import unam from "../../assets/unam.svg";
import u_colima from "../../assets/u-de-colima.svg";
import imp from "../../assets/imp.svg";
import { useState } from "react";

function SthDesktop() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const beneficios = [
    {
      photo: heart,
      title: "Regeneración celular.",
      description:
        "Activa y repara células, promoviendo su salud y funcionamiento óptimo.",
    },
    {
      photo: heart,
      title: "Desintoxicación y circulación.",
      description:
        "Facilita la desintoxicación linfática, mejora la circulación y fortalece órganos para un sistema más saludable.",
    },
    {
      photo: heart,
      title: "Refuerzo inmunolgógico.",
      description:
        "Estimula el sistema inmunológico, fortaleciendo la capacidad del cuerpo para defenderse contra enfermedades.",
    },
  ];

  const beneficios2 = [
    {
      photo: heart,
      title: "Alivio de estrés y ansiedad.",
      description:
        "Aceites esenciales como lavanda y manzanilla se usan en aromaterapia por sus propiedades relajantes. Inhalando estos aromas, se puede reducir el estrés y la ansiedad, promoviendo un estado de calma.",
    },
    {
      photo: heart,
      title: "Mejora del sueño.",
      description:
        "Lavanda y bergamota se asocian con mejorar el sueño. La aromaterapia antes de dormir, al inhalar o aplicar en la almohada, puede inducir un estado tranquilo y favorecer el sueño reparador.",
    },
    {
      photo: heart,
      title: "Alivio de molestias físicas.",
      description:
        "Aceites esenciales como mentol o menta alivian dolores de cabeza y tensiones musculares. Su aplicación tópica o inhalación puede brindar alivio temporal a molestias físicas.",
    },
  ];

  const beneficios3 = [
    {
      photo: heart,
      title: "Equilibrio emocional.",
      description:
        "Pueden ser beneficiosas para aliviar el estrés, la ansiedad, el miedo, la tristeza u otras emociones intensas, fomentando así un estado emocional equilibrado.",
    },
    {
      photo: heart,
      title: "Apoyo en momento de cambio o crisis.",
      description:
        "Las esencias florales pueden proporcionar apoyo emocional durante períodos difíciles, ayudando a las personas a adaptarse a nuevas circunstancias y afrontar desafíos.",
    },
    {
      photo: heart,
      title: "Promoción de la autoconciencia y el desarrollo personal.",
      description:
        "Al trabajar con las esencias florales, las personas pueden explorar sus patrones emocionales, comprender mejor sus reacciones y desarrollar una mayor conciencia emocional.",
    },
  ];

  const beneficios4 = [
    {
      photo: heart,
      title: "Cambio de patrones de pensamiento limitantes.",
      description:
        "ThetaHealing se enfoca en cambiar creencias subconscientes limitantes para mejorar la autoestima, confianza y capacidad para enfrentar desafíos.",
    },
    {
      photo: heart,
      title: "Alivio del estrés y la ansiedad.",
      description:
        "La práctica de ThetaHealing, incluye la inducción de un estado mental profundo y relajado, lo que puede ayudar a reducir el estrés y la ansiedad.",
    },
    {
      photo: heart,
      title: "Mejora en la salud emocional y física.",
      description:
        "Al liberar bloqueos emocionales y transformar creencias limitantes, algunas personas experimentan un aumento en los niveles de energía y vitalidad.",
    },
  ];

  const beneficios5 = [
    {
      photo: heart,
      title: "Reducción del estrés.",
      description:
        "El reiki a menudo se asocia con la disminución del estrés y la promoción de la relajación profunda, lo que contribuye a mejorar el bienestar emocional y mental.",
    },
    {
      photo: heart,
      title: "Mejora del sueño.",
      description:
        "Las sesiones de Reiki contribuyen a un mejor patrón de sueño, ayudando a aliviar el insomnio y promoviendo un descanso más profundo.",
    },
    {
      photo: heart,
      title: "Aumento de la claridad mental.",
      description:
        "Contribuye a una mayor claridad mental y enfoque, lo que puede ser beneficioso para aquellos que buscan equilibrio en medio de situaciones estresantes.",
    },
  ];

  const beneficios6 = [
    {
      photo: heart,
      title: "Autoconocimiento.",
      description:
        "Proporciona a las personas una comprensión más profunda de sí mismas al analizar información sobre rasgos de personalidad, fortalezas y desafíos, lo que puede contribuir al proceso de autoexploración y crecimiento personal.",
    },
    {
      photo: heart,
      title: "Potencial para el crecimiento espiritual.",
      description:
        "Al analizar números específicos, algunos creen que pueden obtener perspectivas sobre su propósito de vida y su conexión con fuerzas espirituales.",
    },
    {
      photo: heart,
      title: "Identificación de patrones de vida.",
      description:
        "La numerología analiza patrones numéricos en la vida de una persona, como ciclos y desafíos recurrentes, ayudando a entender las fases de la vida y a tomar medidas para maximizar oportunidades.",
    },
  ];

  const preguntas = [
    {
      title: "¿Cual es la finalidad de las terapias holísticas?",
      description: [
        <p>
          La finalidad de las{" "}
          <span className="font-bold">Terapias Holísticas</span> es abordar el
          bienestar integral de una persona, considerando la conexión entre
          mente, cuerpo y espíritu. Estas terapias buscan no solo aliviar
          síntomas físicos, emocionales o mentales, sino también promover la
          armonía, la autoconciencia y el equilibrio en todos los aspectos de la
          vida.
        </p>,
        "Además, buscan una aproximación integral y personalizada, tratando a la persona en su totalidad en lugar de centrarse únicamente en los síntomas aislados.",
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
      title: "¿Con qué frecuencia es necesario acudir?",
      description: [
        "La frecuencia recomendada varía según las necesidades individuales. Algunos encuentran beneficios con sesiones semanales o quincenales, mientras que otros optan por sesiones mensuales como mantenimiento.",
        "La comunicación con el terapeuta es clave para determinar la frecuencia más adecuada según los objetivos y necesidades del paciente.",
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
      title: "¿Cuánto tiempo duran las sesiones?",
      description: [
        "La duración puede fluctuar entre hora y media y dos horas, aunque este periodo se adapta según las necesidades individuales. Se busca personalizar la experiencia terapéutica para asegurar que se aborden de manera adecuada las preocupaciones específicas y se promueva un bienestar integral.",
        "La flexibilidad en la duración de las sesiones permite ajustarse a las particularidades de cada paciente.",
      ],
    },
    {
      title: "¿Lo que hable en mi terapia es confidencial?",
      description: [
        "Así es, nuestros expertos siempre respetarán la confidencialidad paciente - terapeuta, por lo que nada de lo que hables en la terapia será divulgado fuera de ella sin tu consentimiento.",
      ],
    },
    {
      title:
        "¿Hay alguna preparación específica antes de acudir a las sesiones?",
      description: [
        "Te recomendamos vestir ropa cómoda, mantenerse hidratado y evitar comidas pesadas antes de tu sesión. Recuerda informar al terapeuta sobre condiciones de salud y te agradecemos estar dispuesto a mantener una mente abierta para contribuir a una experiencia terapéutica más efectiva y personalizada.",
        "Si tienes alguna duda específica o inquietudes, comunícate con tu terapeuta.",
      ],
    },
    {
      title: "¿Qué debo llevar para mi primer cita?",
      description: [
        "Solo necesitas venir con disposición de recibir el tratamiento indicado. Nuestras instalaciones te harán sentir como en casa, así que ven con confianza y seguridad.",
      ],
    },
    {
      title: "¿Porqué elegir las terapias holísticas?",
      description: [
        <p>
          Los enfoques de la{" "}
          <span className="font-bold">Terapia Holística</span> abordan el
          bienestar en múltiples niveles, considerando la conexión entre mente,
          cuerpo y espíritu.
        </p>,
        "Se destacan por su capacidad para adaptarse a las necesidades individuales de cada paciente, proporcionando un tratamiento personalizado e integral al mismo.",
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
      <div className="w-full">
        <div className="w-full flex flex-col items-center justify-center h-[480px] gap-8 text-center mb-20 relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}>
          <h1 className='font-[700] text-[64px] text-color5 leading-52 font-lato'>
            Terapias Holísticas
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center mx-20">
          <div className="flex flex-col items-center justify-between px-4">
            <div className="pb-16 flex items-center justify-center w-full flex-wrap 2md:flex-nowrap">
              <div className="flex flex-col max-w-[700px] min-w-[300px] max-h-[438px]">
                <h2 className="text-48 font-[700] font-lato leading-52 mb-5 text-start">
                  ¿Por qué elegir{" "}
                  <span className="text-color2 leading-52">
                    Terapias Holísticas
                  </span>
                  ?
                </h2>
                <p className="text-20 leading-24 font-lato font-[400] text-color7 mb-8 max-w-[700px] text-start">
                  Las terapias holísticas adoptan un enfoque integral que considera la conexión entre cuerpo, mente y espíritu, buscando equilibrar y fortalecer todos los aspectos de la persona. Con énfasis en la prevención y el bienestar general, estas terapias identifican causas subyacentes de los problemas de salud. Utilizando enfoques naturales, buscan minimizar efectos secundarios y promover la autorresponsabilidad en el autocuidado.
                </p>
              </div>
              <img src={th1} alt="HOUSE" className="h-[500px]" />
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center max-w-[1280px]">
              <h2 className="text-[54px] font-[700] font-lato leading-[60px] mb-36 mt-24 text-center">
                ¿Qué <span className="text-color2 leading-52">terapia</span> es
                para mí?
              </h2>
            </div>

            <div className="flex items-center justify-evenly mb-24 w-full gap-8 flex-wrap 2md:flex-nowrap 2md:gap-20">
              <div className="flex flex-col max-w-[600px] min-w-[300px]">
                <h2 className="text-48 font-[700] font-lato leading-52 text-start">
                  Terapia con{" "}
                  <span className="text-color2 leading-52">Terahercios</span>.
                </h2>
                <p className="text-20 leading-24 font-lato text-color7 my-8">
                  Terapia de frecuencia que utiliza tecnología de terahercios para influir positivamente en la salud y el bienestar de tu cuerpo.
                  Emite ondas que interactúan con las células y huesos.
                  Ayuda a restaurar y mantener el equilibrio bioenergético de tu organismo.
                </p>
                {beneficios.map((beneficio, index) => {
                  return (
                    <div key={index} className="flex mb-4 items-start">
                      <img src={beneficio.photo} alt="" />
                      <div className="flex flex-col ml-5">
                        <h3 className="text-20 font-lato font-[700] leading-28 text-color6">
                          {beneficio.title}
                        </h3>
                        <p className="text-20 font-lato font-[400] leading-28 text-color9">
                          {beneficio.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <img src={th2} alt="HOUSE" className="w-[522.7px] h-[595px] object-cover rounded-2xl" />
            </div>

            <div className="py-24 flex items-center justify-evenly w-full gap-8 flex-wrap-reverse 2md:flex-nowrap 2md:gap-20">
              <img
                src={th3}
                alt="HOUSE"
                className="w-[522.7px] h-[595px] object-cover rounded-2xl"
              />
              <div className="flex flex-col max-w-[600px] min-w-[300px]">
                <h2 className="text-48 font-[700] font-lato leading-52 text-start">
                  Aromaterapia.
                </h2>
                <p className="text-20 leading-24 font-lato text-color7 my-8">
                  Práctica terapéutica que utiliza aceites esenciales extraídos
                  de plantas para mejorar el bienestar físico, emocional y
                  mental. Estos aceites se inhalan o aplican sobre la piel. Sus
                  aromas y propiedades pueden influir en el estado de ánimo,
                  aliviar el estrés, mejorar el sueño y ofrecer beneficios para
                  la salud.
                </p>
                {beneficios2.map((beneficio, index) => {
                  return (
                    <div key={index} className="flex mb-4 items-start">
                      <img src={beneficio.photo} alt="" />
                      <div className="flex flex-col ml-5">
                        <h3 className="text-20 font-lato font-[700] leading-28 text-color6">
                          {beneficio.title}
                        </h3>
                        <p className="text-20 font-lato font-[400] leading-28 text-color9">
                          {beneficio.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="py-24 flex items-center justify-evenly w-full gap-8 flex-wrap 2md:flex-nowrap 2md:gap-20">
              <div className="flex flex-col max-w-[600px] min-w-[300px]">
                <h2 className="text-48 font-[700] font-lato leading-52 text-start">
                  Flores de <span className="text-color2 leading-52">Bach</span>
                  .
                </h2>
                <p className="text-20 font-lato leading-24 text-color7 my-8">
                  Terapia complementaria con 38 esencias florales. Las propiedades de las Flores de Bach ayudan a armonizar y corregir alteraciones mentales físicas y emocionales.
                </p>
                {beneficios3.map((beneficio, index) => {
                  return (
                    <div key={index} className="flex mb-4 items-start">
                      <img src={beneficio.photo} alt="" />
                      <div className="flex flex-col ml-5">
                        <h3 className="text-20 font-lato font-[700] leading-28 text-color6">
                          {beneficio.title}
                        </h3>
                        <p className="text-20 font-lato font-[400] leading-28 text-color9">
                          {beneficio.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <img src={th4} alt="HOUSE" className="w-[522.7px] h-[595px] object-cover rounded-2xl" />
            </div>

            <div className="py-24 flex items-center justify-evenly w-full gap-8 flex-wrap-reverse 2md:flex-nowrap 2md:gap-20">
              <img
                src={th5}
                alt="HOUSE"
                className="w-[522.7px] h-[595px] object-cover rounded-2xl flex-shrink-0"
              />
              <div className="flex flex-col max-w-[600px] min-w-[300px]">
                <h2 className="text-48 font-[700] font-lato leading-52 text-start">
                  Thetahealing.
                </h2>
                <p className="text-20 font-lato leading-24 text-color7 my-8">
                  Técnica de meditación que se enfoca en llegar al estado Theta,
                  para conectar con el subconsciente, donde se retienen memorias
                  y sentimientos. ThetaHealing se utiliza para abordar una
                  variedad de temas, como la mejora de la salud física y
                  emocional, la superación de bloqueos emocionales, la
                  manifestación de metas y el desarrollo personal y espiritual.
                </p>
                {beneficios4.map((beneficio, index) => {
                  return (
                    <div key={index} className="flex mb-4 items-start">
                      <img src={beneficio.photo} alt="" />
                      <div className="flex flex-col ml-5">
                        <h3 className="text-20 font-lato font-[700] leading-28 text-color6">
                          {beneficio.title}
                        </h3>
                        <p className="text-20 font-lato font-[400] leading-28 text-color9">
                          {beneficio.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="py-24 flex items-center justify-evenly w-full gap-8 flex-wrap 2md:flex-nowrap 2md:gap-20">
              <div className="flex flex-col max-w-[600px] min-w-[300px]">
                <h2 className="text-48 font-[700] font-lato leading-52 text-start">
                  Reiki.
                </h2>
                <p className="text-20 font-lato leading-24 text-color7 my-8">
                  El Reiki es una terapia energética originaria de Japón que se
                  centra en canalizar la energía vital universal a través de la
                  imposición de manos para equilibrar y armonizar la energía en
                  los centros de chakras del cuerpo. La práctica busca promover
                  la relajación profunda y facilitar la curación física y
                  emocional.
                </p>
                {beneficios5.map((beneficio, index) => {
                  return (
                    <div key={index} className="flex mb-4 items-start">
                      <img src={beneficio.photo} alt="" />
                      <div className="flex flex-col ml-5">
                        <h3 className="text-20 font-lato font-[700] leading-28 text-color6">
                          {beneficio.title}
                        </h3>
                        <p className="text-20 font-lato font-[400] leading-28 text-color9">
                          {beneficio.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <img src={th6} alt="HOUSE" className="w-[522.7px] h-[595px] object-cover rounded-2xl flex-shrink-0" />
            </div>

            <div className="py-24 flex items-center justify-evenly w-full gap-8 flex-wrap-reverse 2md:flex-nowrap 2md:gap-20">
              <img
                src={th7}
                alt="HOUSE"
                className="w-[522.7px] h-[595px] object-cover rounded-2xl"
              />
              <div className="flex flex-col max-w-[600px] min-w-[300px]">
                <h2 className="text-48 font-[700] font-lato leading-52 text-start">
                  Numerología.
                </h2>
                <p className="text-20 font-lato leading-24 text-color7 my-8">
                  La numerología es un sistema metafísico que estudia la
                  relación entre los números y diversos aspectos de la vida. Se
                  basa en la creencia de que los números tienen significados
                  simbólicos y energéticos que pueden influir en la
                  personalidad, el comportamiento y el destino de una persona.
                </p>
                {beneficios6.map((beneficio, index) => {
                  return (
                    <div key={index} className="flex mb-4 items-start">
                      <img src={beneficio.photo} alt="" />
                      <div className="flex flex-col ml-5">
                        <h3 className="text-20 font-lato font-[700] leading-28 text-color6">
                          {beneficio.title}
                        </h3>
                        <p className="text-20 font-lato font-[400] leading-28 text-color9">
                          {beneficio.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center pb-16 mt-28 border-b border-gray">
            <h2 className="text-48 font-[700] font-lato  leading-40 max-w-[320px] mb-24 text-center">
              Tu terapeuta.
            </h2>
            <div className="flex justify-center items-center flex-wrap gap-20">
              <img src={t1} alt="" className="w-[600px] h-[700px] border-b-stone-600 rounded-2xl object-cover object-top" />
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

          <div className="w-full px-4 py-8 pt-20 mb-12 flex flex-col items-center justify-center pb-12">
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
        </div>
        <FooterDesktop />
      </div>
    </>
  );
}

export default SthDesktop;
