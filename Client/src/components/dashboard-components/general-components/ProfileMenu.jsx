import React from 'react';
import logout from '../../../images/logout.svg';

function ProfileMenu() {
  return (
    <main className="flex justify-end ">
      <section className="flex flex-col pt-4  mx-4 w-[60%] md:w-[25%] bg-[#fff] rounded-[20px] uppercase gap-[5px] font-light">
        <div className="px-4 hover:bg-[#0079BC] hover:text-[#fff]">My Profile</div>
        <div className="px-4 hover:bg-[#0079BC] hover:text-[#fff]">Notifications</div>
        <div className="px-4 hover:bg-[#0079BC] hover:text-[#fff]">Change Password</div>
        <div className="px-4 hover:bg-[#0079BC] hover:text-[#fff] pb-1">Feedback</div>
        <div className="flex gap-2 px-4 items-center py-1  bg-[#FFC100] rounded-b-[20px] border-t-[1px] border-black hover:font-bold">
          <div>Logout</div>
          <img src={logout} alt="" />
        </div>
      </section>

    </main>

  );
}

export default ProfileMenu;

// eslint-disable-next-line no-lone-blocks
{ /* <div className="profile-menu">
      <ul>
        <li>Edit Profile</li>
        <li>Change Password</li>
        <li>Logout</li>
      </ul>
    </div> */ }
