import React from 'react';
import TopNav from '../general-components/TopNav';
import SideNavigation from '../general-components/SideNavigation';
import BottomNavigation from '../general-components/BottomNavigation';

function Classroom() {
  return (
    <main>
      <TopNav />
      <div className="hidden md:flex justify-center">
        <SideNavigation />
      </div>

      <section className="font-['poppins'] flex flex-col justify-center items-center bg-[#0079BC]">
        <div className="bg-[#FFC100] p-4 m-4 rounded-[20px] min-w-[60%] flex justify-center">
          <button type="button" className="">NEW CLASSROOM + </button>
        </div>

        <div className="flex">CURRENT CLASSROOMS</div>
      </section>

      <BottomNavigation />
    </main>
  );
}

export default Classroom;
