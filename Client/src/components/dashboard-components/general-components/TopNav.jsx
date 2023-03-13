import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfileMenu from './ProfileMenu';
import avatar from '../../../images/avatar.svg';

function TopNav(props) {
  const { title } = props;
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    // TOP NAVIGATION
    <section className="font-['poppins'] md:hidden">
      <div className="flex justify-center items-center m-4">
        <div className="bg-[#FFC100] p-3 w-[80%] rounded-[20px] text-[24px] border-[1px] border-black ">{title}</div>
        <div className="bg-[#fff] rounded-full ml-[-30px] border-[1px] border-black w-[80px] h-[80px] flex justify-center items-center">
          <img onClick={handleMenuToggle} role="presentation" className="w-[60px] rounded-full" src={avatar} alt="" />
        </div>
      </div>
      {showMenu && <ProfileMenu />}
    </section>
  );
}

TopNav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopNav;
