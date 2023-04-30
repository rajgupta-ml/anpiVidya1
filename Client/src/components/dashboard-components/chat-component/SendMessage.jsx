/* eslint-disable react/prop-types */
import React from 'react';
import circledavatar from '../../../images/circled-avatar.svg';

function SendMessage(props) {
  const { message, time, date } = props;
  return (
    <div className="flex justify-end gap-[2rem] my-2">
      <div className="flex-col">
        <div className="bg-[#FFC100] text-[#000]] p-4 rounded-[20px] max-w-xl text-[24px]">{message}</div>
        <div className="text-[#000000ab] px-2">
          {time}
          {' '}

          {' '}
          {date}
        </div>
      </div>
      <div className="">
        <img className="w-[5rem]" src={circledavatar} alt="" />
      </div>
    </div>
  );
}

export default SendMessage;
