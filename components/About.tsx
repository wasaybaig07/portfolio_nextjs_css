import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import style from '@/components/Projects.module.css'

function About() {
  return (
    <div>
    <div className={style.about}>
      <h1 className={style.name}>About Me:</h1>
      <p className={style.desc}>I am a student at GIAIC , I specialize in HTML , CSS , Javascript and Typescript and i am currently learning nextjs</p>
    </div>
      <div className={style.lang}>
        <BiLogoTypescript className={style.icon} size={180}/>
        <SiTailwindcss className={style.icon} size={180}/>
        <FaNodeJs className={style.icon} size={180}/>
        <FaHtml5 className={style.icon} size={180}/>
        <FaCss3Alt className={style.icon} size={180}/>
        <RiNextjsFill className={style.icon} size={180}/>
      </div>
    </div>
  );
}

export default About;
