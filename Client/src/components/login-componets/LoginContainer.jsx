import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/login-css/login.css'
import { useFormik } from 'formik'
import { loginValidation } from '../../helper/validate'
import Monkey from '../svg-componets/Monkey'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function LoginContainer() {

    const API = "http://localhost:8080/api/auth"
    const config = {
        Headers: {
            "Content-Type": "application/json"
        }
    }

    const navigate = useNavigate();
    useEffect(()=> {
        let login = localStorage.getItem('token');
        if (!login) {
            navigate('/login')
        }
    });
    const { values, errors, handleBlur, handleChange, handleSubmit
    } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate: loginValidation,
        onSubmit: (values) => {
            submitDetails(values, `${API}/login`);
        }

    })

    async function submitDetails(values, URL) {
        const { email, password} = values
        console.log({ email, password})
        try {
            const response = await axios.post(URL, { email, password}, config);
            console.log(response);
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <div className="login-container | gap-[4.25rem] max-width-container">
                <form action="#" className='login-form | bg-[#0079BC] p-2 max-w-[720px] w-full flex flex-col items-center'>
                    <div className='flex justify-center mb-[20px]'>
                        <Monkey />
                    </div>

                    <div className="input-fields | flex flex-col gap-4 ">
                        <input type="text" placeholder='Enter your email' className=' log-input-field | w-full  h-[71px] px-8 bg-[#F0F5FB] border-4 border-black placeholder:text-black placeholder: text-[1.25rem] outline-none md:w-[495px] font-[poppins]' />
                        <input type="password" placeholder='Enter your password' className='log-input-field  | w-full  h-[71px] px-8 bg-[#F0F5FB] border-4 border-black placeholder:text-black placeholder: text-[1.25rem] outline-none md:w-[495px] font-[poppins]' />
                    </div>
                    <button type='submit' className='log-cta | w-full h-[5.375rem] mt-[30px] border-4 border-black outline-none bg-[#FFC100] text-[3.375rem] text-white md:w-[495px]'><h1 className='rotate-[-2.13deg]'>submit</h1></button>
                    <div className='mt-[27px]'>
                        <p>Not a member? &nbsp;<span className='text-[#FFC100] text-2xl cursor-pointer'> <NavLink to="/signup">Register Now</NavLink></span></p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default LoginContainer
