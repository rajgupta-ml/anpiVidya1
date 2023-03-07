import React from 'react';
import { NavLink } from 'react-router-dom';
import airplane from '../../images/airplane.png';

function SuccessfullyEmailSent() {
  return (
    <div>
      <section
        className="flex flex-col item-center justify-center items-center h-[100vh]"
      >
        <div className="bg-[#0079BC] p-20 grid place-items-center gap-2 text-white">

          <img src={airplane} alt="" />
          <h1 className="text-4xl underline">Update link it&apos;s on the way</h1>
          <p className="text-base font-[poppins] w-[55%] text-center">
            For security reasons, we&apos;ve sent you
            an email that contains a link to update your password.
          </p>
          <NavLink to="/" className="log-cta | flex justify-center items-center h-[4rem] mt-[30px] border-2 border-black outline-none bg-[#FFC100] text-[2rem] text-white md:w-[495px]">Back to home</NavLink>
        </div>
      </section>

    </div>
  );
}

export default SuccessfullyEmailSent;
