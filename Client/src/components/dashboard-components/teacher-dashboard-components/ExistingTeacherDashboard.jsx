/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import TopNav from '../general-components/TopNav';
import BottomNavigation from '../general-components/BottomNavigation';
import SideNavigation from '../general-components/SideNavigation';
import ClassroomCard from '../classroom-components/ClassroomCard';
import avatar from '../../../images/circled-avatar.svg';
import './calendar.css';

function NewTeacherDashboard() {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  return (
    <main className=" flex flex-col md:flex-row ">
      <TopNav title="DASHBOARD" />
      <div className="hidden md:flex justify-center">
        <SideNavigation />
        {/* MIDDLE SECTION FOR DESKTOP */}
        <section className="font-['poppins'] flex flex-col justify-center items-center ml-[250px] h-[100vh]" style={{ width: 'calc(100vw - 280px)' }}>
          <div className="flex flex-col w-[80%]">

            <div className="text-[3rem] font-bold p-8 text-white">
              DASHBOARD
            </div>
            <hr />
            <div className="flex p-8 gap-8 justify-center">
              <div className="flex flex-col gap-4 w-[30rem] ">
                <ClassroomCard subject="Statistics" days="MON-FRI" time="12PM" />
                <ClassroomCard subject="Data Mining" days="MON-FRI" time="12PM" />
                <ClassroomCard subject="Automation" days="MON-FRI" time="12PM" />
              </div>
              <div className="flex flex-col gap-4 w-[30rem] ">
                <div className="bg-[#fff] flex flex-col gap-4 p-8 rounded-[20px]">
                  <div className="text-[24px] font-bold">
                    My Tasks
                    {' '}
                    <span className="text-[#00000078]">(07)</span>
                  </div>
                  <hr />
                  <div className="text-[20px]">01. Create a meet</div>
                  <div className="text-[20px]">02. Walk to the gym</div>
                  <div className="text-[20px]">03. Create a meet</div>
                  <div className="text-[20px]">04. Walk to the gym</div>
                  <div className="text-[20px]">05. Create a meet</div>
                  <div className="text-[20px]">06. Walk to the gym</div>
                  <div className="text-[20px]">07. Walk to the gym</div>
                </div>
                <div className="bg-[#fff] flex flex-col gap-4 p-8 rounded-[20px]">
                  <div className="text-[24px] font-bold">
                    Notifications
                    {' '}
                    <span className="text-[#00000078]">(03)</span>
                  </div>
                  <hr />
                  <div className="text-[20px] flex gap-4 items-center">
                    <img className="w-[3rem]" src={avatar} alt="" />
                    <div>User has joined a classroom!</div>
                  </div>
                  <div className="text-[20px] flex gap-4 items-center">
                    <img className="w-[3rem]" src={avatar} alt="" />
                    <div>User has created a meeting!</div>
                  </div>
                  <div className="text-[20px] flex gap-4 items-center">
                    <img className="w-[3rem]" src={avatar} alt="" />
                    <div>User has joined a meeting!</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-[30rem]">

                <div className="bg-[#fff] flex flex-col gap-4 p-8 rounded-[20px]">
                  <div className="text-[24px] font-bold">
                    Messages
                    {' '}
                    <span className="text-[#00000078]">(02)</span>
                  </div>
                  <hr />
                  <div className="text-[20px] flex gap-4 items-center">
                    <img className="w-[3rem]" src={avatar} alt="" />
                    <div>1 unread message from Rahul!</div>
                  </div>
                  <div className="text-[20px] flex gap-4 items-center">
                    <img className="w-[3rem]" src={avatar} alt="" />
                    <div>3 unread messages from Hatem!</div>
                  </div>

                </div>
                <div className="bg-[#fff] flex flex-col justify-center items-center gap-4 p-8 rounded-[20px]">
                  <div className="text-[24px] font-bold">
                    Calendar
                    {' '}
                    <span className="text-[#00000078]">(2023)</span>
                  </div>
                  <hr />
                  <div className="app">
                    <div className="calendar-container">
                      <Calendar onChange={setDate} value={date} />
                    </div>
                    <div className="">
                      Selected date:
                      {' '}
                      {date.toDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* MIDDLE SECTION FOR MOBILE */}
      <section className="font-['poppins'] flex justify-center items-center md:hidden ">
        <div className="flex flex-col justify-center items-start p-8 m-8 bg-[#0079BC] rounded-[20px]">
          <div className=" w-[80%] rounded-full text-[44px] font-bold text-[#fff] ">
            WELCOME,
            {' '}
            {localStorage.getItem('full_Name')}
          </div>
          <div className=" w-[80%] rounded-full text-[12px] text-[#fff] ">CREATE A NEW CLASSROOM</div>
          <button type="button" onClick={() => navigate('/create-classroom')} className="bg-[#FFC100] px-4 py-3 rounded-[20px] text-[18px] border-[1px] border-black flex justify-center items-center mt-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">NEW CLASSROOM +</button>
        </div>
      </section>

      <BottomNavigation />
    </main>
  );
}

export default NewTeacherDashboard;
