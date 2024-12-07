import React from "react";
import style from "./Projects.module.css";
function Cards() {
  return (
    <div>
      <div>
        <section>
          <div className={style.card}>
            <div className={style.wrapper}>
              <div className={style.mainbox}>
                <div className={style.box}>
                <img src="card1.png" alt="image" className='lg:h-72 md:h-48 w-72 object-cover object-center' />
                  <div className={style.overlay}>
                    <h1 className={style.h1}>Weather app</h1>
                    <p className={style.para}>
                      Weather App made by using Next.js ,<br /> TypeScript ,
                      HTML and Tailwind CSS <br />
                      Enter your city name and <br /> get the weather update!
                    </p>
                    <a className={style.anchor} href="#">
                      Take a Look
                    </a>
                  </div>
                </div>
                <div className={style.box}>
                <img src="card2.png" alt="image" className='lg:h-72 md:h-48 w-72 object-cover object-center' />
                  <div className={style.overlay}>
                    <h1 className={style.h1}>
                      Simple Calculator
                    </h1>
                    <p className={style.para}>
                      Simple Calculator App made by using Next.js ,<br />{" "}
                      TypeScript , HTML and Tailwind CSS <br />
                      Enter two numbers and <br /> get an output for different
                      operations!
                    </p>
                    <a className={style.anchor} href="#">
                      Take a Look
                    </a>
                  </div>
                </div>
                <div className={style.box}>
                <img src="card3.png" alt="image" className='lg:h-72 md:h-48 w-72 object-cover object-center' />         
                  <div className={style.overlay}>
                    <h1 className={style.h1}>
                      Birthday wish app
                    </h1>
                    <p className={style.para}>
                      Birthday wish App made by using Next.js ,<br /> TypeScript
                      , HTML and Tailwind CSS <br />
                      Enter your age and <br /> get a wish for your age!
                    </p>
                    <a className={style.anchor} href="#">
                      Take a Look
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cards;
