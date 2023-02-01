import React from 'react'
import '../../css/signup-css/signup.css'
import { NavLink } from 'react-router-dom'
import arrow from '../../images/dropdownarrow.png'
import { useState } from 'react'
import { useFormik } from 'formik'
import { registerValidate } from '../../helper/validate'
import Monkey from '../svg-componets/Monkey'
import axios from 'axios';


function SignupContainer() {
    const API = "http://localhost:8080/api/auth"
    const config = {
        Headers: {
            "Content-Type": "application/json"
        }
    }
    const [arrowOpen, setArrowOpen] = useState(false)
    const arrowFun = () => { setArrowOpen(!arrowOpen) }
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        userType: '',
    }
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validate: registerValidate,
        onSubmit: (values) => {
            submitDetails(values, `${API}/register`);


        }
    })




    async function submitDetails(values, URL) {
        const { email, password, userType } = values
        console.log({ email, password, userType })
        try {
            const response = await axios.post(URL, { email, password, userType }, config);
            console.log(response);
        } catch (error) {
            console.log(error)
            // if ((error.response.data.error).match("email")) console.log("duplicate email");
        }

    }

    return (
        <div>
            <div className="signup-container | flex flex-col justify-center items-center max-width-container ">

                <form className='signup-form ' onSubmit={handleSubmit}>
                    <div className='flex justify-center mb-[20px] '>
                        <Monkey />
                    </div>

                    <div className="input-fields | flex flex-col gap-4 ">
                        <div className='relative'>

                            <input values={values.email} onChange={handleChange} onBlur={handleBlur} name="email" type="email" placeholder='Enter your email' className={errors.email ? "signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]" : "signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]"} />
                            {/* <img src={accept} alt="" className={!errors.email ? 'error-icon | absolute top-[35%] right-[5%]' : "hidden"} />
                            <img src={close} alt="" className={errors.username ? 'error-icon | absolute top-[23%] right-[5%] ' : "hidden"} /> */}
                            <div className={errors.email ? "error mt-2" : "hidden"}>
                                <p className='text-[#E04F5F] pl-[0.5rem]'>{errors.email}</p>
                            </div>
                        </div>
                        <div className='relative'>
                            <input values={values.password} onChange={handleChange} onBlur={handleBlur} name="password" type="password" placeholder='Enter your password' className={errors.password ? "signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]" : "signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]"} />

                            {/* <img src={accept} alt="" className={!errors.password ? 'error-icon | absolute top-[35%] right-[5%]' : "hidden"} />
                            <img src={close} alt="" className={errors.password ? 'error-icon | absolute top-[23%] right-[5%] ' : "hidden"} /> */}
                            <div className={errors.password ? "error mt-2" : "hidden"}>
                                <p className='text-[#E04F5F] pl-[0.5rem]'>{errors.password}</p>
                            </div>

                        </div>
                        <div className='relative'>
                            <input values={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} name="confirmPassword" type="password" placeholder='re-enter your password' className={errors.confirmPassword ? "signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]" : "signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]"} />
                            {/* 
                            <img src={accept} alt="" className={!errors.confirmPassword ? 'error-icon | absolute top-[35%] right-[5%]' : "hidden"} />
                            <img src={close} alt="" className={errors.confirmPassword ? 'error-icon | absolute top-[23%] right-[5%] ' : "hidden"} /> */}
                            <div className={errors.confirmPassword ? "error mt-2" : "hidden"}>
                                <p className='text-[#E04F5F] pl-[0.5rem]'>{errors.confirmPassword}</p>
                            </div>
                        </div>
                        <div className="divSelectDropdownContainer | relative">
                            <select onClick={arrowFun} values={values.userType} onChange={handleChange} onBlur={handleBlur} name="userType" className={errors.userType ? "signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]" : "signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]"}>
                                <option value="" >User Type</option>
                                <option value="Student"> Student</option>
                                <option value="Teacher"> Teacher</option>
                            </select>
                            <div className="selectArrow absolute top-[8px] right-[10px] bg-[#F0F5FB] h-[80%] w-[60px] grid place-content-center pointer-events-none border-l-[1px] border-black ">
                                <img src={arrow} className={
                                    !arrowOpen ? "h-[28px] aspect-square transition-all duration-200 ease-in-out" : "rotate-180 h-[28px] aspect-square transition-all duration-200 ease-in-out"} alt="" />
                            </div>


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
