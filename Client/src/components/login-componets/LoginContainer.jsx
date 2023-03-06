import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/login-css/login.css';
import { useFormik } from 'formik';
import { loginValidation } from '../../helper/validate';
import Monkey from '../svg-componets/Monkey';

function LoginContainer() {
  const {
    // eslint-disable-next-line no-unused-vars
    values, errors, handleBlur, handleChange, handleSubmit,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: loginValidation,
    // eslint-disable-next-line no-unused-vars
    onSubmit: () => {
    },
  });
  return (
    <div className="mt-[4rem]">
      <div className="login-container | gap-[4.25rem] max-width-container">
        <form
          action="#"
          className="login-form | bg-[#0079BC] p-2 max-w-[720px] w-full flex flex-col items-center"
        >
          <div className="flex justify-center mb-[20px]">
            <Monkey />
          </div>

          <div className="input-fields | flex flex-col gap-4 ">
            <input
              type="text"
              placeholder="Enter your email"
              className=" log-input-field | w-full  h-[71px] px-8 bg-[#F0F5FB] border-4 border-black placeholder:text-black placeholder: text-[1.25rem] outline-none md:w-[495px] font-[poppins]"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="log-input-field  | w-full  h-[71px] px-8 bg-[#F0F5FB] border-4 border-black placeholder:text-black placeholder: text-[1.25rem] outline-none md:w-[495px] font-[poppins]"
            />
          </div>
          <button
            type="submit"
            className="log-cta | w-full h-[5.375rem] mt-[30px] border-4 border-black outline-none bg-[#FFC100] text-[3.375rem] text-white md:w-[495px]"
          >
            <h1 className="rotate-[-2.13deg]">submit</h1>
          </button>
          <div className="mt-[27px] w-full flex flex-col md:flex-row justify-around">
            <div>
              <NavLink to="/forgotpassword" className="text-[#fff] text-sm">FORGOT PASSWORD?</NavLink>
            </div>
            <div>
              <p className="text-[#fff] text-sm">
                Not a member?
                <NavLink to="/signup" className="text-[#FFC100] text-sm md:text-xl"> Register Now</NavLink>
              </p>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginContainer;
