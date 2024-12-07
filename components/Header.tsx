import { Html } from 'next/document'
import React from 'react'
import Cards from "@/components/Cards";
import About from "@/components/About"; 
import style from '@/components/Header.module.css'
import Link from "next/link";
import { useState } from 'react';
function Header() {
  return (
    <body className={style.body}>
    <nav>
       <div className={style.main}> 
        <h1 className={style.main2}>MAWB.</h1>
        <ul className='sm:flex sm:items-center sm:space-x-5 sm:font-semibold sm:pointer-events p-3 mr-3 h-10 hidden py-4 my-2'>
            <li className={style.child}><a>Projects</a></li>
            <li className={style.child}><a>About</a></li>
            <li className={style.child}><a>Contact</a></li>
            {/* <button className="w-28 h-10 rounded-md bg-black text-slate-50 my-2 sm:h-12">Sign in</button>  */}
        </ul>
       </div> 
    </nav>
</body>
)
}

export default Header