import React from 'react'

export const Header = () => {
    return (
        <header className='w-full h-[80px] leading-[80px] flex items-center'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    {/* ================= logo ================*/}
                    <div className='flex items-center gap-[10px]'>
                        <span className='w-[45px] h-[45px] bg-smallTextColorJC text-white text-[28px] font-[900] rounded-full flex items-center justify-center'>
                            JC
                        </span>
                        <div className='leading-[8px] ml-3 '>
                            <h2 className='text-xl text-smallTextColor font-[700]'>Portafolio</h2>
                            <p className='text-smallTextColor text-[16px] font-[500] text-right'> Informaciòn @JuCamHC</p>
                        </div>
                    </div>

                    {/* ================= logo end ================*/}
                    {/* ================= menu start ==============*/}

                    <div className='menu'>
                        <ul className='flex items-center gap-5'>
                            <li><a className='text-smallTextColor font-[500] hover:font-[700]' href="#about">Inicio</a></li>
                            <li><a className='text-smallTextColor font-[500] hover:font-[700]' href="#services">Experiencia</a></li>
                            <li><a className='text-smallTextColor font-[500] hover:font-[700]' href="#about">Proyectos</a></li>
                            <li><a className='text-smallTextColor font-[500] hover:font-[700]' href="#contact">Reunamonos</a></li>
                            {<li><a className='text-smallTextColor font-5400] hover:font-[700]' href="#portfolio">Blog</a></li>}
                        </ul>
                    </div>

                    {/* ================= menu end ================*/}

                    {/* ================= menu right ================*/}

                    <div className='flex items-center gap-4'>
                        <button className='flex items-center gap-2  text-smallTextColorJC  font-[600] border border-solid border-smallTextColor py-2 px-4 
                        rounded-[8px] max-h-[40px] hover:bg-smallTextColorJC hover:text-white hover:font-[500] ease-in duration-300'>
                            <i class="ri-send-plane-line"></i> Hablemos !!
                        </button>
                        <span className='text-2xl bg-smallTextColorJC md:hidden cursor-pointer'>
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>

                    {/* ================= menu end ================*/}
                </div>
            </div>
        </header>

    )
};

export default Header;