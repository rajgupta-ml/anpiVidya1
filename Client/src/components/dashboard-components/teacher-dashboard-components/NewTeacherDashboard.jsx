import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../general-components/TopNav';
import BottomNavigation from '../general-components/BottomNavigation';
import SideNavigation from '../general-components/SideNavigation';

function NewTeacherDashboard() {
  const navigate = useNavigate();
  return (
    <main className=" flex flex-col md:flex-row ">
      <TopNav title="DASHBOARD" />
      <div className="hidden md:flex justify-center">
        <SideNavigation />
        {/* MIDDLE SECTION FOR DESKTOP */}
        <section className="font-['poppins'] flex flex-col justify-center items-center " style={{ width: 'calc(100vw - 250px)' }}>

          <div className="flex flex-col justify-center items-center p-8 m-8  bg-[#0079BC] rounded-[20px] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]  " style={{ width: 'min(100% - 10rem, 710px)', height: 'min(100% - 20rem, 460px)' }}>
            <div className=" rounded-full text-[50px] font-bold text-[#fff] capitalize">
              WELCOME,
              {' '}
              {localStorage.getItem('full_Name')}
            </div>
            <div className=" rounded-full text-[24px] text-[#fff] ">CREATE A NEW CLASSROOM</div>
            <button
              onClick={() => navigate('/create-classroom')}
              type="button"
              className="bg-[#FFC100] px-4 py-3 rounded-[20px] text-[18px] border-[1px] border-black flex justify-center items-center mt-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              NEW CLASSROOM +

            </button>

          </div>
        </section>
      </div>

      {/* MIDDLE SECTION FOR MOBILE */}
      <section className="font-['poppins'] flex justify-center items-center md:hidden ">
        <div className="flex flex-col justify-center items-start p-8 m-8 bg-[#0079BC] rounded-[20px]">
          <div className=" w-[80%] rounded-full text-[50px] font-bold text-[#fff] ">WELCOME, mobile</div>
          <div className=" w-[80%] rounded-full text-[24px] text-[#fff] ">RAJ GUPTA</div>
          <button type="button" className="bg-[#FFC100] px-4 py-3 rounded-[20px] text-[18px] border-[1px] border-black flex justify-center items-center mt-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">NEW CLASSROOM +</button>
        </div>
      </section>

      <BottomNavigation />
    </main>
  );
}

export default NewTeacherDashboard;
