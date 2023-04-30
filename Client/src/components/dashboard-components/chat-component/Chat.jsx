/* eslint-disable max-len */
import React from 'react';
import SideNavigation from '../general-components/SideNavigation';
// import ChatCard from './ChatCard';

import ChatInfo from './ChatInfo';

function Chat() {
  return (
    <>
      <SideNavigation />
      <section className="font-['poppins'] flex flex-col w-[80%] ml-[265px] h-[100vh] uppercase" style={{ width: 'calc(100vw - 280px)' }}>
        <div className="h-full ml-[70px] mr-[70px] mt-[50px] flex flex-col gap-6">
          <div className="heading | bg-[#0079BC] text-white font-[poppins] text-[44px] font-bold py-[30px] px-[50px]  rounded-[20px]">CHATS</div>
          <div className="bg-[#0079BC] h-full overflow-y-auto rounded-[20px] flex flex-col p-[40px] gap-4">
            <div className="flex justify-between items-center">
              <div className="recent-actions text-[28px] text-white">Recent Conversations</div>
              <button type="button" className=" uppercase rounded-[20px] text-[32px] flex justify-center items-center bg-[#FFC93C] px-[60px] py-[16px] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"> Start a Conversation</button>
            </div>
            <div className="mettings flex flex-col gap-6">
              <ChatInfo name="Jay Lamsung" email="jay@jay.com" />
              <ChatInfo name="Hatem Jaerr" email="haten@jer.com" />
            </div>
          </div>
        </div>
      </section>

    </>

  );
}

export default Chat;
