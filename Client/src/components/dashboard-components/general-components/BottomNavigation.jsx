import React from 'react';
import { NavLink } from 'react-router-dom';
import classroom from '../../../images/classroom.svg';
import ainotes from '../../../images/ainotes.svg';
import notes from '../../../images/notes.svg';
import chat from '../../../images/chat.svg';
import dashboard from '../../../images/dashboard.svg';
import '../../../css/dashboard-css/bottomNavbar-dashboard.css';

function BottomNavigation() {
  return (
    // BOTTOM NAVIGATION
    <section className="flex justify-center items-center md:hidden  ">
      <div className=" bottom-navbar | flex justify-between items-center bg-[#F0F5FB] w-[85%] p-3 rounded-[25px] text-[12px] fixed bottom-4">
        <NavLink to="/classrooms" className="flex flex-col items-center justify-center cursor-pointer h-[60px] aspect-square">
          <img className="w-[27px]" src={classroom} alt="" />
          <div>CLASSROOM</div>
        </NavLink>
        <NavLink to="/ai-notes" className="flex flex-col items-center justify-center cursor-pointer h-[60px] aspect-square">
          <img className="w-[27px]" src={ainotes} alt="" />
          <div>AI</div>
        </NavLink>
        <NavLink to="/dashboard" className="flex flex-col items-center justify-center cursor-pointer h-[60px] aspect-square">
          <img className="w-[27px]" src={dashboard} alt="" />
          <div>DASHBOARD</div>
        </NavLink>
        <NavLink to="/notes" className="flex flex-col items-center justify-center cursor-pointer h-[60px] aspect-square">
          <img className="w-[27px]" src={notes} alt="" />
          <div>NOTES</div>
        </NavLink>
        <NavLink to="/chats" className="flex flex-col items-center justify-center cursor-pointer h-[60px] aspect-square">
          <img className="w-[27px]" src={chat} alt="" />
          <div>CHATS</div>
        </NavLink>
      </div>
    </section>
  );
}

export default BottomNavigation;
