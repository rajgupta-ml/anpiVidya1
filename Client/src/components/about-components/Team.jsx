import React from 'react';
import '../../css/about-css/team.css';
import Swtch from './Swtch';
import tablet from '../../images/tablet.svg';

function Team() {
  return (
    <div className="Team-main-container |">
      <div className="teams-heading | flex justify-center items-center w-full text-[#0192E2] "><h1>Teams</h1></div>
      <div className="teams-content-container | max-width-container flex flex-col-reverse justify-center items-center">
        <div className="switchs-container | flex flex-col gap-4">
          {['Anurag Sinha', 'Nirvikar', 'Aditya Raj', 'Jayant Kumar', 'Raj Gupta'].map((val) => <Swtch name={val} />)}
        </div>
        <div className="table-container | mb-[117px] ">
          <img src={tablet} alt="" />
        </div>
      </div>

    </div>
  );
}

export default Team;
