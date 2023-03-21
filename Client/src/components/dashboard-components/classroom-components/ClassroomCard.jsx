import React from 'react';
import PropTypes from 'prop-types';
// import avatar from '../../../images/avatar-group.svg';
// import classicon from '../../../images/classicon.svg';
import threedots from '../../../images/threedots.svg';

function ClassroomCard(props) {
  const { subject, days, time } = props;
  return (
    <main>
      {/* Classroom card for mobile */}
      <div className="rounded-[20px]  bg-[#fff] p-4 md:hidden">
        <div className="text-[18px] text-[#000] font-medium">{subject}</div>
        <div className="text-[10px] text-[#0007]">
          {days}
        &nbsp;|&nbsp;
          {time}
        </div>
      </div>

      {/* Classroom card for desktop */}
      {/* <div className="hidden md:flex">
        <div className=" bg-[#fff] py-4 px-6 m-4 w-full flex justify-between items-center">
          <div>
            <div className=" text-[36px]">{subject}</div>
            <div className="text-[#0007] text-[18px] font-medium">
              {days}
        &nbsp;|&nbsp;
              {time}
            </div>
          </div>
          <div className="flex mr-6">
            <img src={avatar} className="w-[30px] mx-[-5px]" alt="" />
            <img src={avatar} className="w-[30px] mx-[-5px]" alt="" />
            <img src={avatar} className="w-[30px] mx-[-5px]" alt="" />
          </div>
        </div>
      </div> */}
      <div className="hidden md:flex rounded-[20px] bg-[#fff] justify-between items-start h-[16rem] p-4">
        <div className="flex justify-between items-center w-full">
          {/* <img src={classicon} alt="" /> */}
          <p className="text-[#fff] text-[2rem] font-bold w-[4rem] aspect-square rounded-[20px] bg-[#0079BC] grid place-content-center">{subject[0]}</p>
          <div className="flex flex-col">
            <div>{subject}</div>
            <div>
              {days}
              &nbsp;|&nbsp;
              {time}
            </div>
          </div>
          <img src={threedots} alt="" />
        </div>
        <div />
        <div />

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
