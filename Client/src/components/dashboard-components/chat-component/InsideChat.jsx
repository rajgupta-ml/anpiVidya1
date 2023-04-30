/* eslint-disable max-len */
import React from 'react';
import SideNavigation from '../general-components/SideNavigation';
import ReceiveMessage from './ReceiveMessage';
import SendMessage from './SendMessage';

function InsideChat() {
  return (
    <>
      <SideNavigation />
      <section className="font-['poppins'] flex flex-col w-[80%] ml-[265px] h-[100vh] " style={{ width: 'calc(100vw - 280px)' }}>
        <div className="h-full ml-[70px] mr-[70px] mt-[50px] flex flex-col gap-6">
          <div className="heading | bg-[#0079BC] text-white font-[poppins] text-[44px] font-bold py-[30px] px-[50px]  rounded-[20px]">PRIVATE CONVERSATIONS</div>

          <div className="p-4 rounded-[20px] bg-[#fff]">
            <div className="bg-[#FFF] overflow-y-auto flex flex-col p-[40px] gap-4 max-h-[65vh]">
              {' '}
              <div className="flex items-center">
                <hr className="w-full border-1 border-gray-300" />
                <p className="px-3 font-bold">RECENTLY</p>
                <hr className="w-full border-1 border-gray-300" />
              </div>

              {/* RECEIVING MESSAGE LAYOUT */}
              <ReceiveMessage message="Hello Sir, How are you?" time="7PM" date="03/03/03" />

              {/* SENDING MESSAGE LAYOUT */}
              <SendMessage message="Hey, I am fine." time="7PM" date="03/03/03" />

              {/* RECEIVING MESSAGE LAYOUT */}
              <ReceiveMessage message="Hello Sir, How are you?" time="7PM" date="03/03/03" />

              {/* SENDING MESSAGE LAYOUT */}
              <SendMessage message="Hey, I am fine." time="7PM" date="03/03/03" />

              {/* RECEIVING MESSAGE LAYOUT */}
              <ReceiveMessage message="Hello Sir, How are you?" time="7PM" date="03/03/03" />

              {/* SENDING MESSAGE LAYOUT */}
              <SendMessage message="Hey, I am fine." time="7PM" date="03/03/03" />
            </div>
            {/* COMPOSE NEW MESSAGE */}
            <div className="flex justify-center items-center gap-4 bg-[#fff] py-4 px-8 ">
              <input className="bg-[#DBDCDC] h-[5rem] w-full rounded-[20px] px-[30px] text-[28px]" type="text" placeholder="SEND A MESSAGE..." />
              <button className="bg-[#FFC100] h-[5rem] px-[30px] rounded-[20px] text-[28px]" type="button">SEND</button>
            </div>
          </div>
        </div>

      </section>

    </>
  );
}

export default InsideChat;
