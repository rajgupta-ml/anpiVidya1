import React from 'react'
import '../../css/signup-css/signup.css'
import { NavLink } from 'react-router-dom'
import arrow from '../../images/dropdownarrow.png'
import { useState } from 'react'
import { AnimatePresence, motion, spring } from 'framer-motion'

function SignupContainer() {
    const [arrowOpen, setArrowOpen] = useState(false)
    const arrowFun = () => { setArrowOpen(!arrowOpen) }
    return (
        <div>
            <div className="signup-container | gap-[4.25rem] max-width-container">
                <div className="signup-heading | text-7xl underline md:text-9xl"><h1>Signup!</h1></div>
                <form action="#" className='signup-form | '>
                    <div className="input-fields | flex flex-col gap-12 ">
                        <input type="text" placeholder='Enter your username' className=' signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#5BC0F8] border-4  border-black placeholder:text-black placeholder: text-[1.25rem] outline-none md:w-[495px]' />
                        <input type="password" placeholder='Enter your password' className='signup-input-field  | w-[350px] h-[71px] font-[poppins] px-8 bg-[#5BC0F8] border-4 border-black placeholder:text-black placeholder: text-[1.25rem] outline-none md:w-[495px]' />
                        <input type="password" placeholder='re-enter your password' className='signup-input-field  | w-[350px] h-[71px] font-[poppins] px-8 bg-[#5BC0F8] border-4 border-black placeholder:text-black placeholder: text-[1.25rem] outline-none md:w-[495px]' />
                        <div onClick={arrowFun} className="signup-input-field | cursor-pointer flex justify-between w-[350px] h-[71] px-8 py-4 border-4 border-black bg-[#5BC0F8] relative md:w-[495px]">
                            <h1 className='flex justify-center items-center text-[1.25rem]'>User Type</h1>
                            <div className="btn-container | cursor-pointer w-[28px] aspect-square" >
                                <img src={arrow} className={arrowOpen ? "rotate-180 transition-all duration-300 ease-in-out" : "rotate-360 transition-all duration-300 ease-in-out"} />
                            </div>
                            <AnimatePresence>
                                {arrowOpen &&
                                    <motion.ul
                                        initial={{ opacity: 0, y: "-50%" }}
                                        animate={{ opacity: 1, y: "0%" }}
                                        exit={{ opacity: 0, y: "-50%" }}
                                        className=" border-2 border-black cursor-pointer absolute right-0 bottom-0 mb-[-120px] flex flex-col justify-center text-[1.25rem] bg-[#5BC0F8] z-10">

                                        <li className='active | border-b-[1px] border-black p-2 px-8 hover:bg-[#0081C9] transition-all ease-in-out duration-200'>Student</li>
                                        <li className='p-2 px-8 hover:bg-[#0081C9] transition-all ease-in-out duration-200'>Teacher</li>
                                    </motion.ul>
                                }
                            </AnimatePresence>

                        </div>
                    </div>
                    <button type='submit' className='signup-cta | w-full h-[5.375rem] mt-[30px] border-4 border-black outline-none bg-[#FFC100] text-[3.375rem] text-white'><h1 className='rotate-[-2.13deg]'>submit</h1></button>
                    <div className='mt-[27px]'>
                        <p>Already a member? &nbsp;<span className='text-[#FFC100] text-2xl cursor-pointer'> <NavLink to="/login">Login</NavLink></span></p>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default SignupContainer
