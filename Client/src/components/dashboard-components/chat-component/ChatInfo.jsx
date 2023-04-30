/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import conversation from '../../../images/conversation.svg';
import del from '../../../images/delete.svg';

// Replace id with real ID
function handleConversation(navigate) {
  navigate('/chats/:id');
}

function ChatInfo(props) {
  const { name, email } = props;
  const navigate = useNavigate();
  return (
    <div className="metting bg-[#F0F5FB] flex justify-between items-center px-[40px] py-[30px] rounded-[20px] uppercase">
      <div className="metting-description">
        <div className="heading | text-[36px]">{name}</div>
        <div className="meta-data | text-[18px] text-[#000] lowercase opacity-70">{email}</div>
      </div>
      <div className="metiing-details flex gap-10">
        <div className="flex gap-6">
          <img
            onClick={() => {
              handleConversation(navigate);
            }}
            src={conversation}
            alt=""
          />
          <img src={del} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ChatInfo;
