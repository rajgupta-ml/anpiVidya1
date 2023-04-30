/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import createMeetingEndpoint from '../../../apiendpoints/createMeetingEndpoint';

function CreateNewMeetingPopup(props) {
  const param = useParams();
  const [meetingDets, setMeetingDets] = useState({ meetingName: '', meetingDate: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMeetingDets({ ...meetingDets, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    props.onSubmit({ meetingName: meetingDets.meetingName, meetingDate: meetingDets.meetingDate });
    try {
      await createMeetingEndpoint({ meetingDets, CLID: param.id });
      props.onChanging();
    } catch (error) {
      alert('Something went wrong');
    }
  };
  return (
    <section className="absolute inset-0 z-10 bg-black/[.8]  flex justify-center items-center">
      <div className="bg-[#fff] w-[30%] p-[20px] relative z-20 ">
        <div className="flex justify-between items-center border-b-2 mb-5">
          <h1 className="text-[30px]">Create New Meeting</h1>
          <button type="button" className="text-[30px] cursor-pointer bg-white " onClick={props.onChanging}>X</button>
        </div>
        <form className="flex flex-col h-full gap-5" onSubmit={handleSubmit}>
          <label htmlFor="MeetingName" className="flex flex-col ">
            Metting Name
            <input required onChange={handleInputChange} type="text" placeholder="Maths" name="meetingName" values={meetingDets.meetingName} className="border-2 border-black p-[10px]" />
          </label>

          <label htmlFor="dateAndTime" className="flex flex-col">
            Meeting is Scheduled Till
            <input required type="datetime-local" id="dateAndTime" name="meetingDate" className="border-2 border-black p-[10px]" values={meetingDets.meetingDate} onChange={handleInputChange} />
          </label>

          <input type="submit" className="bg-[#FFC93C] py-[10px] cursor-pointer border-2 text-[26px] border-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
        </form>
      </div>
    </section>
  );
}

export default CreateNewMeetingPopup;
