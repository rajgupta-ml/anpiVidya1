import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/login-css/login.css'

function LoginContainer() {
    return (
        <div>
            <div className="login-container | gap-[4.25rem] max-width-container">
                <div className="login-heading | text-7xl underline md:text-9xl"><h1>hello Again!</h1></div>
                <form action="#" className='login-form | '>
                    <div className="input-fields | flex flex-col gap-12 ">
                        <input type="text" placeholder='Enter your username' className=' log-input-field | w-[350px] h-[71px] px-8 bg-[#5BC0F8] border-4 border-black placeholder:text-black placeholder: text-[1.25rem] outline-none md:w-[495px] font-[poppins]' />
                        <input type="password" placeholder='Enter your password' className='log-input-field  | w-[350px] h-[71px] px-8 bg-[#5BC0F8] border-4 border-black placeholder:text-black placeholder: text-[1.25rem] outline-none md:w-[495px] font-[poppins]' />
                    </div>
                    <button type='submit' className='log-cta | w-full h-[5.375rem] mt-[30px] border-4 border-black outline-none bg-[#FFC100] text-[3.375rem] text-white'><h1 className='rotate-[-2.13deg]'>submit</h1></button>
                    <div className='mt-[27px]'>
                        <p>Not a member? &nbsp;<span className='text-[#FFC100] text-2xl cursor-pointer'> <NavLink to="/signup">Register Now</NavLink></span></p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default LoginContainer
