import React from 'react';
import TopNav from './TopNav';
import SideNavigation from './SideNavigation';
import BottomNavigation from './BottomNavigation';

function Report() {
  return (
    <main>
      <TopNav title="NEW CLASSROOM" />
      <div className="hidden md:flex justify-center">
        <SideNavigation />
        {/* MIDDLE SECTION FOR DESKTOP */}
        <section className="font-['poppins'] flex flex-col justify-center items-center ml-[250px] h-[100vh]" style={{ width: 'calc(100vw - 280px)' }}>

          <div className="flex flex-col justify-center items-center p-8 m-8 gap-4 bg-[#0079BC] rounded-[20px]" style={{ width: 'min(100% - 5rem , 510px)', height: 'min(100% - 5rem ,460px' }}>
            <div className="rounded-[10px] text-[18px] text-[#fff] bg-[#0081C9] flex justify-center items-center p-4 w-full ">
              <div className="w-full flex justify-center items-center">HELP US IMPROVE!</div>
            </div>
            <input className="rounded-[20px] px-4 py-2 w-full" type="text" placeholder="Topic" />
            <textarea rows={6} className="rounded-[20px] px-4 py-2 w-full" type="email" placeholder="Explain the issue..." />
            <button type="button" className="bg-[#FFC100] px-4 py-3 rounded-[20px] text-[18px] w-full border-[1px] border-black flex justify-center items-center mt-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">REPORT</button>
          </div>
        </section>
      </div>

      {/* MID SECTION FOR MOBILE */}
      <section className="font-['poppins'] flex justify-center items-center md:hidden ">
        <div className="flex flex-col justify-center items-center p-8 m-8 gap-4 bg-[#0079BC] rounded-[20px] w-[80%]">
          <div className="rounded-[10px] text-[18px] text-[#fff] bg-[#0081C9] flex justify-center items-center p-4 ">
            <div>HELP US IMPROVE!</div>
          </div>
          <input className="rounded-[20px] px-4 py-2 w-full" type="text" placeholder="Topic" />
          <textarea rows={4} className="rounded-[20px] px-4 py-2 w-full" type="email" placeholder="Explain the issue..." />

          <button type="button" className="bg-[#FFC100] px-4 py-3 rounded-[20px] text-[18px] w-full border-[1px] border-black flex justify-center items-center mt-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">REPORT</button>
        </div>
      </section>
      <BottomNavigation />
    </main>
  );
}

export default Report;
