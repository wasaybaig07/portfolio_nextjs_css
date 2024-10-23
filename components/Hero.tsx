import React from 'react'
import Image from "next/image"
import image1 from "@/public/image1.jpg"
import style from "./Hero.module.css";
import { BiFontFamily } from 'react-icons/bi';

function Hero() {
  return (
    <div>  
      <main className=' bg-[url(/coding.jpg)] h-[900px] bg-center bg-no-repeat bg-cover '>
      <nav className={style.nav} >MAWB.</nav>
        <div className='mt-40 flex flex-col justify-center items-center md:flex sm:justify-center sm:items-center'> 
          <p data-aos="fade-down" className='text-5xl font-extrabold text-white leading-[60px] text-center sm:text-7xl '>A programmer's</p> <br />
          <p data-aos="fade-down" className='text-5xl font-extrabold text-white text-center sm:text-7xl '>portfolio </p>
           <div className='mt-16 flex justify-center sm:h'> 
            <button data-aos="none sm:zoom-in" className="bg-purple-700 text-black hover:border-4 hover:border-purple-600 hover:text-white hover:bg-purple-600 m-2 mt-4 rounded-xl p-2 sm:w-40 sm:h-16 sm:text-2xl  font-bold">Check out</button>   
            <button data-aos="none sm:zoom-in" className="bg-purple-700 text-black hover:border-4 hover:border-purple-600 hover:text-white hover:bg-purple-600 m-2 mt-4 rounded-xl p-2 sm:w-60 sm:h-16 sm:text-2xl  font-bold">Become a Member</button>   
            </div> 
          </div>
      </main>     
    </div>
  )
}

export default Hero