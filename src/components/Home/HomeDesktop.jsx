import house from "../../assets/home-1.svg";
import service1 from "../../assets/home/TMS.jpg";
import services from "../../assets/home/Nuestros servicios.jpeg";
import { FaArrowRight } from "react-icons/fa6";

import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/home/banner-home.jpg";
import FooterDesktop from "../Footer/FooterDesktop";
import { useState } from "react";
import { GoDash, GoPlus } from "react-icons/go";

function HomeDesktop({ features, experts, testimonials, settings }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
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
        style={{ ...style, display: "block" }}
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
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <FaArrowRight size={24} style={{ transform: "rotate(180deg)" }} />
      </div>
    );
  }

  const preguntas = [
    {
      title: "Psicoterapia individual y de parejas",
      description: [
        "La psicoterapia nos brinda la oportunidad de conocernos a nosotros mismos, entendiendo por qué tenemos conflictos que nos llevan a sentirnos deprimidos o ansiosos, cómo enfrentarlos y resolverlos mediante estrategias para su gestión y superarlos mejorando nuestras relaciones personales y de pareja.",
        <p
          className="flex items-end justify-start cursor-pointer gap-2 text-color2 font-[700] leading-20 font-lato w-32 h-5 mt-6"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navigate("/servicios/pip");
          }}
        >
          Conoce más
          <FaArrowRight />
        </p>,
      ],
    },
    {
      title: "Estimulación Magnética Transcraneal",
      description: [
        "Técnica de Neuromodulación no invasiva que busca mejorar la conexión dentro de los circuitos neuronales mediante la estimulación de las neuronas en áreas específicas del cerebro, cuyo objetivo es normalizar o modificar la función del Sistema Nervioso para regresar al equilibrio y la salud.",
        <p
          className="flex items-end justify-start cursor-pointer gap-2 text-color2 font-[700] leading-20 font-lato w-32 h-5 mt-6"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navigate("/servicios/emt");
          }}
        >
          Conoce más
          <FaArrowRight />
        </p>,
      ],
    },
    {
      title: "Asesoría Nutricional y Educación en Diabetes",
      description: [
        "Asesoría personalizada para ayudar a adquirir hábitos de alimentación saludable, que mejoren o recuperen la salud y prevengan enfermedades contribuyendo a mejorar la calidad de vida.",
        <p
          className="flex items-end justify-start cursor-pointer gap-2 text-color2 font-[700] leading-20 font-lato w-32 h-5 mt-6"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navigate("/servicios/an");
          }}
        >
          Conoce más
          <FaArrowRight />
        </p>,
      ],
    },
    // {
    //   title: "Medicina Genómica",
    //   description: [
    //     "Las terapias holísticas ven a la persona en su totalidad (físico, mente y espíritu), ayudando a desarrollar una mejor conexión consigo mismas y a desempeñarse de una manera más armónica con los demás, disminuyendo síntomas de ansiedad, depresión y demás problemas de salud emocional y mental.",
    //     <p
    //       className="flex items-end justify-start cursor-pointer gap-2 text-color2 font-[700] leading-20 font-lato w-32 h-5 mt-6"
    //       onClick={() => navigate("/nosotros")}
    //     >
    //       Conoce más
    //       <FaArrowRight />
    //     </p>,
    //   ],
    // },
    {
      title: "Terapias Holísticas",
      description: [
        "Las terapias holísticas ven a la persona en su totalidad (físico, mente y espíritu), ayudando a desarrollar una mejor conexión consigo mismas y a desempeñarse de una manera más armónica con los demás, disminuyendo síntomas de ansiedad, depresión y demás problemas de salud emocional y mental.",
        <p
          className="flex items-end justify-start cursor-pointer gap-2 text-color2 font-[700] leading-20 font-lato w-32 h-5 mt-6"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navigate("/servicios/th");
          }}
        >
          Conoce más
          <FaArrowRight />
        </p>,
      ],
    },
  ];

  return (
    <>
    <div className="flex flex-col items-center justify-center w-full">
      <div
        className="w-full flex flex-col items-center justify-center h-[480px] gap-8 text-center mb-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-[700] text-[64px] text-color5 leading-[70px] font-lato max-w-[780px]">
          Tu espacio de{" "}
          <span className="text-color1 leading-52">salud mental</span> y{" "}
          <span className="text-color1 leading-52">bienestar emocional</span>.
        </h1>
        <h2 className="font-[400] text-[22px] text-color5 leading-32 font-lato">
          En Psicomed te apoyamos y acompañamos en tu camino hacia una vida
          plena.
        </h2>
      </div>

      <div className="px-20">
        <div className="flex flex-col items-center justify-between">
          <div className="border-b border-gray-300 flex items-center justify-between flex-wrap w-full">
            <div className="flex flex-col gap-5">
              <h2 className="text-48 font-[700] font-lato leading-52 max-w-[550px] mb-5 gap-20">
                En <span className="text-color2 leading-52">Psicomed</span>,
                queremos que te sientas{" "}
                <span className="text-color2">en casa</span>.
              </h2>
              <p className="text-20 font-lato leading-32 text-color7 mb-8 max-w-[550px]">
                En nuestro espacio, la confianza y la comodidad son
                <span className="font-bold"> fundamentales</span>. Aquí, te
                recibimos con los brazos abiertos, comprometidos no solo a
                ofrecer servicios de bienestar de calidad, sino a construir un
                refugio donde encuentres seguridad, comprensión y apoyo.
              </p>
            </div>
            <img
              src={house}
              alt="HOUSE"
              className="w-full max-w-[500px] border-b-stone-600"
            />
          </div>

          <div className="pt-20 border-b border-gray-300 flex w-full items-center justify-between pb-12 flex-wrap">
            <img
              src={service1}
              alt="HOUSE"
              className="w-full max-w-[600px] border-b-stone-600 mb-5 rounded-xl"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-48 font-[700] font-lato leading-52 max-w-[550px] mb-5">
                Estimulación Magnética{" "}
                <span className="text-color2 leading-52">Transcraneal</span>.
              </h2>
              <p className="text-20 font-lato leading-32 text-color7 mb-8 max-w-[550px]">
                En nuestro espacio, la confianza y la comodidad son
                fundamentales. Aquí, te recibimos con los brazos abiertos,
                comprometidos no solo a ofrecer servicios de bienestar de
                calidad, sino a construir un refugio donde encuentres seguridad,
                comprensión y apoyo.
              </p>
              <p
                className="flex items-center justify-start cursor-pointer gap-2 text-color2 font-[700] leading-20 font-lato pb-12 h-5"
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
          </div>

          <div className="mt-20 w-full">
            <h2 className="text-48 font-[700] font-lato leading-52 mb-20 text-center">
              Nuestros <span className="text-color2 leading-40">servicios</span>
              .
            </h2>
            <div className="flex items-center justify-between w-full h-[645px]">
              <div className="w-[630px]">
                <ul className="space-y-4">
                  {preguntas.map((pregunta, index) => (
                    <div
                      key={index}
                      className="block py-6 px-4 border border-color8 rounded-md h-full max-w-[600px]"
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
                            <div key={idx} className="">
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
                </ul>
              </div>
              <div className="w-[630px] h-[630px] overflow-hidden rounded-xl">
                <img
                  src={services}
                  alt="SERVICES"
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "none" }}
                />
              </div>
            </div>
            <div className="my-12 pt-12 border-b border-gray-300 flex items-top justify-center flex-wrap"></div>
          </div>

          <div className="mt-12 pb-12 border-b border-gray-300 flex w-full items-top justify-between flex-wrap">
            <div className="flex flex-col mr-20">
              <h2 className="text-48 font-[700] font-lato leading-52 mb-8 max-w-[400px]">
                ¿Por qué elegir a{" "}
                <span className="text-color2 leading-40">Psicomed</span>?
              </h2>
              <p className="text-[18px] font-lato leading-24 text-color7 mb-12 max-w-[384px]">
                Elegir el apoyo adecuado es esencial en el camino hacia el
                bienestar. En Psicomed, estamos comprometidos a ser ese aliado
                confiable y experto que buscas.
              </p>
            </div>
            {features.map((feature, index) => (
              <li
                key={index}
                className="bg-white rounded-lg flex flex-col items-start justify-between gap-2 max-w-[272px] mr-4"
              >
                <p className="text-color2 cursor-pointer">{feature.icon}</p>
                <h3 className="font-[700] font-lato text-20 leading-20 text-color6 mb-2 pt-4">
                  {feature.title}
                </h3>
                <p className="font-lato text-16 leading-20 text-color7 mb-4 max-w-[240px] cursor-pointer">
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
          </div>

          <div className="mt-12 mb-16">
            <h2 className="text-48 font-[700] font-lato text-color6 mb-12 text-center">
              Nuestros <span className="text-color2 leading-40">expertos</span>.
            </h2>
            <div className="flex items-top justify-center gap-24">
              {experts.map((expert, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg ${index === 0 && "mb-12"}`}
                >
                  <img
                    src={expert.img}
                    alt={expert.name}
                    className="w-[400px] h-[500px] border-b-stone-600 rounded-xl object-cover object-top"
                  />
                  <h3 className="w-[400px] font-[700] font-lato text-24 leading-20 text-color6 text-center my-4">
                    {expert.name}
                  </h3>
                  <p className="w-[400px] font-lato text-[18px] leading-20 text-[#697077] text-center mt-1">
                    {expert.title}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="flex items-center justify-center cursor-pointer gap-2 text-color2 font-[700] leading-20 font-lato"
              onClick={() => navigate("/nosotros")}
            >
              Conoce al equipo
              <FaArrowRight />
            </p>
          </div>
        </div>
        <div className="py-16 w-full flex flex-col items-center justify-center">
          <h2 className="text-48 font-[700] font-lato text-color6 mb-12 text-center">
            Lo que dicen nuestros{" "}
            <span className="text-color2">pacientes.</span>
          </h2>
          <div className="w-full h-auto overflow-hidden text-center">
            <Slider {...settings2}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 rounded-lg text-center mx-auto max-w-[800px]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-[700] font-lato text-[26px] leading-tight text-color6 mb-4">
                    {testimonial.name}
                  </h3>
                  <p className="font-[400] font-lato text-20 leading-relaxed text-color6 max-w-[800px]">
                    {testimonial.feedback}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <FooterDesktop />
    </div>
    </>
  );
}

export default HomeDesktop;
