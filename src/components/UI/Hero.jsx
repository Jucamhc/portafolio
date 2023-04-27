import React from 'react';
import ImgFirt from '../../assets/data/images/JCH.png';

export const Hero = () => {
    return (
        <section id='about'>
            <div className='container pt-5'>
                <div className='md:flex justify-between sm:flex-col md:flex-row'>
                    {/* ====================== hero left content ==================== */}
                    <div className='w-full md:w-1/2'>
                        <h4 data-aos='fade-right' data-aos-duration='1500' className=' text-headingColor font-medium  sm:text-base '>
                            ! Hello Welcome, Hola Bienvenido ¡
                        </h4>

                        <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-extrabold text-2xl sm:text4xl md:text-3xl leading-tight sm:leading-snug mt-5'>
                            Descubre mis proyectos y habilidades en desarrollo web!
                            <i className='fas fa-laptop-code'></i>
                        </h1>
                        <p data-aos='fade-right' data-aos-duration='1500' className='mt-10 text-headingColor font-medium text-sm sm:text-base leading-6 sm:pl-6 sm:pr-10' >
                            ¡Hola! Soy un ingeniero de software en formación y desarrollador Full Stack.
                            He trabajado en varios proyectos y empleos, si te interesa saber más, sigue
                            explorando mi perfil. ¡Gracias por visitar!
                        </p>

                        <div className='flex justify-start mt-10 '>
                            <div data-aos='zoom-in-right' data-aos-duration='1500' className='w-1/2 sm:w-auto mt-2' >
                                <span>
                                    <a href='https://www.linkedin.com/in/juan-camilo-hoyos-casta%C3%B1o/' target='_blank' rel="noreferrer" className='text-5xl text-blue-700 cursor-pointer'>
                                        <i className='ri-linkedin-box-fill'></i>
                                    </a>
                                </span>
                                <span>
                                    <a href='https://github.com/Jucamhc' target='_blank' rel="noreferrer" className='text-5xl cursor-pointer'>
                                        <i className='ri-github-fill'></i>
                                    </a>
                                </span>
                            </div>
                            <div
                                data-aos="fade-down-right"
                                data-aos-duration='1500'
                                className=' basis-2/2 leading-8 flex-none '>
                                <h2 className='text-[40px] text-smallTextColor font-[600] text-start'>Juan Camilo Hoyos C.</h2>
                                <p className='text-smallTextColor text-[25px] font-[400] text-right font-mono'>Developer Full Stack 💻🚀</p>
                            </div>
                        </div>


                    </div>
                    {/* ====================== hero left end ==================== */}

                    {/* ====================== hero right img ==================== */}

                    <div className=' basis-2/2 mt-0 sm:ml-10'>
                        <figure
                            data-aos="fade-left"
                            data-aos-duration='1500'
                            className='flex items-center justify-center '>
                            <img src={ImgFirt} alt="" />
                        </figure>

                    </div>


                    {/* ====================== hero right img end ==================== */}

                </div>

                <div className="flex flex-wrap items-center gap-2 mt-5  justify-c mb-0">
                    {/* <h4 className="text-gray-800 text-base font-bold mr-2">Tecnologias:</h4> */}
                    <span className="hover:text-white hover:bg-[#f16428]  border border-black py-1 px-2 rounded-lg text-sm font-mono leading-3">
                        Laravel
                    </span>
                    <span className="hover:text-white hover:bg-[#8892b0] border border-black py-1 px-2 rounded-lg text-sm font-mono leading-3">
                        PHP
                    </span>
                    <span className="hover:text-gray-900 hover:bg-[#f0db4f]  border border-black py-1 px-2 rounded-lg text-sm font-mono leading-3">
                        Javascript
                    </span>
                    <span className="hover:text-white hover:bg-[#2e7d32]  border border-black py-1 px-2 rounded-lg text-sm font-mono leading-3">
                        Node.js
                    </span>
                    <span className="hover:text-white hover:bg-[#424242]  border border-black py-1 px-2 rounded-lg text-sm font-mono leading-3">
                        Express.js
                    </span>
                    <span className="hover:text-white hover:bg-[#039be5]  border border-black py-1 px-2 rounded-lg text-sm font-mono leading-3">
                        React
                    </span>
                    <span className="hover:text-white hover:bg-[#06b6d4]  border border-black py-1 px-2 rounded-lg text-sm font-mono leading-3">
                        Tailwind CSS
                    </span>
                    <span className="hover:text-white hover:bg-[#673ab7] border border-black py-1 px-2 rounded-lg text-sm font-mono leading-3">
                        Bootstrap
                    </span>
                    <span className="hover:text-gray-900 hover:bg-[#f8e9a1] border border-black py-1 px-2 rounded-lg text-sm font-mono leading-3">
                        HTML & CSS
                    </span>
                    <span className="hover:text-white hover:bg-[#a1887f] border border-black py-1 px-2 rounded-lg text-sm font-mono leading-3">
                        SQL & NoSQL
                    </span>

                </div>
            </div>
        </section>
    )
}

export default Hero