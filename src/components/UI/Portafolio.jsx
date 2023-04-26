import React, { useState, useEffect } from 'react'
import data from '../../assets/data/portfolioData'
import Modal from './Modal'

export const Portafolio = () => {

    const [nextIems, setNextItems] = useState(6)
    const [infoPorfolio, setinfoPorfolio] = useState(data)
    const [selectTab, setSelectTab] = useState('all')
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID] = useState(null)

    const loadMoreInfo = () => {
        setNextItems(prev => prev + 3)
    }

    const showModalInfoPorfolio = id => {
        setShowModal(true)
        setActiveID(id)
    }

    useEffect(() => {

        if (selectTab === 'Todos') {
            setinfoPorfolio(data)
        }

        if (selectTab === 'Diseño-Web') {
            const filteredData = data.filter(item => item.category === 'Diseño-Web')
            setinfoPorfolio(filteredData)
        }
        if (selectTab === 'Backend') {
            const filteredData = data.filter(item => item.category === 'Backend')
            setinfoPorfolio(filteredData)
        }
    }, [selectTab])



    return (
        <section id='portafolio'>
            <div className='container' >
                <div className='flex items-center justify-between flex-wrap '>
                    <div className='mb-7 sm:mb-0'>
                        <h3 className='text-smallTextColor text-[1.8rem] font-[800]'>
                            PROYECTOS
                        </h3>
                    </div>
                    <div className='flex gap-3 font-mono'>
                        <button onClick={() => setSelectTab('Todos')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                            Todos
                        </button>
                        <button onClick={() => setSelectTab('Diseño-Web')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                            Diseño-Web                        </button>
                        <button onClick={() => setSelectTab('Backend')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                            Backend
                        </button>
                        <button onClick={() => setSelectTab('Site-Proyect')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                            Site Proyect
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-4 flex-wrap mt-12'>

                    {infoPorfolio.slice(0, nextIems)?.map((portfolio, index) => (
                        <div
                            key={index}
                            data-aos='fade-zoom-in'
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32%] relative z-[1]'>
                            <figure>
                                <img className='rounded-[8px]' src={portfolio.imgUrl} alt="" />
                            </figure>

                            <div className='w-full h-full bg-smallTextColorJC bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                <div className='w-full h-full flex items-center justify-center'>
                                    <button onClick={() => showModalInfoPorfolio(portfolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-2 rounded-[8px] font-[500] ease-in duration-200'>
                                        Ver Mas +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-6'>

                    {nextIems < infoPorfolio.length && data.length > 6 && (
                        <button onClick={loadMoreInfo} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-2 rounded-[8px] font-[500] ease-in duration-200'>
                            Ver Mas
                        </button>
                    )}

                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
        </section>
    )
}

export default Portafolio