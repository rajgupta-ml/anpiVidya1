/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import SideNavigation from '../general-components/SideNavigation';
import ReceiveMessage from './ReceiveMessage';
import SendMessage from './SendMessage';
import addMessageEndpoint from '../../../apiendpoints/addMessageEndpoint';
import getAllMessagesEndpoint from '../../../apiendpoints/getAllMessagesEndpoint';

function InsideChat() {
  const params = useParams();
  const [message, setMessage] = useState({ message: '' });
  const [allMessages, setAllMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io('http://localhost:3002');
    socket.current.emit('add-user', localStorage.getItem('UCID_TOKEN'));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMessage({ ...message, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addMessageEndpoint({ from: localStorage.getItem('UCID_TOKEN'), to: params.id, message: message.message });
    allMessages.push({ fromSelf: true, message: message.message });
    socket.current.emit('send-msg', {
      to: params.id,
      from: localStorage.getItem('UCID_TOKEN'),
      message: message.message,
    });

    const msgs = [...allMessages];
    allMessages.push({ fromSelf: true, message: message.message });
    setAllMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on('msg-recieve', (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);
  useEffect(() => {
    if (arrivalMessage) {
      setAllMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);

  console.log(allMessages);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: 'smooth' });
  }, [allMessages]);

  useEffect(() => {
    const asyncFun = async () => {
      const response = await getAllMessagesEndpoint({ from: localStorage.getItem('UCID_TOKEN'), to: params.id });
      setAllMessages(response.data.messages);
    };

    asyncFun();
  }, []);

  return (
    <>
      <SideNavigation />
      <section className="font-['poppins'] flex flex-col w-[80%] ml-[265px] h-[100vh] " style={{ width: 'calc(100vw - 280px)' }}>
        <div className="h-full ml-[70px] mr-[70px] mt-[50px] flex flex-col gap-6">
          <div className="heading | bg-[#0079BC] text-white font-[poppins] text-[44px] font-bold py-[30px] px-[50px]  rounded-[20px]">PRIVATE CONVERSATIONS</div>

          <div className="p-4 rounded-[20px] bg-[#fff]">
            <div className="bg-[#FFF] overflow-y-auto flex flex-col p-[40px] gap-4 max-h-[65vh]">
              {' '}
              <div className="flex items-center">
                <hr className="w-full border-1 border-gray-300" />
                <p className="px-3 font-bold">RECENTLY</p>
                <hr className="w-full border-1 border-gray-300" />
              </div>

              {allMessages.map((mssage) => (mssage.fromSelf ? <SendMessage message={mssage.messages || mssage.message} /> : <ReceiveMessage message={mssage.messages || mssage.message} />)) }

            </div>
            {/* COMPOSE NEW MESSAGE */}
            <form onSubmit={handleSubmit} className="flex justify-center items-center gap-4 bg-[#fff] py-4 px-8 ">

              <input onChange={handleChange} values={message.message} name="message" className="bg-[#DBDCDC] h-[5rem] w-full rounded-[20px] px-[30px] text-[28px]" type="text" placeholder="SEND A MESSAGE..." />
              <button
                className="bg-[#FFC100] h-[5rem] px-[30px] rounded-[20px] text-[28px]"
                type="submit"
              >
                SEND

              </button>

            </form>
          </div>
        </div>

      </section>

    </>
  );
}

export default InsideChat;
