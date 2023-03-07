import React from 'react';
import '../../css/about-css/abouthero.css';
import { AnimatePresence } from 'framer-motion';
import AboutHeroSvg from '../svg-componets/AboutHeroSvg';
import TwoGearSvg from '../svg-componets/TwoGearSvg';
import OneGearSvg from '../svg-componets/OneGearSvg';
import Fline from '../svg-componets/Fline';

function AboutHero() {
  return (
    <div className="about-main-container">

      <div className="about-even-col | flex flex-col-reverse relative z-10 justify-center max-width-container">
        <div className="about-content | mt-16 text-white flex flex-col gap-3 ">

          <div className="about-content-title | relative text-3xl">
            <h1>
              <span className="text-[#FFC100]">U</span>
              ltimate education platform
              meets the internet.
            </h1>

          </div>
          <div className="about-content-sub-heading | text-base font-[poppins] uppercase">
            <h2>
              in 2023, a lightbulb went off.
              could we bring all the teaching
              tools to one web platform?
            </h2>
          </div>
          <div className="about-content-quote | text-base text-[#FFC100]">
            <p>
              we knew that we could pull it off.
            </p>

          </div>
        </div>
        <div className="about-animating-svg |  w-full aspect-square">
          <AboutHeroSvg />
          <div className="line-contaner | hidden ">
            <Fline />
          </div>
        </div>

        <div className="about-heading | top-[10%] left-0 right-0 absolute flex justify-center text-[#0192E2]">About Us</div>
      </div>
      <div className="emptyspace | relative ">

        <AnimatePresence>
          <div className="gear-container | absolute w-[100%] flex flex-row justify-center mt-[-300px]">
            <div className="oneGearSvg | -z-10 w-[60%] relative ">
              <OneGearSvg />
            </div>

            <div className="twoGearSvg | -z-10 w-[40%] relative ">
              <TwoGearSvg />
            </div>
          </div>
        </AnimatePresence>

      </div>

    </div>
  );
}

export default AboutHero;
