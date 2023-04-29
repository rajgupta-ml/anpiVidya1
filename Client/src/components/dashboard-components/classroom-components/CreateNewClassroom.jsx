import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import TopNav from '../general-components/TopNav';
import SideNavigation from '../general-components/SideNavigation';
import BottomNavigation from '../general-components/BottomNavigation';
import handleClassroomCreationEndpoint from '../../../apiendpoints/handleClassroomCreationEndpoint';

async function handleClassroomCreation(e, classroomName, navigate) {
  e.preventDefault();
  try {
    const details = await handleClassroomCreationEndpoint(classroomName);
    setTimeout(() => {
      navigate(`/classroom/${details.data.details.clid}`);
    }, 4500);
    toast.success('Classroom Creation Successfull');
  } catch (error) {
    toast.error('Looks Like You are not an user');
  }
}

function CreateNewClassroom() {
  const [classroomName, setClassroomName] = useState('');
  const navigate = useNavigate();
  return (
    <main>
      <TopNav title="NEW CLASSROOM" />
      <div className="hidden md:flex justify-center">
        <SideNavigation />
        {/* MIDDLE SECTION FOR DESKTOP */}
        <section className="font-['poppins'] flex flex-col justify-center items-center ml-[250px] h-[100vh]" style={{ width: 'calc(100vw - 280px)' }}>

          <div className="flex flex-col justify-center items-center p-8 m-8 gap-4 bg-[#0079BC] rounded-[20px]" style={{ width: 'min(100% - 5rem , 510px)', height: 'min(100% - 5rem ,460px' }}>
            <div className="rounded-[10px] text-[18px] text-[#fff] bg-[#0081C9] flex justify-center items-center p-4 w-full ">
              <div className="w-full flex justify-center items-center">CREATE A CLASSROOM</div>
            </div>
            <form
              className="w-full"
              onSubmit={
              (e) => handleClassroomCreation(e, classroomName, navigate)
              }
            >
              <input
                onChange={(e) => setClassroomName(e.target.value)}
                className="rounded-[10px] px-4 py-2 w-full"
                type="text"
                placeholder="Enter class name"
              />

              <button
                type="submit"
                className="bg-[#FFC100]
                px-4 py-3
                rounded-[20px]
                text-[18px]
                w-full border-[1px] border-black flex justify-center items-center mt-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                CREATE +

              </button>

            </form>

          </div>
          <ToastContainer />
        </section>
      </div>

      {/* MID SECTION FOR MOBILE */}
      <section className="font-['poppins'] flex justify-center items-center md:hidden ">
        <div className="flex flex-col justify-center items-center p-8 m-8 gap-4 bg-[#0079BC] rounded-[20px] w-[80%]">
          <div className="rounded-[10px] text-[18px] text-[#fff] bg-[#0081C9] flex justify-center items-center p-4 ">
            <div>CREATE A CLASSROOM</div>
          </div>
          <input className="rounded-[10px] px-4 py-2" type="text" placeholder="Enter class name" />
          <button type="button" className="bg-[#FFC100] px-4 py-3 rounded-[20px] text-[18px] w-full border-[1px] border-black flex justify-center items-center mt-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">CREATE +</button>
        </div>
      </section>
      <BottomNavigation />

    </main>
  );
}

export default CreateNewClassroom;
