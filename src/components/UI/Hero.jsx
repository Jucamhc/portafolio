import React from 'react'
import ImgFirt from '../../assets/data/images/JCH.png'
import CountUp from 'react-countup';
//import countUp from 'react-countup'

export const Hero = () => {
    return (
        <section id='about'>
            <div className='container pt-10'>
                <div className='md:flex  justify-between sm:flex-col md:flex-row'>
                    {/* ====================== hero left content ==================== */}
                    <div className='w-full md:basis-1/2'>
                        <h4
                            data-aos="fade-right"
                            data-aos-duration='1500'
                            className='text-headingColor font-[600] text-[16px]'>
                            ! Hello Welcome, Hola Bienvenido ¡
                        </h4>

                        <h1
                            data-aos="fade-up" data-aos-duration="1500"
                            className='text-headingColor font-[800] 
                            text-[1.8rem] sm:text-[40px] leading-[35px]
                             sm:leading-[46px] mt-5 '>
                            Descubre mis proyectos y <br />
                            habilidades en desarrollo web!
                            <i class="fas fa-laptop-code"></i>
                        </h1>

                        <p data-aos="fade-right"
                            data-aos-duration='1500'
                            className='flex gap-3 mt-10 text-headingColor font-[600] text-[16px] leading-6 
                            sm:pl-6 sm:pr-10'>
                            ¡Hola! Soy un ingeniero de software en formación y desarrollador Full Stack.
                            He trabajado en varios proyectos y empleos, si te interesa saber más, sigue
                            explorando mi perfil. ¡Gracias por visitar!
                        </p>

                        <div className='flex justify-center mt-10'>
                            <div
                             data-aos="zoom-in-right"
                             data-aos-duration='1500'
                            className='basis-1/2 mt-2'>
                                <span>
                                    <a href="https://www.linkedin.com/in/juan-camilo-hoyos-casta%C3%B1o/" target="_blank" className='text-5xl text-blue-700 cursor-pointer '>
                                        <i class="ri-linkedin-box-fill"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://github.com/Kamilo2251" target="_blank" className='text-5xl cursor-pointer '>
                                        <i class="ri-github-fill"></i>
                                    </a>
                                </span>
                            </div>
                            <div 
                             data-aos="fade-down-right"
                             data-aos-duration='1500'
                            className=' basis-2/2 leading-8 flex-none '>
                                <h2 className='text-[40px] text-smallTextColor font-[600] text-start'>Juan Camilo Hoyos C.</h2>
                                <p className='text-smallTextColor text-[30px] font-[400] text-right'>Developer Full Stack 💻🚀</p>
                            </div>
                        </div>


                        {/*                         <div className='flex items-start gap-1 mt-4'>
                              <span className='text-smallTextColor text-[15px] font-[600] '>Sigueme en :</span> 
                            <span>
                                <a href="#link" className='text-4xl text-blue-700 cursor-pointer '>
                                    <i class="ri-linkedin-box-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href="#link" className='text-4xl cursor-pointer '>
                                    <i class="ri-github-fill"></i>
                                </a>
                            </span>
                        </div> */}
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

                    {/* 
                    <div className=' md:basis-10 flex justify-between text-center mt-10 flex-wrap gap-1 md:mt-0 md:flex-col md:justify-end md:text-end'>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[30px]'> <CountUp start={0} end={6} duration={2} suffix="+" /></h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'> Años de experiiencia </h4>
                        </div> 
                    </div> */}

                </div>
            </div>
        </section>
    )
}

export default Hero