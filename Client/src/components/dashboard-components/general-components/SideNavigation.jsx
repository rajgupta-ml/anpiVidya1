import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import avatar from '../../../images/avatar.svg';
import classroom from '../../../images/classroom.svg';
import notes from '../../../images/notes.svg';
import aitools from '../../../images/aitools.png';
import chat from '../../../images/chat.svg';
import dashboard from '../../../images/dashboard.svg';
import logout from '../../../images/logout.svg';
import '../../../css/dashboard-css/sidebar-dashboard.css';

function handleLogout(navigate) {
  localStorage.clear();
  navigate('/');
}
function SideNavigation() {
  const navigate = useNavigate();
  return (
    <main className="font-['poppins'] ">
      <section className="bg-[#F0F5FB] w-[250px] h-[100vh] flex flex-col justify-between items-center border-r-2 border-black fixed top-0 left-0">
        <div className="flex flex-col justify-center items-center p-8 relative">
          <div className="bg-[#F0F5FB] w-[150px] rounded-full border-[1px] border-black flex justify-center items-center">
            <img className="w-[120px] rounded-full" src={avatar} alt="" />
          </div>
          <div className="my-2 text-[24px] capitalize">{localStorage.getItem('full_Name')}</div>

          {/* Side Navigation */}
          <div className="desktop-sidebar-navigation | flex flex-col gap-4 my-[5rem] ">
            <NavLink to="/dashboard" className="flex gap-4 px-5 py-3 items-center">
              <img src={dashboard} alt="" />
              <div>Dashboard</div>
            </NavLink>
            <NavLink to="/classrooms" className="flex gap-4 px-5 py-3 items-center">
              <img src={classroom} alt="" />
              <div>Classroom</div>
            </NavLink>
            <NavLink to="/ai-notes" className="flex gap-4 px-5 py-3 items-center">
              <img src={notes} alt="" />
              <div>Notes</div>
            </NavLink>
            <NavLink to="/aitools" className="flex gap-4 px-5 py-3 items-center">
              <img className="w-[40px]" src={aitools} alt="" />
              <div>AI Tools</div>
            </NavLink>
            <NavLink to="/chats" className="flex gap-4 px-5 py-3 items-center">
              <img src={chat} alt="" />
              <div>Chats</div>
            </NavLink>
          </div>
        </div>

        <button
          onClick={() => handleLogout(navigate)}
          type="button"
          className="flex justify-center gap-2 bg-[#ffc93c] p-4 border-y-[1px] border-black cursor-pointer w-[100%] "
        >
          <img src={logout} alt="" />
          <div>LOGOUT</div>
        </button>

      </section>

    </main>
  );
}

export default SideNavigation;
