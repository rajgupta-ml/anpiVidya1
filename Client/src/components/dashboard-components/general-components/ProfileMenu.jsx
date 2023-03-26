import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logout from '../../../images/logout.svg';

function handleLogout(navigate) {
  localStorage.clear();
  navigate('/');
}

function ProfileMenu() {
  const navigate = useNavigate();
  return (
    <main className="flex justify-end ">
      <section className="flex flex-col pt-4  mx-4 w-[60%] md:w-[25%] bg-[#fff] rounded-[20px] uppercase gap-[5px] font-light">
        <Link to="/profile" className="px-4 hover:bg-[#0079BC] hover:text-[#fff]">My Profile</Link>
        <Link to="/notifications" className="px-4 hover:bg-[#0079BC] hover:text-[#fff]">Notifications</Link>
        <Link to="/change-password" className="px-4 hover:bg-[#0079BC] hover:text-[#fff]">Change Password</Link>
        <Link to="/feedback" className="px-4 hover:bg-[#0079BC] hover:text-[#fff] pb-1">Report</Link>
        <button type="button" onClick={() => handleLogout(navigate)} className="flex gap-2 px-4 items-center py-1  bg-[#FFC100] rounded-b-[20px] border-t-[1px] border-black hover:font-bold">
          <div>Logout</div>
          <img src={logout} alt="" />
        </button>
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
