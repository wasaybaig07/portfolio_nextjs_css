import React from 'react'
import { BiLogoTypescript } from 'react-icons/bi'

function About() {
  return (
    <div className=' flex justify-center sm:flex sm:justify-center sm:items-center'>
        <div className='flex text-black text-center hover:border-slate-300 rounded-md flex-col hover:border-x-4 items-center mb-[100px] border-4 w-10/12 border-x-0 border-x-slate-200 h-fit hover:bg-purple-600 sm:flex sm:flex-col sm:items-center sm:justify-center sm:hover:border-x-8 sm:hover:border-slate-300 sm:mt-[0px] sm:h-72 sm:w-6/12 sm:mb-[100px] hover:text-slate-100 transition duration-300 ease-in md:h-fit lg:h-fit'>
            <h1 className='text-2xl font-extrabold mt-0 sm:pt-4' data-aos="fade-left">About Me:</h1>
            <h1 className='text-xl font-medium my-2 px-3 sm:text-center sm:leading-loose sm:text-2xl' data-aos="fade-right">My Name is Mirza Abdul Wasay Baig.I am a student at GIAIC.I specialize in Typescript , Node.js , Next.js , HMTL , Vanilla CSS and Tailwind CSS.</h1>
        </div>
    </div>
  )
}

export default About