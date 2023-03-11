import React from 'react';
import classroom from '../../../images/classroom.svg';
import ainotes from '../../../images/ainotes.svg';
import notes from '../../../images/notes.svg';
import chat from '../../../images/chat.svg';
import dashboard from '../../../images/dashboard.svg';

function BottomNavigation() {
  return (
    // BOTTOM NAVIGATION
    <section className="flex justify-center items-center md:hidden  ">
      <div className="flex justify-between items-center gap-2 bg-[#F0F5FB] w-[80%] p-3 rounded-[25px] text-[12px] fixed bottom-4">
        <div className="flex flex-col items-center cursor-pointer">
          <img className="w-[30px]" src={classroom} alt="" />
          <div>CLASSROOM</div>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img className="w-[30px]" src={ainotes} alt="" />
          <div>AI</div>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img className="w-[30px]" src={dashboard} alt="" />
          <div>DASHBOARD</div>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img className="w-[30px]" src={notes} alt="" />
          <div>NOTES</div>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img className="w-[30px]" src={chat} alt="" />
          <div>CHATS</div>
        </div>
      </div>
    </section>
  );
}

export default BottomNavigation;
