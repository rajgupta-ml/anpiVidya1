import React from 'react';
import avatar from '../../../images/avatar.svg';
import classroom from '../../../images/classroom.svg';
import ainotes from '../../../images/ainotes.svg';
import notes from '../../../images/notes.svg';
import chat from '../../../images/chat.svg';
import dashboard from '../../../images/dashboard.svg';
import logout from '../../../images/logout.svg';

function SideNavigation() {
  return (
    <main className="font-['poppins']">
      <section className="bg-[#F0F5FB] w-[250px]  h-[100vh] flex flex-col justify-around items-center">
        <div className="flex flex-col justify-center items-center p-8">
          <div className="bg-[#F0F5FB] w-[150px] rounded-full border-[1px] border-black flex justify-center items-center">
            <img className="w-[120px] rounded-full" src={avatar} alt="" />
          </div>
          <div className="my-2 text-[24px]">RAJ GUPTA</div>

          {/* Side Navigation */}
          <div className="my-8 flex flex-col gap-4">
            <div className="flex gap-4">
              <img src={dashboard} alt="" />
              <div>Dashboard</div>
            </div>
            <div className="flex gap-4">
              <img src={classroom} alt="" />
              <div>Classroom</div>
            </div>
            <div className="flex gap-4">
              <img src={ainotes} alt="" />
              <div>AI Notes</div>
            </div>
            <div className="flex gap-4">
              <img src={notes} alt="" />
              <div>Notes</div>
            </div>
            <div className="flex gap-4">
              <img src={chat} alt="" />
              <div>Chats</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 bg-[#ffc93c] p-4 border-y-[1px] border-black cursor-pointer w-[100%] ">
          <img src={logout} alt="" />
          <div>LOGOUT</div>
        </div>
        <div className="opacity-[70%] ">v1.12</div>
      </section>

    </main>
  );
}

export default SideNavigation;
