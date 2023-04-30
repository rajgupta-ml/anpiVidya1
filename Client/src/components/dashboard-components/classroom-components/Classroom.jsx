import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../general-components/TopNav';
import SideNavigation from '../general-components/SideNavigation';
import BottomNavigation from '../general-components/BottomNavigation';
import ClassroomCard from './ClassroomCard';
import ClassroomImg from '../../../images/classroomwhite.svg';
import getClassroomsDataendpoint from '../../../apiendpoints/getClassroomsDataendpoint';
import getStudentDataEndpoint from '../../../apiendpoints/getStudentDataEndpoint';

function Classroom() {
  const [classroomData, setClassroomData] = useState([]);

  useEffect(() => {
    const asyncGetClassroomData = (async () => {
      const UCID = localStorage.getItem('UCID_TOKEN');
      let response = '';
      if (localStorage.getItem('userType') === 'Teacher') response = await getClassroomsDataendpoint({ UCID });
      else response = await getStudentDataEndpoint({ UCID });
      setClassroomData([...response.data.details]);
    });

    asyncGetClassroomData();
  }, []);

  const navigate = useNavigate();
  return (
    <main className="flex flex-col md:flex-row">
      <TopNav title="CLASSROOMS" />
      <div className="hidden md:flex justify-center">
        <SideNavigation />
        {/* MID SECTION FOR DESKTOP */}
        <section className="font-['poppins'] flex flex-col items-center gap-4  ml-[250px]" style={{ width: 'calc(100vw - 280px)' }}>
          <div className="bg-[#0079BC] w-[80%] rounded-[20px] my-8">
            <div className="text-[#fff] font-bold text-[44px] my-8 px-8 flex gap-6">
              <img src={ClassroomImg} alt="" />
              <div>CLASSROOMS</div>
            </div>
          </div>
          <div className="bg-[#0079BC] flex flex-col gap-4 rounded-[20px] w-[80%]  ">
            <div className="flex justify-between items-center p-4">
              <div className="text-[#fff] text-[28px]">CURRENT CLASSROOMS</div>
              {localStorage.getItem('userType') === 'Teacher'
              && <button type="button" onClick={() => navigate('/create-classroom')} className="bg-[#FFC100] p-4 rounded-[20px] text-[18px] border-[1px] border-black flex justify-center items-center drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]  ">NEW CLASSROOM +</button>}
            </div>
            <div className="grid grid-cols-3 gap-[1.5rem] px-4">
              {classroomData.map((items) => (
                <ClassroomCard
                  subject={items.classroomName}
                  days="MON-FRI"
                  time="9AM"
                  CLID={items.CLID_TOKEN}
                />
              ))}

              {(classroomData.length === 0 && localStorage.getItem('Teacher')) && navigate('/create-classroom')}
            </div>
          </div>
        </section>
      </div>

      {/* MID SECTION FOR MOBILE */}
      <section className="font-['poppins'] flex justify-center items-center md:hidden ">
        <div className="flex flex-col justify-center p-6 my-8 bg-[#0079BC]  rounded-[20px] w-[80%] gap-8">
          <button type="button" onClick={() => navigate('/create-classroom')} className="bg-[#FFC100] px-4 py-6 rounded-[20px] text-[18px] border-[1px] border-black flex justify-center items-center mt-4 w-full ">NEW CLASSROOM +</button>
          <div className="flex flex-col justify-center gap-2 ">
            <div className="  rounded-[20px] text-[16px] text-[#fff] ">CURRENT CLASSROOMS</div>
            <div className="max-h-[50%] overflow-hidden flex flex-col gap-2">
              {classroomData.map((items) => (
                <div key={items.CLID}>

                  <ClassroomCard subject={items.classroomName} days="MON-FRI" time="9AM" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BottomNavigation />
    </main>
  );
}

export default Classroom;
