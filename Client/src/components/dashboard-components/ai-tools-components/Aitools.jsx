/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import SideNavigation from '../general-components/SideNavigation';

function Aitools() {
  return (
    <div className="hidden md:flex justify-center">
      <SideNavigation />

      <section className="font-['poppins'] flex flex-col justify-center items-center ml-[250px] h-[100vh]" style={{ width: 'calc(100vw - 280px)' }}>
        <div className="flex flex-col items-center p-8 m-8  bg-[#0079BC] rounded-[20px]   " style={{ width: 'min(100% - 5rem , 710px)', height: 'min(100% - 5rem ,320px' }}>
          <div className="text-[28px] font-bold text-white">ADVANCED AI-POWERED TOOLS</div>
          <div className="flex justify-between gap-8 mt-8 ">
            <Link to="/aitools/classifier" className="w-[10rem] aspect-square bg-[#FFC100] p-4 flex justify-center items-center rounded-[20px] text-[24px] hover:scale-125 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] cursor-pointer">
              DATA CLASSIFIER
            </Link>
            <Link to="/aitools/sentiment-analyzer" className="w-[10rem] aspect-square bg-[#FFC100] p-4 flex justify-center items-center rounded-[20px] text-[24px] hover:scale-125 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] cursor-pointer">SENTIMENT ANALYZER</Link>
            <Link to="/aitools/qna" className="w-[10rem] aspect-square bg-[#FFC100] p-4 flex justify-center items-center rounded-[20px] text-[24px] hover:scale-125 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] cursor-pointer">Q/A</Link>
            <Link to="/aitools/translator" className="w-[10rem] aspect-square bg-[#FFC100] p-4 flex justify-center items-center rounded-[20px] text-[24px] hover:scale-125 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] cursor-pointer">LANGUAGE TRANSALTOR</Link>
            <Link to="/aitools/grammer-corrector" className="w-[10rem] aspect-square bg-[#FFC100] p-4 flex justify-center items-center rounded-[20px] text-[24px] hover:scale-125 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] cursor-pointer">GRAMMAR CORRECTOR</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aitools;
