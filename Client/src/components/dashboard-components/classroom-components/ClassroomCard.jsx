/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import avatar from '../../../images/avatar-group.svg';
import threedots from '../../../images/threedots.svg';
// import ProfileMenu from '../general-components/ProfileMenu';

function ClassroomCard(props) {
  const navigate = useNavigate();
  const {
    subject, days, time, CLID,
  } = props;
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleOpenClassroom = (e) => {
    e.preventDefault();
    navigate(`/classroom/${CLID}`);
  };
  return (
    <main>
      {/* Classroom card for mobile */}
      <div className="rounded-[20px]  bg-[#fff] p-4 md:hidden">
        <div title={subject} className="text-[18px] text-[#000] font-medium">{subject.length > 15 ? `${subject.substring(0, 15)}...` : subject}</div>
        <div className="text-[10px] text-[#0007]">
          {days}
        &nbsp;|&nbsp;
          {time}
        </div>
      </div>

      {/* Classroom card for desktop */}
      <div className="hidden md:flex flex-col rounded-[20px] bg-[#fff] justify-between items-start h-[16rem] p-4 cursor-pointer" onClick={(e) => handleOpenClassroom(e)}>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4 items-center">
            <p className="text-[#000] text-[2rem] font-bold w-[4rem] aspect-square rounded-[20px] bg-[#FFC100] grid place-content-center">{subject[0]}</p>
            <div className="flex flex-col">
              <div title={subject} className="text-[1.5rem] ">{subject.length > 14 ? `${subject.substring(0, 14)}...` : subject}</div>
              <div className="text-[#0007] text-[12px]">
                {days}
              &nbsp;|&nbsp;
                {time}
              </div>
            </div>
          </div>
          <div className="relative cursor-pointer">
            <img onClick={handleMenuToggle} role="presentation" src={threedots} alt="" />
            {showMenu
          && (
          <div className="absolute ml-[-50px] mt-[10px] border-[0.5px] border-black bg-[#F0F5FB] w-[100px] p-4 flex flex-col gap-2">
            <div className="cursor-pointer hover:bg-[#BFD4E2] w-full">DELETE</div>
            <div className="cursor-pointer hover:bg-[#BFD4E2] w-full">EDIT</div>
          </div>
          ) }
          </div>
        </div>
        <div className="flex flex-col justify-between w-full gap-4">

          <div className="description">

            DBMS is a software used to manage, store, retrieve and secure data efficiently.
          </div>

          <div className="flex justify-between w-full items-center text-[12px]">
            <div className="rounded-[6px] bg-[#E1D0FE] px-4 py-[4px] text-[#BF9DFF] font-bold">TAG</div>
            <div className="border-[1px] rounded-[6px] border-[#ff0000] px-2 py-[4px] text-[#ff0000]">HIGH PRIORITY</div>
          </div>
          <div className="flex justify-between w-full">
            <div className="bg-[#BFD4E2] rounded-[6px] px-4 py-2 text-[#2A709F] font-bold text-[12px] text-center">DUE DATE: 20/03/23</div>
            <div className="flex w-[100px] justify-center items-center">
              <img src={avatar} className="w-[30px] mx-[-5px]" alt="" />
              <img src={avatar} className="w-[30px] mx-[-5px]" alt="" />
              <img src={avatar} className="w-[30px] mx-[-5px]" alt="" />
            </div>
          </div>

        </div>
      </div>

    </main>

  );
}
ClassroomCard.propTypes = {
  subject: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default ClassroomCard;
