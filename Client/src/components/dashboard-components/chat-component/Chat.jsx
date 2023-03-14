import React from 'react';
import TopNav from '../general-components/TopNav';
import SideNavigation from '../general-components/SideNavigation';
import BottomNavigation from '../general-components/BottomNavigation';
import ChatCard from './ChatCard';

function Chat() {
  return (
    <main className="flex flex-col md:flex-row">
      <TopNav title="CHATS" />
      <div className="hidden md:flex justify-center">
        <SideNavigation />
        {/* MID SECTION FOR DESKTOP */}
        <section className="font-['poppins'] flex flex-col items-center gap-4 " style={{ width: 'calc(100vw - 250px)' }}>
          <div className="bg-[#0079BC] w-[80%] rounded-[20px] my-8 ">
            <div className="text-[#fff] font-bold text-[44px] my-8 px-8">Student Chat</div>
          </div>
          <div className="bg-[#0079BC] flex flex-col gap-4 rounded-[20px] w-[80%]">
            <div className="flex justify-between items-center p-4">
              <div className="text-[#fff] text-[28px]">CURRENT CHAT</div>
              <button type="button" className="bg-[#FFC100] p-4 rounded-[20px] text-[18px] border-[1px] border-black flex justify-center items-center drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]  ">NEW CHAT +</button>
            </div>
            <div>
              <div className="rounded-[20px] bg-[#fff] py-4 px-6 m-4">
                <div className=" text-[36px]">User1</div>
                <div className="text-[#0007] text-[18px] font-medium">Hello</div>
                <div className="text-[#0007] text-[10px] font-medium">Now</div>

              </div>

              <div className="rounded-[20px] bg-[#fff] py-4 px-6 m-4">
                <div className=" text-[36px]">User100</div>
                <div className="text-[#0007] text-[18px] font-medium">OK</div>
                <div className="text-[#0007] text-[10px] font-medium">Now</div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* MID SECTION FOR MOBILE */}
      <section className="font-['poppins'] flex justify-center items-center md:hidden ">
        <div className="flex flex-col justify-center p-6 my-8 bg-[#0079BC]  rounded-[20px] w-[80%] gap-8">
          <button type="button" className="bg-[#FFC100] px-4 py-6 rounded-[20px] text-[18px] border-[1px] border-black flex justify-center items-center mt-4 w-full ">NEW CHAT +</button>
          <div className="flex flex-col justify-center gap-2 ">
            <div className="  rounded-[20px] text-[16px] text-[#fff] ">CURRENT CHAT</div>
            <div className="max-h-[50%] overflow-hidden flex flex-col gap-2">
              <ChatCard userName="User1" message="Hello" time="Now" />
              <ChatCard userName="User100" message="OK" time="Now" />
              <ChatCard userName="User13" message="Bye" time="Now" />
            </div>
          </div>
        </div>
      </section>

      <BottomNavigation />
    </main>
  );
}

export default Chat;
