import React from 'react'
import klaxen from '../../assets/data/images/klaxen.png'
import coordiicon from '../../assets/data/images/coordinadora.png'
import freelancer from '../../assets/data/images/Frelancer.png'
import movistar from '../../assets/data/images/movistar.png'
import seam from '../../assets/data/images/seam.png'
import poli from '../../assets/data/images/poli.png'
import platzi from '../../assets/data/images/platzi.jpg'
import camacho from '../../assets/data/images/camacho.jpg'
import sena from '../../assets/data/images/sena.png'
import cisco from '../../assets/data/images/ciscopng.png'


export const Experiencia = () => {
    return (
        <section  >
            <div className='lg:max-w-[1000px] justify-center lg:mx-auto'>

                <h2 id='services' className='text-center font-[800] text-[2.4rem] mt-10'>
                    <p  data-aos="fade-down" data-aos-duration='1500'>
                        <a className='text-orange-500' >Historial de </a>
                        <a className='text-green-800' >experiencia</a>
                    </p>
                    <p data-aos="zoom-in-down" data-aos-duration='1500' className=' text-headingColor font-[500] text-[18px] leading-0'>
                        <a >Explora mi perfil para conocer mi experiencia laboral y educativa en </a>
                        <a >el campo de la tecnología. Descubre cómo he aplicado habilidades en </a>
                        <a >desarrollo web para resolver desafíos técnicos y</a>
                        <a > contribuir en diversos proyectos. ¡Gracias por visitar!</a>
                    </p>
                </h2>

                <div className='md:flex  '>

                    {/* Bloque left */}
                    <div data-aos="fade-right" data-aos-duration='1500' className=' basis-1/2 '>
                        <div className='container lg:pt-1 w-[500px]'>

                            <div className='text-center'>
                                <h2 className='text-orange-500 font-[800] text-[1.8rem] mb-1'>
                                    Laboral
                                </h2>
                            </div>


                            <div className='flex flex-col justify-center sm:py-1'>
                                <div className='w-full py-1 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                                    <div className='relative text-gray-700 text-sm font-semibold'>

                                        {/* ============== Vertical line running through the middle */}
                                        <div className='hidden absolute w-1 sm:block  h-full bg-orange-500 left-1/2 transform -translate-x-1/2'></div>

                                        {/* ==================== Right card ====================== */}

                                        <div className='mt-6 sm:mt-1 sm:mb-1'>
                                            <div className='flex items-center flex-col sm:flex-row'>

                                                <div className='flex justify-end w-full mx-auto items-center'>
                                                    <div className='w-full sm:w-1/2 sm:pl-8 ' >
                                                        <div  data-aos="fade-left"
                                                        data-aos-deloy='50'
                                                        data-aos-duration="1300" 
                                                            className='bg-orange-50 p-3 rounded
                                             shadow group hover:bg-orange-400 
                                              cursor-pointer ease-in duration-150 '>

                                                            <h3 className='text-orange-600 font-[700] group-hover:text-white group-hover:font-[600] leading-[15px] text-[15px]'>
                                                                Developer Full Stack
                                                            </h3>

                                                            <p className='text-[14px] group-hover:text-white group-hover:font-[500] leading-[15px] mt-2'>
                                                                Freelance <br />
                                                                mar 2023-Actualmente <br/>
                                                        
                                                            </p>

                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='hover:cursor-pointer rounded-full border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 
                                    -translate-y-4 sm:translate-y-0 flex items-center justify-center' title='Linkedin'>
                                                    <a href='https://www.linkedin.com/in/juan-camilo-hoyos-casta%C3%B1o/' target="_blank">
                                                        <img src={freelancer} alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ==================== left card ====================== */}
                                        <div className='mt-6 sm:mt-1 sm:mb-1'>
                                            <div className='flex items-center text-end flex-col sm:flex-row'>
                                                <div className='flex justify-start w-full mx-auto items-center'>
                                                    <div className='w-full sm:w-1/2 sm:pr-8'>

                                                        <div  data-aos="fade-right" 
                                                    data-aos-duration="1200"  
                                                            className='bg-orange-50  p-3 rounded
                                                     shadow group hover:bg-orange-400  cursor-pointer ease-in duration-150'>
                                                            <h3 className='text-orange-600 font-[700]  group-hover:text-white group-hover:font-[600] leading-[15px] text-[15px]'>
                                                                Analista de soporte TI
                                                            </h3>

                                                            <p className='text-[14px] group-hover:text-white group-hover:font-[500] leading-[15px] mt-2'>
                                                                Klaxen S.A.S <br />
                                                                Ago 2022 mar 2023 <br />
                                                                8 meses
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='hover:cursor-pointer rounded-full border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 
                                    -translate-y-4 sm:translate-y-0 flex items-center justify-center' title='Klaxen'>
                                                    <a href="https://klaxen.com/" target="_blank">

                                                        <img src={klaxen} alt="" />
                                                    </a>

                                                </div>
                                            </div>


                                        </div>

                                        {/* ==================== Right card ====================== */}

                                        <div className='mt-6 sm:mt-1 sm:mb-1'>
                                            <div className='flex items-center flex-col sm:flex-row'>
                                                <div className='flex justify-end  w-full mx-auto items-center'>
                                                    <div className='w-full sm:w-1/2 sm:pl-8'>

                                                        <div  data-aos="fade-left"
                                                        data-aos-deloy='50'
                                                        data-aos-duration="1300" 
                                                            className='bg-orange-50  p-3 rounded
                                             shadow group hover:bg-orange-400
                                              cursor-pointer ease-in duration-150'>
                                                            <h3 className='text-orange-600 font-[700] group-hover:text-white group-hover:font-[600] leading-[15px] text-[15px]'>
                                                                Auxiliar Hardware
                                                            </h3>
                                                            <p className='text-[14px] group-hover:text-white group-hover:font-[500] leading-[15px] mt-2'>
                                                                Coordinadora Mer. S.A<br />
                                                                Dic 2017 Ago 2022 <br />
                                                                4 años 9 meses
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='hover:cursor-pointer rounded-full border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 
                                    -translate-y-4 sm:translate-y-0 flex items-center justify-center' title='Coordinadora'>
                                                    <a href="https://www.coordinadora.com/" target="_blank">
                                                        <img src={coordiicon} alt="" />
                                                    </a>

                                                </div>
                                            </div>

                                        </div>

                                        {/* ==================== left card ====================== */}
                                        <div className='mt-6 sm:mt-1 sm:mb-1'>
                                            <div className='flex items-center text-end flex-col sm:flex-row'>
                                                <div className='flex justify-start w-full mx-auto items-center'>
                                                    <div className='w-full sm:w-1/2 sm:pr-8'>

                                                        <div data-aos="fade-right" 
                                                    data-aos-duration="1200"  
                                                            className='bg-orange-50  p-3 rounded
                                             shadow group hover:bg-orange-400 cursor-pointer ease-in duration-150'>
                                                            <h3 className='text-orange-600 font-[700]  group-hover:text-white group-hover:font-[600] leading-[15px] text-[15px]'>
                                                                Aux. Insta. de Redes
                                                            </h3>

                                                            <p className='text-[14px] group-hover:text-white group-hover:font-[500] leading-[15px] mt-2'>
                                                                Emcomunitel S.A.S <br />
                                                                Jul 2016 - Dic 2017 <br />
                                                                18 meses
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='hover:cursor-pointer rounded-full border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 
                                    -translate-y-4 sm:translate-y-0 flex items-center justify-center' title='Emcomunitel'>
                                                    <a href="https://emcomunitel.com/" target="_blank">

                                                        <img src={movistar} alt="" />
                                                    </a>

                                                </div>
                                            </div>


                                        </div>

                                        {/* ==================== Right card ====================== */}

                                        <div className='mt-10 sm:mt-1 sm:mb-1'>
                                            <div className='flex items-center flex-col sm:flex-row'>
                                                <div className='flex justify-end w-full mx-auto items-center'>
                                                    <div className='w-full sm:w-1/2 sm:pl-8 '>
                                                        <div data-aos="fade-left"
                                                        data-aos-deloy='50'
                                                        data-aos-duration="1300" 
                                                            className='bg-orange-50  p-3 rounded 
                                            shadow group hover:bg-orange-400
                                            cursor-pointer ease-in duration-150 '>
                                                            <h3 className='text-orange-600 font-[700] group-hover:text-white group-hover:font-[600] leading-[15px] text-[15px]'>
                                                                Soporte Sistemas
                                                            </h3>
                                                            <p className='text-[14px] group-hover:text-white group-hover:font-[500] leading-[15px] mt-2'>
                                                                Seam Ingenieria <br /> Nov 2015 - May 2016 <br /> 6 meses
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='hover:cursor-pointer rounded-full border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 
                                    -translate-y-4 sm:translate-y-0 flex items-center justify-center' title='Seam Ingenieria'>
                                                    <a href="https://seamingenieria.com/" target="_blank">
                                                        <img src={seam} alt="" />
                                                    </a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bloque right */}
                    <div data-aos="fade-left" data-aos-duration='1500' className=' basis-2/2  '>
                        <div className='container lg:pt-1 w-[500px]'>

                            <div className='text-center'>
                                <h2 className='text-green-700  font-[800] text-[1.8rem] mb-1'>
                                    Educativa
                                </h2>
                            </div>

                            <div className='flex flex-col  justify-center sm:py-1'>
                                <div className='w-full py-1 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>

                                        {/* ============== Vertical line running through the middle */}
                                        <div className='hidden absolute w-1 sm:block bg-green-800 h-full left-1/2 transform -translate-x-1/2'></div>

                                        {/* ==================== Right card ====================== */}

                                        <div className='mt-6 sm:mt-1 sm:mb-0'>
                                            <div className='flex items-center flex-col sm:flex-row'>
                                                <div className='flex justify-end  w-full mx-auto items-center'>
                                                    <div className='w-full sm:w-1/2 sm:pl-8 ' >
                                                        <div  data-aos="fade-left"
                                                        data-aos-deloy='50'
                                                        data-aos-duration="1300" 
                                                            className='bg-green-50 p-3 rounded
                                             shadow group hover:bg-green-500
                                              cursor-pointer ease-in duration-150 '>

                                                            <h3 className='text-green-700 font-[700] group-hover:text-white group-hover:font-[600] leading-[15px] text-[15px]'>
                                                                Ing. en Software
                                                            </h3>

                                                            <p className='text-[14px] group-hover:text-white group-hover:font-[500] leading-[15px] mt-2'>
                                                                Universidad Politecnico grancolombiano
                                                            </p>

                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='hover:cursor-pointer rounded-full border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 
                                    -translate-y-4 sm:translate-y-0 flex items-center justify-center' title='Universidad Politecnico grancolombiano'>
                                                    <a href='https://www.poli.edu.co/' target="_blank">
                                                        <img src={poli} alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ==================== left card ====================== */}
                                        <div className='mt-6 sm:mt-1 sm:mb-1'>
                                            <div className='flex items-center text-end flex-col sm:flex-row'>
                                                <div className='flex justify-start w-full mx-auto items-center'>
                                                    <div className='w-full sm:w-1/2 sm:pr-8'>

                                                        <div  data-aos="fade-right" 
                                                    data-aos-duration="1200" 
                                                            className='bg-green-50 p-3 rounded
                                             shadow group hover:bg-green-500 cursor-pointer ease-in duration-150'>
                                                            <h3 className='text-green-700 font-[700]  group-hover:text-white group-hover:font-[600] leading-[15px] text-[15px] '>
                                                                Desarrollador Full Stack
                                                            </h3>

                                                            <p className='text-[14px] group-hover:text-white group-hover:font-[500] leading-[15px] mt-2'>
                                                                Platzi
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='hover:cursor-pointer rounded-full border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 
                                    -translate-y-4 sm:translate-y-0 flex items-center justify-center' title='Platzi'>
                                                    <a href="https://platzi.com/p/camilo2251/" target="_blank">

                                                        <img src={platzi} alt="" />
                                                    </a>

                                                </div>
                                            </div>


                                        </div>

                                        {/* ==================== Right card ====================== */}

                                        <div className='mt-6 sm:mt-1 sm:mb-1'>
                                            <div className='flex items-center flex-col sm:flex-row'>
                                                <div className='flex justify-end  w-full mx-auto items-center'>
                                                    <div className='w-full sm:w-1/2 sm:pl-8'>

                                                        <div  data-aos="fade-left"
                                                        data-aos-deloy='50'
                                                        data-aos-duration="1300" 
                                                            className='bg-green-50 p-3 rounded
                                             shadow group hover:bg-green-500 cursor-pointer ease-in duration-150'>
                                                            <h3 className='text-green-700 font-[700] group-hover:text-white group-hover:font-[600] leading-[15px] text-[15px]'>
                                                                Tecnol. en Sistemas
                                                            </h3>
                                                            <p className='text-[14px] group-hover:text-white group-hover:font-[500] leading-[15px] mt-2'>
                                                                Universidad Antonio Jose Camacho
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='hover:cursor-pointer rounded-full border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 
                                    -translate-y-4 sm:translate-y-0 flex items-center justify-center' title=' Universidad Antonio Jose Camacho'>
                                                    <a href="https://www.uniajc.edu.co/" target="_blank">
                                                        <img src={camacho} alt="" />
                                                    </a>

                                                </div>
                                            </div>

                                        </div>

                                        {/* ==================== left card ====================== */}
                                        <div className='mt-6 sm:mt-1 sm:mb-1'>
                                            <div className='flex items-center text-end flex-col sm:flex-row'>
                                                <div className='flex justify-start w-full mx-auto items-center'>
                                                    <div className='w-full sm:w-1/2 sm:pr-8'>

                                                        <div  data-aos="fade-right" 
                                                    data-aos-duration="1200"  
                                                            className='bg-green-50 p-3 rounded
                                             shadow group hover:bg-green-500 cursor-pointer ease-in duration-150'>
                                                            <h3 className='text-green-700 font-[700]  group-hover:text-white group-hover:font-[600] leading-[15px] text-[15px]'>
                                                                CCNA, Linux
                                                            </h3>

                                                            <p className='text-[14px] group-hover:text-white group-hover:font-[500] leading-[15px] mt-2'>
                                                                CISCO - Netacad
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='hover:cursor-pointer rounded-full border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 
                                    -translate-y-4 sm:translate-y-0 flex items-center justify-center' title='Sena'>
                                                    <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank">

                                                        <img src={cisco} alt="" />
                                                    </a>

                                                </div>
                                            </div>


                                        </div>

                                        {/* ==================== Right card ====================== */}

                                        <div className='mt-6 sm:mt-1 sm:mb-1'>
                                            <div className='flex items-center flex-col sm:flex-row'>
                                                <div className='flex justify-end w-full mx-auto items-center'>
                                                    <div className='w-full sm:w-1/2 sm:pl-8 '>
                                                        <div  data-aos="zoom-out-left"
                                                        data-aos-deloy='50'
                                                        data-aos-duration="1300" 
                                                            className='bg-green-50 p-3 rounded 
                                            shadow group hover:bg-green-500
                                            cursor-pointer ease-in duration-150 '>
                                                            <h3 className='text-green-700 font-[700] group-hover:text-white group-hover:font-[600] leading-[15px] text-[15px]'>
                                                                Tecnol. en Gestion de Redes
                                                            </h3>
                                                            <p className='text-[14px] group-hover:text-white group-hover:font-[500] leading-[15px] mt-2'>
                                                                Sena
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='hover:cursor-pointer rounded-full border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 
                                    -translate-y-4 sm:translate-y-0 flex items-center justify-center' title='Sena'>
                                                    <a

                                                        href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank">
                                                        <img src={sena} alt="" />
                                                    </a>

                                                </div>
                                            </div>

                                        </div>

                                        {/* ==================== left card ====================== */}
                                        <div className='mt-6 sm:mt-1 sm:mb-1'>
                                            <div className='flex items-center text-end flex-col sm:flex-row'>
                                                <div className='flex justify-start w-full mx-auto items-center'>
                                                    <div className='w-full sm:w-1/2 sm:pr-8'>

                                                        <div  
                                                        /* data-aos="fade-right" 
                                                        data-aos-duration="1200"  */ 
                                                        className='bg-green-50 p-3 rounded
                                                        shadow group hover:bg-green-500 cursor-pointer 
                                                        ease-in duration-150'>

                                                            <h3 className='text-green-700 font-[700]  group-hover:text-white group-hover:font-[600] leading-[15px] text-[15px]'>
                                                                Tecn. instalaciones Electricas Residenciales
                                                            </h3>

                                                            <p className='text-[14px] group-hover:text-white group-hover:font-[500] leading-[15px] mt-2'>
                                                                Sena,
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='hover:cursor-pointer rounded-full border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 
                                    -translate-y-4 sm:translate-y-0 flex items-center justify-center' title='Sena'>
                                                    <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank">

                                                        <img src={sena} alt="" />
                                                    </a>

                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiencia