import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../general-components/TopNav';
import BottomNavigation from '../general-components/BottomNavigation';
import SideNavigation from '../general-components/SideNavigation';

function NewTeacherDashboardBtn() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" rounded-full text-[24px] text-[#fff] ">CREATE A NEW CLASSROOM</div>
      <button
        onClick={() => navigate('/create-classroom')}
        type="button"
        className="bg-[#FFC100] px-4 py-3 rounded-[10px] text-[18px] border-[1px] border-black flex justify-center items-center mt-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
      >
        NEW CLASSROOM +

      </button>

    </div>
  );
}

function NewStudentDashboardBtn() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" rounded-full text-[24px] text-[#fff] ">JOIN A NEW CLASSROOM</div>
      <button
        onClick={() => navigate('/join-classroom')}
        type="button"
        className="bg-[#FFC100] px-4 py-3 rounded-[10px] text-[18px] border-[1px] border-black flex justify-center items-center mt-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
      >
        JOIN CLASSROOM +

      </button>

    </div>
  );
}

function NewTeacherDashboard() {
  return (
    <main className=" flex flex-col md:flex-row ">
      <TopNav title="DASHBOARD" />
      <div className="hidden md:flex justify-center">
        <SideNavigation />
        {/* MIDDLE SECTION FOR DESKTOP */}
        <section className="font-['poppins'] flex flex-col justify-center items-center ml-[250px] h-[100vh]" style={{ width: 'calc(100vw - 280px)' }}>

          <div className="flex flex-col justify-center items-center p-8 m-8  bg-[#0079BC] rounded-[20px] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]  " style={{ width: 'min(100% - 5rem , 710px)', height: 'min(100% - 5rem ,460px' }}>
            <div className=" rounded-full text-[50px] font-bold text-[#fff] capitalize">
              WELCOME,
              {' '}
              {localStorage.getItem('full_Name')}
            </div>
            {localStorage.getItem('userType') === 'Teacher' ? <NewTeacherDashboardBtn /> : <NewStudentDashboardBtn />}
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
          {localStorage.getItem('userType') === 'Teacher' ? <NewTeacherDashboardBtn /> : <NewStudentDashboardBtn />}
        </div>
      </section>

      <BottomNavigation />
    </main>
  );
}

export default NewTeacherDashboard;
