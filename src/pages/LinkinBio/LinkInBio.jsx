import React from 'react'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'

const LinkInBio = () => {
    return (
        <>
            <Header />
            <div className='w-full h-auto flex flex-col items-center justify-center'>
                <div className='w-full h-[170px] bg-[url("/img/kalca-background-image.png")] bg-cover bg-center' >
                </div>
                <div className='w-[150px] h-[150px] bg-white shadow-md rounded-[50%] absolute top-[160px] border-4 border-white flex items-center justify-center z-1 overflow-hidden'>
                    <img src="/img/kalca-white-background-logo.png" className='w-full h-full' alt="Logo of Kalca" />
                </div>
                <h1 className='text-[27px] font-bold mt-[85px]'>Graphic design</h1>
                <p className='text-[17px] font-bold text-zinc-400 mt-[-5px]'>@kalcastudio.co</p>
            </div>
            <div className='w-full h-74  flex flex-col items-center justify-center gap-6 '>
                <a  className='w-[90%] h-[64px] bg-white border-4 font-bold text-[19px] flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-black hover:text-white hover:border-black '>www.kalcastudio.com</a>
                <a href="https://api.whatsapp.com/send?phone=573103737671" target='_blank'  className='w-[90%] h-[64px] bg-white border-4 font-bold text-[19px] flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-black hover:text-white hover:border-black '>WhatsApp</a>
                <a href='https://www.instagram.com/kalcastudio.co/' target='_blank' className='w-[90%] h-[64px] bg-white border-4 font-bold text-[19px] flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-black hover:text-white hover:border-black '>Instagram</a>
            </div>
            <Footer />
        </>
    )
}

export default LinkInBio