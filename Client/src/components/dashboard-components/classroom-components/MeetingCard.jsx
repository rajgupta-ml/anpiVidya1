/* eslint-disable react/prop-types */
import React from 'react';
import avatar from '../../../images/avatar-group.svg';

function MeetingCard(props) {
  const { meetingName, meetingDate } = props;
  const dateTimeObj = new Date(meetingDate);
  const utcDateTimeStr = dateTimeObj.toISOString();
  const gmtMeetingDate = dateTimeObj.toLocaleString('en-US', { timeZone: 'GMT' });
  const gmtDateTimeObj = new Date(utcDateTimeStr);
  return (
    <div className="metting bg-[#F0F5FB] flex justify-between items-center px-[40px] py-[20px] rounded-[20px] uppercase">
      <div className="metting-description">
        <div className="heading | text-[36px]">{meetingName}</div>
        <div className="meta-data | text-[18px] text-[#000] opacity-70">
          Started At
          {' '}
          {gmtMeetingDate}
          {' '}
          |
          {' '}
          {gmtDateTimeObj <= new Date() ? 'Closed' : 'OnGoing'}
        </div>
      </div>
      <div className="metiing-details flex gap-10">

        <div className="flex">
          <img src={avatar} className="w-[40px] mx-[-5px]" alt="" />
          <img src={avatar} className="w-[40px] mx-[-5px]" alt="" />
          <img src={avatar} className="w-[40px] mx-[-5px]" alt="" />
        </div>
        {gmtDateTimeObj > new Date()
        && <div className="button | text-[32px]  rounded-[20px] bg-[#FFC93C] px-[60px] py-[16px] boreder-2 border-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">JOIN</div>}
      </div>
    </div>
  );
}

export default MeetingCard;
