import React from 'react'
import Image from "next/image"
import image1 from "@/public/image1.jpg"
import style from "./Hero.module.css";
import { BiFontFamily } from 'react-icons/bi';
import { BiMenuAltRight } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg'; 
import Link from 'next/link';

function Hero() {
  return (
    <div>  
      <main className=' bg-[url(/coding.jpg)] h-[900px] bg-center bg-no-repeat bg-cover'>
      {/* <nav className={style.nav} >
        <input type="checkbox" id="sidebox-active" className='hidden' />
        <label htmlFor="sidebox-active" className=''>
          <BiMenuAltRight className='h-7 w-7 hidden'/>
        </label>
        <div className={style.list}>
          <label htmlFor="sidebox-active" className=''>
            <CgClose className='h-6 w-6 hidden' />
          </label>
          <Link href="#" className={style.items}>MAWB.</Link>
          <Link href="#" className={style.items}>Help</Link>
          <Link href="#" className={style.items}>Services</Link>
          <Link href="#" className={style.items}>About</Link>
          <Link href="#" className={style.items}>Contact</Link>
        </div>
      </nav> */}
        <div className=' flex flex-col justify-center items-center md:flex sm:j  ustify-center sm:items-center'> 
          <p data-aos="fade-down" className='text-5xl font-extrabold text-white leading-[60px] text-center sm:text-7xl mt-72'>A programmer's</p> <br />
          <p data-aos="fade-down" className='text-5xl font-extrabold text-white text-center sm:text-7xl '>portfolio </p>
           <div className='mt-16 flex justify-center sm:h'> 
            {/* <button data-aos="zoom-out" className="bg-purple-700 text-black hover:border-4 hover:border-purple-600 hover:text-black active:bg-purple-500 active:border-purple-500 hover:bg-purple-600 m-2 mt-4 rounded-xl p-2 sm:w-40 sm:h-16 sm:text-2xl  font-bold">Check out</button>   
            <button data-aos="zoom-out" className="bg-purple-700 text-black hover:border-4 hover:border-purple-600 hover:text-black active:bg-purple-500 active:border-purple-500 hover:bg-purple-600 m-2 mt-4 rounded-xl p-2 sm:w-60 sm:h-16 sm:text-2xl  font-bold">Become a Member</button>    */}
            </div> 
          </div>
      </main>     
    </div>
  )
}

export default Hero