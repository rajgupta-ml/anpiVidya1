/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideNavigation from '../general-components/SideNavigation';

import getClassroomDataEndpoint from '../../../apiendpoints/getClassroomDataEndpoint';
import CreateNewMeetingPopup from './CreateNewMeetingPopup';
import MeetingCard from './MeetingCard';

function InsideClassroom() {
  const param = useParams();
  const [isInviteCode, setIsInviteCode] = useState(false);
  const [isOpenCreateNewMeetingPopup, setIsOpenCreateNewMeetingPopup] = useState(false);
  const [response, setResponse] = useState({});

  const [data, setData] = useState([]);

  const changeState = () => {
    setIsOpenCreateNewMeetingPopup(!isOpenCreateNewMeetingPopup);
  };

  const handleSubmit = (formData) => {
    setData([...data, formData]);
  };

  // the Meeting Data in Sorted in time Order

  const sortedDate = [...data].sort((a, b) => {
    const dateA = new Date(a.meetingDate);
    const dateB = new Date(b.meetingDate);
    if (dateA < dateB) {
      return 1;
    } if (dateA > dateB) {
      return -1;
    }
    return 0;
  });

  // -------------------------------------------------
  useEffect(() => {
    const asyncUseEffect = async () => {
      const res = await getClassroomDataEndpoint({ CLID: param.id });

      setResponse(res.data.details.classroomdetails);
      if (res.data.details.meetingDetails.length > 0) {
        setData([...res.data.details.meetingDetails]);
      }
    };

    asyncUseEffect();
  }, [param.id]);
  return (
    <>
      {isOpenCreateNewMeetingPopup
        && <CreateNewMeetingPopup onChanging={changeState} onSubmit={handleSubmit} />}
      <SideNavigation />

      <section className="font-['poppins'] flex flex-col w-[80%] ml-[265px] h-[100vh] max-[100vh] overflow-hidden" style={{ width: 'calc(100vw - 280px)' }}>
        <div className="h-full ml-[70px] mr-[70px] mt-[50px] flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="heading |  bg-[#0079BC] text-white font-[poppins] text-[44px] font-bold py-[30px] px-[50px] text-center rounded-[20px]">{response.classroomName}</div>
            <div className="flex gap-10">
              {isInviteCode

              && (
              <div className="flex font-['poppins'] justify-center items-center rounded-[20px] bg-[#F0F5FB] px-[80px] py-[16px] text-[26px]">
                <p className="font-bold">Invite Code: </p>
                <p className="">{response.link}</p>
              </div>
              )}
              {localStorage.getItem('userType') === 'Teacher'
              && (
              <p
                onClick={() => setIsInviteCode(!isInviteCode)}
                className="text-[32px] cursor-pointer font-[poppins] bg-[#FFC93C] text-center rounded-[20px] px-[80px] py-[16px] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                Invite

              </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-[#F0F5FB] py-[35px] px-[40px] rounded-[20px]">
            <div className="text-[36px] font-[poppins]">View All Members</div>
            <div className="button | bg-[#FFC93C] rounded-[1000px] w-[60px] aspect-square flex justify-center items-center font-bold cursor-pointer">{'->'}</div>
          </div>

          <div className={sortedDate.length > 0 ? 'bg-[#0079BC] h-full overflow-y-auto rounded-[20px] flex flex-col p-[40px] gap-4' : '  flex flex-col justify-around items-center '}>
            <div className="flex justify-between items-center w-full border-b-2 pb-4">
              <div className="recent-actions text-[28px] text-white">Recent Actions</div>

              {localStorage.getItem('userType') === 'Teacher'
              && (
              <button
                onClick={() => setIsOpenCreateNewMeetingPopup(!isOpenCreateNewMeetingPopup)}
                type="button"
                className=" uppercase rounded-[20px] text-[32px] flex justify-center items-center bg-[#FFC93C] px-[60px] py-[16px] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                {' '}
                Create New Metting

              </button>
              )}
            </div>
            {' '}
            {sortedDate.length === 0
                && <div className=" pt-10 text-center text-[26px] text-white h-full w-[20%] font-[poppins] capitalize ">No Meetings are there to attend please create a new meeting</div>}
            <div className="mettings flex flex-col gap-6">
              {sortedDate.map((item) => (

                <MeetingCard meetingName={item.meetingName} meetingDate={item.meetingDate} />
              ))}

            </div>

          </div>
        </div>
      </section>

    </>
  );
}
export default InsideClassroom;
