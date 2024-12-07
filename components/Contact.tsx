import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import style from '@/components/Projects.module.css'

function Contact() {
  return (
    <div>
      <div>
        <div className={style.parent1}>
          <ul className={style.unlisted}>
            <li className={style.list1}>
            <h2>Enter your Email here:</h2>  
            <input type="email" className={style.mail} />
            <h2>Enter Your Message here:</h2>
            <textarea className={style.msg} rows={5} ></textarea>
            </li>
            <li className={style.list2}>
            <h2>Enter Your Number here:</h2>
            <input type="number" className={style.num}/>
            <div className={style.plat}>
              <FaInstagram size={45} className={style.logo}/>
              <FaTwitterSquare size={45} className={style.logo}/>
              <FaFacebookSquare size={45} className={style.logo}/>
              <FaSquareGithub size={45} className={style.logo}/>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
