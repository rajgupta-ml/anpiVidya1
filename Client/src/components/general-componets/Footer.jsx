import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import insta from '../../images/instagram.png';
import fb from '../../images/facebook.png';
import '../../css/home-css/footer.css';
import HeroGear from '../svg-componets/HeroGear';

function Footer() {
  return (
    <div className="bg-[#5BC0F8] overflow-hidden">

      <div className="footer | flex max-width-container text-white">
        <div className="left-content | w-[50%]">
          <div className="text-7xl break-words mt-24"><h1>Let&apos;s build better people together</h1></div>
          <div className="social-icons | flex mt-12 gap-12 mb-24">
            <img className="cursor-pointer" src={insta} alt="" />
            <img className="cursor-pointer" src={fb} alt="" />
          </div>
        </div>
        <div className="right-content | flex items-center justify-center w-[50%]">
          <ul className="list | flex gap-5 text-center flex-col relative z-10">

            <li className="text-2xl w-20"><NavLink to="/">Home</NavLink></li>
            <li className="text-2xl w-20"><NavLink to="/aboutus">ABOUT</NavLink></li>
            <li className="text-2xl w-20"><NavLink to="/login">login</NavLink></li>
            <li className="text-2xl w-20"><NavLink to="/signup">sign up</NavLink></li>
          </ul>
          <AnimatePresence>

            <div className="footer-gear | hidden">
              <HeroGear />
            </div>
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}

export default Footer;
