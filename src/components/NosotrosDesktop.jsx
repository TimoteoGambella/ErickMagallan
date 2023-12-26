import { useNavigate } from 'react-router-dom';
import banner from "../assets/banner-nosotros.svg";

import ins1 from "../assets/ins-1.svg"
import ins2 from "../assets/ins-2.svg"
import ins3 from "../assets/ins-3.svg"
import FooterDesktop from "./FooterDesktop";

function NosotrosDesktop ({features, experts}) {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-center'>
            
            <div className='w-full flex flex-col items-center justify-center h-[736px] gap-8 text-center mb-20' style={{
                backgroundImage: `url(${banner})`,
                backgroundPosition: "center",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
            }}>
                <h1 className='font-[700] text-[64px] text-color5 leading-[70px] font-lato'>
                    En Psicomed todos somos familia.
                </h1>
                <h2 className='font-[400] text-[22px] text-color5 leading-32 font-lato max-w-[765px]'>
                    Conoce nuestro equipo de terapeutas y nuestras instalaciones, queremos que te sientas en casa.
                </h2>
            </div>

            <div className='flex flex-col items-center justify-center px-4'>
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
                            <p className="font-lato font-normal text-16 leading-20 text-color7 mb-4 max-w-[240px] mr-4">
                                {feature.description}
                            </p>
                        </li>
                    ))}
                </div>

                <div className='mt-12 mb-20 border-b border-gray-300 pb-40'>
                    <h2 className="text-48 font-[700] font-roboto text-color6 mb-12 text-center">Conoce al <span className="text-color2 leading-40">equipo</span>.</h2>
                    <div className='flex flex-col items-top justify-center gap-24'>
                        {experts.map((expert, index) => (
                            <div key={index} className={`bg-white rounded-lg ${index === 0 && "mb-12"} flex gap-20 flex-wrap lg:flex-nowrap items-center justify-center`}>
                                {index===0 &&
                                    <img src={expert.img} alt={expert.name} className=' h-auto rounded-lg mb-4 w-full max-w-[418px]' />
                                }
                                <div className="flex flex-col w-full max-w-[600px]">
                                    <h3 className="font-[700] font-lato text-48 leading-52 text-color6 mb-4" style={{letterSpacing:"1px"}}>{expert.name}</h3>
                                    <p className="font-lato font-[700] text-[18px] leading-28 text-[#697077] mb-6">{expert.title}</p>
                                    <p className="font-lato font-[400] text-20 leading-28 text-[#697077] mb-12">
                                        Lorem ipsum dolor sit amet consectetur. Pretium tellus leo elit et et amet. Tristique volutpat vel aenean lectus a dapibus euismod turpis amet.
                                        Tellus commodo sit quis feugiat dui et pellentesque quis. Gravida velit nunc mi aliquam. Nullam leo sit faucibus tincidunt velit. Tellus in porta ornare faucibus tempus vel amet sed faucibus.
                                    </p>
                                    <div className="flex items-center justify-between flex-wrap gap-x-2 gap-y-8 w-full">
                                        {expert.uni.map((uni,i)=>{
                                            return(
                                                <img src={uni} alt="ESTUDIO" className="w-[156px] h-[50px]"/>
                                            )
                                        })}
                                    </div>
                                </div>
                                {index!==0 &&
                                    <img src={expert.img} alt={expert.name} className=' h-auto rounded-lg mb-4 w-full max-w-[418px]' />
                                }
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className='flex flex-col items-center justify-center px-4 border-b border-gray-300 pb-16'>
                <h2 className="text-48 font-[700] font-roboto  leading-36 mb-12">
                    Conoce nuestras <span className="text-color2">instalaciones</span>.
                </h2>
                <img src={ins1} alt="" className="w-[1280px] h-[580px]"/>
                <div className="pb-6 flex flex-wrap items-center justify-center mt-16 gap-12">
                    <img src={ins2} alt="" className="w-[616px] h-[580px]"/>
                    <img src={ins3} alt="" className="w-[616px] h-[580px]"/>
                </div>
            </div>

            <FooterDesktop />
        </div>
    )
}

export default NosotrosDesktop