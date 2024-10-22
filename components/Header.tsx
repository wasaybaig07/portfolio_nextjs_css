import { Html } from 'next/document'
import React from 'react'
import style from "./Header.module.css"
import Cards from "@/components/Cards";
import About from "@/components/About"; 
import Link from "next/link";

function Header() {
  return (
    <body className='mr-0 sm:w-full bg-[url-(/image1.jpg)] h-[70vh] bg-no-repeat bg-center bg-cover'>
    <nav>
       <div className='bg-purple-600 flex justify-between '> 
        <h1 className= 'text-xl font-extrabold flex items-center ml-6 my-3 sm:text-xl sm:font-extrabold sm:flex sm:items-center sm:ml-3'>MAWB.</h1>
        <ul className='sm:flex sm:items-center sm:space-x-5 sm:font-semibold sm:pointer-events p-3 mr-3 h-10 hidden py-4 my-2'>
            <li className='cursor-pointer hover:bg-purple-300 hover:rounded-md p-1 py-2 px-2 my-3'><a onClick={Cards}>Projects</a></li>
            <li className='cursor-pointer hover:bg-purple-300 hover:rounded-md p-1 py-2 px-2 my-3'><a onClick={About}>About</a></li>
            <button className="w-28 h-10 rounded-md bg-black text-slate-50 my-2 sm:h-12">Sign in</button> 
        </ul>
       </div> 
    </nav>
</body>
)
}

export default Header