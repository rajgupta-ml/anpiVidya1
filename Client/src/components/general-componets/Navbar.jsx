import React, { useState } from 'react'
import '../../css/general-css/nav.css'
import ham from '../../images/menu.png'
import close from '../../images/close.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [nav, setNav] = useState(true)
    const navbarFun = () => {
        setNav(!nav)
    }
    return (
        <div>
            <div className="primary-navigation-main-container">
                <div className="primary-navigation-container | max-width-container flex justify-between h-[6.25rem] items-center">

                    <h1 className="logo | text-white text-2xl relative z-30 md:text-5xl"><NavLink to="/">apnividya.....</NavLink></h1>
                    <nav className="m-p-nav">
                        <img src={ham} className="h-10 w-10" onClick={navbarFun} />
                        <ul className={!nav ? "m-list | fixed inset-0 bg-[#5BC0F8] flex items-center justify-center text-center ease duration-500 z-10" : "fixed right-[-100%] z-10"}>
                            <nav className='w-[90%] flex flex-col items-center'>
                                <img src={close} className="h-10 w-10 absolute top-0 right-0 m-6 mx-10" onClick={navbarFun} />


                                <li className=' text-[3.375rem] '><NavLink to="/">Home</NavLink></li>
                                <li className='  text-[3.375rem]  border-0'><NavLink to="/aboutus">ABOUT</NavLink></li>
                                <li className='text-[3.375rem]  border-0'><NavLink to="/login">login</NavLink></li>
                                <li className=' text-[3.375rem] border-0'><NavLink to="/signup">sign up</NavLink></li>
                                <div className=" border-2 border-black w-3/4 bg-black mt-10"></div>
                            </nav>

                        </ul>
                    </nav>

                    <nav className="p-nav | hidden">
                        <ul className="list | relative z-20 flex gap-12 text-center text-white">
                            <li className='text-2xl w-20'><NavLink to="/">Home</NavLink></li>
                            <li className='text-2xl w-20'><NavLink to="/aboutus">ABOUT US</NavLink></li>
                            <li className='text-2xl w-20'><NavLink to="/login">login</NavLink></li>
                            <li className='text-2xl w-20'><NavLink to="/signup">sign up</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Navbar
