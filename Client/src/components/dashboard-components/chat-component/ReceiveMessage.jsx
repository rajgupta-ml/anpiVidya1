/* eslint-disable react/prop-types */
import React from 'react';
import circledavatar from '../../../images/circled-avatar.svg';

function ReceiveMessage(props) {
  const { message, time, date } = props;
  return (
    <>
      {/* RECEIVING MESSAGE LAYOUT */}
      <div className="flex gap-[2rem] my-2">
        <div className="">
          <img className="w-[5rem]" src={circledavatar} alt="" />
        </div>
        <div className="flex-col">
          <div className="bg-[#0081C9] text-white p-4 rounded-[20px] max-w-xl text-[24px]">{message}</div>
          <div className="text-[#000000ab] px-2">
            {time}
            {' '}

            {' '}
            {date}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReceiveMessage;
