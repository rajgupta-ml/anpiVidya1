import React from 'react';
import PropTypes from 'prop-types';

function ChatCard(props) {
  const { userName, message, time } = props;
  return (
    <div className="  rounded-[20px]  bg-[#fff] p-4">
      <div className="text-[18px] text-[#000] font-medium">{userName}</div>
      <div className="text-[10px] text-[#0007]">
        {message}
        &nbsp;|&nbsp;
        {time}
      </div>
    </div>
  );
}
ChatCard.propTypes = {
  userName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default ChatCard;
