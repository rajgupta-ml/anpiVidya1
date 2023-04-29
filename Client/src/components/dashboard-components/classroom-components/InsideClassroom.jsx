import React from 'react';
import SideNavigation from '../general-components/SideNavigation';
import avatar from '../../../images/avatar-group.svg';

function InsideClassroom() {
  return (
    <>
      <SideNavigation />

      <section className="font-['poppins'] flex flex-col w-[80%] ml-[265px] h-[100vh] uppercase" style={{ width: 'calc(100vw - 280px)' }}>
        <div className="h-full ml-[70px] mr-[70px] mt-[50px] flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="heading | bg-[#0079BC] text-white font-[poppins] text-[44px] font-bold py-[30px] px-[50px] text-center rounded-[20px]">Distriuted Computing</div>
            <p className="text-[32px] font-[poppins] bg-[#FFC93C] text-center rounded-[20px] px-[80px] py-[16px] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Invite</p>
          </div>

          <div className="flex justify-between items-center drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-[#F0F5FB] py-[35px] px-[40px] rounded-[20px]">
            <div className="text-[36px] font-[poppins]">View All Members</div>
            <div className="button | bg-[#FFC93C] rounded-[1000px] w-[60px] aspect-square flex justify-center items-center font-bold cursor-pointer">{'->'}</div>
          </div>

          <div className="bg-[#0079BC] h-full overflow-y-auto rounded-[20px] flex flex-col p-[40px] gap-4">
            <div className="flex justify-between items-center">
              <div className="recent-actions text-[28px] text-white">Recent Actions</div>
              <button type="button" className=" uppercase rounded-[20px] text-[32px] flex justify-center items-center bg-[#FFC93C] px-[60px] py-[16px] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"> Create New Metting</button>
            </div>

            <div className="mettings flex flex-col gap-6">
              <div className="metting bg-[#F0F5FB] flex justify-between items-center px-[40px] py-[20px] rounded-[20px] uppercase">
                <div className="metting-description">
                  <div className="heading | text-[36px]">New Metting</div>
                  <div className="meta-data | text-[18px] text-[#000] opacity-70">Started At 2.00PM | Ongoing</div>
                </div>
                <div className="metiing-details flex gap-10">

                  <div className="flex">
                    <img src={avatar} className="w-[40px] mx-[-5px]" alt="" />
                    <img src={avatar} className="w-[40px] mx-[-5px]" alt="" />
                    <img src={avatar} className="w-[40px] mx-[-5px]" alt="" />
                  </div>

                  <div className="button | text-[32px]  rounded-[20px] bg-[#FFC93C] px-[60px] py-[16px] boreder-2 border-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">JOIN</div>
                </div>
              </div>
              <div className="metting bg-[#F0F5FB] flex justify-between items-center px-[40px] py-[20px] rounded-[20px] uppercase">
                <div className="metting-description">
                  <div className="heading | text-[36px]">New Metting</div>
                  <div className="meta-data | text-[18px] text-[#000] opacity-70">Started At 2.00PM | Ongoing</div>
                </div>
                <div className="metiing-details flex gap-10">

                  <div className="flex">
                    <img src={avatar} className="w-[40px] mx-[-5px]" alt="" />
                    <img src={avatar} className="w-[40px] mx-[-5px]" alt="" />
                    <img src={avatar} className="w-[40px] mx-[-5px]" alt="" />
                  </div>

                  <div className="button | text-[32px]  rounded-[20px] bg-[#FFC93C] px-[60px] py-[16px] boreder-2 border-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">JOIN</div>
                </div>
              </div>
              <div className="metting bg-[#F0F5FB] flex justify-between items-center px-[40px] py-[20px] rounded-[20px] uppercase">
                <div className="metting-description">
                  <div className="heading | text-[36px]">New Metting</div>
                  <div className="meta-data | text-[18px] text-[#000] opacity-70">Started At 2.00PM | Ongoing</div>
                </div>
                <div className="metiing-details flex gap-10">

                  <div className="flex">
                    <img src={avatar} className="w-[40px] mx-[-5px]" alt="" />
                    <img src={avatar} className="w-[40px] mx-[-5px]" alt="" />
                    <img src={avatar} className="w-[40px] mx-[-5px]" alt="" />
                  </div>

                  <div className="button | text-[32px] rounded-[20px] bg-[#FFC93C] px-[60px] py-[16px] boreder-2 border-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">JOIN</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </>
  );
}

export default InsideClassroom;
