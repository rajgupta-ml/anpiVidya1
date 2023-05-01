/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import createNewChatsEndpoint from '../../../apiendpoints/createNewChatsEndpoint';

function CreateNewChatPopup(props) {
  const [chatDets, setChatDets] = useState({ emailId: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setChatDets({ ...chatDets, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    props.onSubmit({ emaiID: chatDets.emailId });
    try {
      await createNewChatsEndpoint({ chatDets, UCID: localStorage.getItem('UCID_TOKEN') });
      props.onChanging();
    } catch (error) {
      props.onChanging();
      alert('Sorry This contact already exist');
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
          <label htmlFor="emaiId" className="flex flex-col ">
            Email Id of the user you want to Chat
            <input required onChange={handleInputChange} type="text" placeholder="acb@gmail.com" name="emailId" values={chatDets.emailId} className="border-2 border-black p-[10px]" />
          </label>

          <input type="submit" className="bg-[#FFC93C] py-[10px] cursor-pointer border-2 text-[26px] border-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
        </form>
      </div>
    </section>
  );
}

export default CreateNewChatPopup;
