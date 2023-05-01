/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import SideNavigation from '../general-components/SideNavigation';
import bell from '../../../images/bell.png';
import ChatInfo from './ChatInfo';
import CreateNewChatPopup from './CreateNewChatPopup';
import getChatDataEndpoint from '../../../apiendpoints/getChatDataEndpoint';
import getNotificationDataEndpoint from '../../../apiendpoints/getNotificactionDataEndpoint';

function Chat() {
  const [isOpenCreateNewChatPopup, setIsOpenCreateNewChatPopup] = useState(false);
  const [data, setData] = useState([]);
  const [chatData, setChatData] = useState([]);
  const [openNotification, setOpenNotification] = useState('false');
  const [notificationData, setNotificationData] = useState([]);

  const handleSubmit = (formData) => {
    setData([...data, formData]);
  };

  const changeState = async () => {
    setIsOpenCreateNewChatPopup(!isOpenCreateNewChatPopup);
    const UCID = localStorage.getItem('UCID_TOKEN');
    const response = await getChatDataEndpoint({ UCID });
    setChatData([...response.data.details]);
  };

  useEffect(() => {
    const asyncGetChatData = async () => {
      const UCID = localStorage.getItem('UCID_TOKEN');
      const response = await getChatDataEndpoint({ UCID });
      setChatData([...response.data.details]);
    };

    const asynGetNotificationData = async () => {
      const UCID = localStorage.getItem('UCID_TOKEN');
      const response1 = await getNotificationDataEndpoint({ UCID });
      setNotificationData([...response1.data.details]);
    };
    asynGetNotificationData();
    asyncGetChatData();
  }, []);

  return (
    <>

      {isOpenCreateNewChatPopup
        && <CreateNewChatPopup onChanging={changeState} onSubmit={handleSubmit} />}
      <SideNavigation />
      <section className="font-['poppins'] flex flex-col w-[80%] ml-[265px] h-[100vh] uppercase" style={{ width: 'calc(100vw - 280px)' }}>
        <div className="h-full ml-[70px] mr-[70px] mt-[50px] flex flex-col gap-6">
          <div className=" flex justify-between bg-[#0079BC] text-white font-[poppins] text-[44px] font-bold py-[30px] px-[50px]  rounded-[20px]">
            <div className="heading |">CHATS</div>
            <div className=" cursor-pointer w-[65px] relative border-2 flex justify-center items-center rounded-[10000px] " onClick={() => setOpenNotification(!openNotification)}>
              <img src={bell} alt="" className="w-[20px] aspect-square" />
              {!openNotification
              && (
              <div className="rounded-[20px] z-10 absolute bg-[white] py-[20px] px-[10px] bottom-0 mb-[-210px] ml-[-200px] w-[320px] border-2 h-[200px] overflow-y-auto">
                {notificationData.map((items) => (
                  <div className="flex justify-between items-center border-b-2 pb-2 gap-2">
                    <p className="text-[12px] text-black ">
                      {items.fullName}
                      {' '}
                      Sent you a message
                    </p>
                    <button type="button" className="btn1 | relative text-black bg-[#FFC93C] text-[13px] p-[5px] rounded-[10px] z-20 " onClick={() => setIsOpenCreateNewChatPopup(!isOpenCreateNewChatPopup)}>accept</button>
                  </div>
                ))}

              </div>
              )}
            </div>
          </div>
          <div className="bg-[#0079BC] h-full overflow-y-auto rounded-[20px] flex flex-col p-[40px] gap-4">
            <div className="flex justify-between items-center">
              <div className="recent-actions text-[28px] text-white">Recent Conversations</div>
              <button
                onClick={() => setIsOpenCreateNewChatPopup(!isOpenCreateNewChatPopup)}
                type="button"
                className=" uppercase rounded-[20px] text-[32px] flex justify-center items-center bg-[#FFC93C] px-[60px] py-[16px] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                {' '}
                Start a Conversation

              </button>
            </div>
            <div className="mettings flex flex-col gap-6">
              {chatData.map((items) => (
                <ChatInfo name={items.fullName} email={items.recieverEmail} UCID={items.To} />
              ))}
            </div>
          </div>
        </div>
      </section>

    </>

  );
}

export default Chat;
