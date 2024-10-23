import React from 'react'
import { SiTypescript } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa6'
import { FaHtml5 } from 'react-icons/fa6'
import { FaCss3Alt } from 'react-icons/fa6'
import { RiNextjsFill } from 'react-icons/ri'


function Icons() {
  return (
    <div className=''> 
        <ul>
           <li  className='flex justify-around mb-12 '>
             <SiTypescript data-aos="fade-right" className='h-[80px] w-[80px] hover:rounded-lg text-blue-800 hover:bg-black m-4 sm:size-32'/>   
             <SiTailwindcss data-aos="fade-left" className='h-[80px] w-[80px] text-blue-600 hover:bg-slate-100 m-4 sm:size-32'/> 
           </li>
        </ul>
        <ul>
           <li  className='flex justify-around mb-12 '>
             <FaNodeJs data-aos="fade-right" className='h-[80px] w-[80px] text-green-700 hover:bg-slate-100 m-4 sm:size-32'/>   
             <FaHtml5 data-aos="fade-left" className='h-[80px] w-[80px] text-orange-600 hover:bg-slate-100 m-4 sm:size-32'/> 
           </li>
        </ul>
        <ul>
           <li  className='flex justify-around pb-12 '>
             <FaCss3Alt data-aos="fade-right" className='h-[80px] w-[80px] text-blue-500 hover:bg-slate-100 m-4 sm:size-32'/>   
             <RiNextjsFill data-aos="fade-left" className='h-[80px] w-[80px] text-slate-300 bg-black rounded-[50%] border-none hover:bg-slate-100 hover:text-black m-4 sm:size-32'/> 
           </li>
        </ul>
    </div>
  )
}

export default Icons