import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../css/login-css/login.css';
import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import { loginValidationSchema } from '../../helper/validate';
import loginEndpoint from '../../apiendpoints/loginEndpoint';
import 'react-toastify/dist/ReactToastify.min.css';

function LoginContainer() {
  const naviagte = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };
  const {
    values, errors, handleBlur, handleSubmit, handleChange,
  } = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (submitValues) => {
      try {
        const response = await loginEndpoint(submitValues);
        localStorage.setItem('JWT_TOKEN', response.data.userData.JWT_TOKEN);
        localStorage.setItem('full_Name', response.data.userData.fullName);
        localStorage.setItem('UCID_TOKEN', response.data.userData.UCID_TOKEN);
        localStorage.setItem('userType', response.data.userData.type);
        toast.success('Login Successfull');
        naviagte('/dashboard');
      } catch (error) {
        if ((error.response.data.err) === 'User not found') {
          toast.error('Looks Like You are not an user');
          setTimeout(() => {
            naviagte('/signup');
          }, 4500);
        } else if (error.response.data.err === 'Password Does not Match') {
          toast.error('Looks like you have entered the wrong password');
        } else {
          toast.error('Something went Wrong!, Please try again after some time');
        }
      }
    },
  });
  return (

    <div className="">
      <div className="login-container | gap-[4.25rem] max-width-container">
        <form
          action="#"
          className="login-form | bg-[#0079BC] p-2 max-w-[720px] w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center mb-[20px] text-[5rem] text-[#fff] ">
            LOGIN
          </div>

          <div className="input-fields | flex flex-col gap-4 ">
            <div className="relative">

              <input
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.email}
                type="email"
                placeholder="Enter your email"
                className={errors.email
                  ? ' log-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                  : 'log-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]'}
                name="email"
              />
              <div className={errors.email ? 'error absolute bottom-0 right-0 mr-3 mb-2' : 'hidden'}>
                <p className="text-[#E04F5F] pl-[0.5rem] font-[poppins] text-xs capitalize">{errors.email}</p>
              </div>
            </div>
            <div className="relative">

              <input
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.password}
                name="password"
                type="password"
                placeholder="Enter your password"
                className={
                errors.password
                  ? ' log-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                  : 'log-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]'
}
              />
              <div className={errors.password ? 'error | absolute bottom-0 right-0 mr-3 mb-2' : 'hidden'}>
                <p className="text-[#E04F5F] pl-[0.5rem] font-[poppins] text-xs capitalize">{errors.password}</p>
              </div>
            </div>
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
      <ToastContainer />
    </div>
  );
}

export default LoginContainer;
