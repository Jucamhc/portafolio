import React from 'react'
import data from '../../assets/data/portfolioData'

export const Portafolio = () => {
    return (
        <section id='portafolio'>
            <div className='container' >
                <div className='flex items-center justify-between flex-wrap'>
                    <div className='mb-7 sm:mb-0'>
                        <h3 className='text-smallTextColor text-[2rem] font-[700]'>
                            Mis Proyectos
                        </h3>
                    </div>
                    <div className='flex gap-3'>
                        <button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                            All
                        </button>
                        <button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                            Web Design
                        </button>
                        <button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                            UX-Designer
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-4 flex-wrap mt-12'>
                    {
                        data?.map((portfolios, index) => (
                            <div
                                data-aos='fade-zoom-in'
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32%] relative z-[1]'>
                                <figure>
                                    <img className='rounded-[8px]' src={portfolios.imgUrl} alt="" />
                                </figure>

                                <div className='w-full h-full bg-smallTextColorJC bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <button className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-2 rounded-[8px] font-[500] ease-in duration-200'>
                                            Ver Mas +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Portafolio