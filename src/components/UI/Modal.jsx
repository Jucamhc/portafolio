import React from 'react'
import portfolios from '../../assets/data/portfolioData'

const Modal = ({ activeID, setShowModal }) => {
    const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-opacity-50 bg-black">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-md max-w-lg w-full p-6">
                    <div className="mb-6">
                        <img className="w-full rounded-md" src={portfolio.imgUrl} alt="" />
                    </div>

                    <div className="flex justify-between items-center mb-5 font-mono">
                        <h2 className="text-2xl font-bold text-headingColor ">{portfolio.title}</h2>
                        <div className="text-4xl">
          {/*                   <a href="https://www.linkedin.com/in/juan-camilo-hoyos-casta%C3%B1o/" target="_blank">
                                <i className="ri-linkedin-box-fill text-blue-700 cursor-pointer"></i>
                            </a> */}
                            <a href={portfolio.siteUrl} target="_blank">
                                <i className="ri-github-fill cursor-pointer"></i>
                            </a>
                        </div>
                    </div>

                    <p className="text-smallTextColor text-sm leading-6 mb-5 font-mono">{portfolio.description}</p>

                    <div className="flex flex-wrap items-center gap-2 font-mono">
                        <h4 className="text-headingColor text-base font-bold mr-2">Tecnologias:</h4>
                        {portfolio.technologies.map((item, index) => {
                            return (
                                <span
                                    key={index}
                                    className="bg-gray-200 py-1 px-2 rounded-lg text-sm font-medium leading-4"
                                >
                                    {item}
                                </span>
                            );
                        })}
                    </div>
                </div>
                <button onClick={() => setShowModal(false)}
                    className='w-[1.5rem] h-[1.5rem] bg-white absolute top-[1.7rem] 
                    right-[1.7rem] text-[25px] flex items-center justify-center 
                    rounded-[4px] leading-0 cursor-pointer'>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Modal;
