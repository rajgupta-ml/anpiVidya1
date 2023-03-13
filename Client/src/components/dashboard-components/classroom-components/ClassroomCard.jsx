import React from 'react';
import PropTypes from 'prop-types';

function ClassroomCard(props) {
  const { subject, days, time } = props;
  return (
    <div className="  rounded-[20px]  bg-[#fff] p-4">
      <div className="text-[18px] text-[#000] font-medium">{subject}</div>
      <div className="text-[10px] text-[#0007]">
        {days}
        &nbsp;|&nbsp;
        {time}
      </div>
    </div>
  );
}
ClassroomCard.propTypes = {
  subject: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default ClassroomCard;
