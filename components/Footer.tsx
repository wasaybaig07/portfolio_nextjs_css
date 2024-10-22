import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer>
          <div className=" flex items-center justify-around bg-purple-800 text-white text-[9px] h-max sm:bg-purple-800 sm:h-64 sm:flex sm:justify-around sm:items-center sm:text-white">
            <ul className='mb-7 mt-10 ml-4 sm:mt-0 md:mt-0 lg:mt-0'>
                <li className="leading-5 mb-2 mt-0 text-[20px] sm:mb-2 sm:text-3xl md:text-xl" >Customer Care</li>
                <li className="cursor-pointer text-[13px] sm:text-lg md:text-[18px]">Help Center</li>
                <li className="cursor-pointer text-[13px] sm:text-lg md:text-[18px]">How to Buy</li>
                {/* <li className="cursor-pointer text-[13px] sm:text-lg sm:block md:text-[18px] ">Corporate Purchasing</li> */}
                <li className="cursor-pointer text-[13px] sm:text-lg md:text-[18px]">Returns and refunds</li>
            </ul>
            <ul className='mb-7 mt-10 ml-4 sm:mt-0 md:mt-0 lg:mt-0'>
                <li className="leading-5 mb-2 mt-0 text-[20px] sm:mb-2 sm:text-3xl md:text-xl" >MAWB.</li>
                <li className="cursor-pointer text-[13px] sm:text-lg md:text-[18px]">Blogs</li>
                <li className="cursor-pointer text-[13px] sm:text-lg md:text-[18px]">Donation</li>
                {/* <li className="cursor-pointer text-[13px] sm:text-lg sm:block md:text-[18px] ">Corporate Purchasing</li> */}
                <li className="cursor-pointer text-[13px] sm:text-lg md:text-[18px]">Privacy Policy</li>
            </ul>
            <ul className='mt-7 sm:mt-0'>
                <li className='sm:ml-20'>
                    <input type="email" placeholder="Enter Email Address" className=" rounded-md pl-2 h-5 w-36 sm:text-black sm:rounded-xl sm:pl-4 sm:h-8 sm:min-w-64 sm:text-lg md:text-[15px]"></input>
                </li>
                <li className="flex ml-2 mt-4 sm:flex sm:mt-10 sm:ml-28">
                <FaFacebookSquare className='mx-3 cursor-pointer size-6 hover:bg-white hover:text-purple-800 transition duration-300 ease-in  sm:mx-6 sm:cursor-pointer sm:size-6 sm:hover:bg-white sm:hover:text-purple-800 sm:transition sm:duration-300  sm:ease-in sm:rounded-md'/>
                <FaInstagram  className='mx-3 cursor-pointer size-6 hover:bg-white hover:text-purple-800 transition rounded-md sm:mx-6 sm:cursor-pointer sm:size-6 sm:hover:bg-white sm:hover:text-purple-800 sm:transition sm:duration-300  sm:ease-in sm:rounded-lg'/>
                <FaTwitterSquare className='mx-3 cursor-pointer size-6 hover:bg-white hover:text-purple-800 transition  sm:mx-6 sm:cursor-pointer sm:size-6 sm:hover:bg-white sm:hover:text-purple-800 sm:transition sm:duration-300  sm:ease-in sm:rounded-md'/>
                </li>
                <li className="flex ml-8 mt-4 sm:flex sm:mt-10 sm:ml-36">
                <FaSquareGithub className='mx-3 cursor-pointer size-6 hover:bg-white hover:text-purple-800 transition duration-300  ease-in rounded-sm sm:mx-6 sm:cursor-pointer sm:size-6 sm:hover:bg-white sm:hover:text-purple-800 sm:transition sm:duration-300  sm:ease-in sm:rounded-md'/>
                <FaYoutube className='mx-3 cursor-pointer size-6 hover:bg-white hover:text-purple-800 transition duration-300  ease-in rounded-sm sm:-border-y-2 sm:mx-6 sm:cursor-pointer sm:size-6 sm:hover:bg-white sm:hover:text-purple-800 sm:transition sm:duration-300  sm:ease-in sm:rounded-md '/>    
                </li>
            </ul>   
        </div>
        <p className="text-sm pt-4 bg-purple-800 text-white  sm:bg-purple-800 sm:text-white flex justify-center pb-5">&copy; Copyright | Abdul Wasay (2024)</p>
    </footer>
    </div>
  )
}

export default Footer