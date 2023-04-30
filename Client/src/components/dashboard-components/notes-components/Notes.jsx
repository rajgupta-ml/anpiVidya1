/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import React, { useState } from 'react';
import TopNav from '../general-components/TopNav';
import SideNavigation from '../general-components/SideNavigation';
import BottomNavigation from '../general-components/BottomNavigation';
import smartNotesApiEndpoint from '../../../apiendpoints/smartNotesApiEndpoint';

async function handleSubmit(e, notesHeading) {
  e.preventDefault();
  const result = document.getElementById('result');
  const retval = await smartNotesApiEndpoint({ inputNote: notesHeading });
  result.innerHTML = retval.data.summary;
}

function Notes() {
  const [notesHeading, setNotesHeading] = useState('');
  //   console.log(notesHeading);

  return (
    <main>
      <TopNav title="NEW CLASSROOM" />
      <div className="hidden md:flex justify-center">
        <SideNavigation />
      </div>
      {/* MIDDLE SECTION FOR DESKTOP */}
      <section className="font-['poppins'] flex flex-col w-[80%] ml-[265px] h-[100vh] " style={{ width: 'calc(100vw - 280px)' }}>
        <div className="h-full ml-[70px] mr-[70px] mt-[50px] flex flex-col gap-6">
          <div className="heading | bg-[#0079BC] text-white font-[poppins] text-[44px] font-bold py-[30px] px-[50px]  rounded-[20px]">AI-POWERED SMART NOTES</div>
          <div className="bg-[#0079BC] h-[80vh] overflow-y-auto rounded-[20px] flex flex-col justify-start p-[40px] gap-4">
            <div className="flex justify-around min-h-[20rem] min-w-[50rem] ">
              <form onSubmit={(e) => handleSubmit(e, notesHeading)}>
                <div className="text-[44px] text-white font-bold my-4 text-center">GPT-enabled prompt</div>
                <input
                  type="text"
                  onChange={(e) => {
                    setNotesHeading(e.target.value);
                  }}
                  className="rounded-[20px] h-[4rem] px-4 py-2 w-full text-[24px]"
                  id="note"
                  name="note"
                  placeholder="POINT TO BE SUMMERIZED"
                />
                <button type="submit" className="bg-[#FFC100] text-[28px] px-4 py-3 rounded-[20px] w-full border-[1px] border-black flex justify-center items-center mt-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">GENERATE</button>
              </form>
              <div className="min-w-[40rem] max-w-[40rem] text-[24px] text-white ">
                The OpenAI API is a set of machine learning models and algorithms that are made available for developers to use in their own applications. The API provides access to state-of-the-art natural language processing (NLP) models, including text generation, summarization, question-answering, sentiment analysis, and language translation.
              </div>
            </div>
            <div className=" text-[28px] text-white " id="result" />
          </div>
        </div>
      </section>
      <BottomNavigation />
    </main>
  );
}

export default Notes;

{ /* <section className="flex justify-center items-center">
        <div className="font-['poppins'] flex flex-col md:justify-center items-center h-[100vh] w-full">
          <form onSubmit={(e) => handleSubmit(e, notesHeading)} className="flex flex-col justify-center items-center p-8  gap-4 bg-[#0079BC] rounded-[20px] w-[80%] md:w-[30%]">
            <div className="rounded-[10px] text-[18px] text-[#fff] bg-[#0081C9] flex justify-center items-center p-4 w-full ">
              <div className="w-full flex justify-center items-center">CREATE SMART NOTES!</div>
            </div>

            <input
              onChange={(e) => {
                setNotesHeading(e.target.value);
              }}
              className="rounded-[20px] px-4 py-2 w-full"
              type="text"
              id="note"
              name="note"
              placeholder="Enter topic here"
            />
            <button type="submit" className="bg-[#FFC100] px-4 py-3 rounded-[20px] text-[18px] w-full border-[1px] border-black flex justify-center items-center mt-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">SUBMIT</button>
            <textarea rows={10} className="rounded-[20px] px-4 py-2 w-full text-[#000]" placeholder="AI Generated Summary..." id="result" disabled />
          </form>
        </div>
      </section> */ }
