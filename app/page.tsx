"use client";

import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import { useEffect } from 'react';
import AOS from "aos";
import Cards from '@/components/Cards';
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from '@/components/Contact'; 
function page() {
  useEffect(() => {
    AOS.init({
      easing:"ease-out-back",
      duration:1200 ,
      delay:100,
      mirror:true,
      anchorPlacement:"top-bottom",
      offset:160
    })
    AOS.refresh() 
  },[])
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default page