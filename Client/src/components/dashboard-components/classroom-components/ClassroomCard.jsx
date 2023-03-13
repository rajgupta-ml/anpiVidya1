import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../../../images/avatar-group.svg';

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
      <div className="hidden md:flex">
        {' '}
        <div className="rounded-[20px] bg-[#fff] py-4 px-6 m-4 w-full flex justify-between items-center">
          <div>
            {' '}
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
