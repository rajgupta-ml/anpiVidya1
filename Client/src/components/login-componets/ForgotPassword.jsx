import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from '../general-componets/Navbar';
import key from '../../images/key.svg';
import { changePasswordValidation } from '../../helper/validate';
import forgotPasswordEndpoint from '../../apiendpoints/forgotPasswordEndpoint';

function ForgotPassword() {
  const navigate = useNavigate();
  const initialValues = {
    email: '',
  };
  const {
    values, errors, handleBlur, handleChange, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: changePasswordValidation,
    onSubmit: async (submitValues) => {
      try {
        await forgotPasswordEndpoint(submitValues);
        toast('Email Successfully sent to your EmailId ');
        setTimeout(() => {
          navigate('/successfully-email-sent');
        });
      } catch (error) {
        toast('Something went wrong!');
        setTimeout(() => {
          navigate('/signup');
        }, 4500);
      }
    },
  });
  return (
    <div>
      <Navbar />
      <section className="flex justify-center">
        {' '}
        <div className="flex justify-center mt-[40px] bg-[#0079BC] max-w-[720px] rounded-[20px]">
          <div className="flex flex-col justify-center items-center m-6 ">
            <img className="w-[100px]" src={key} alt="" />
            <p className="text-4xl mt-6 text-[#fff]">FORGOT PASSWORD?</p>
            <p className="text-sm mb-6 text-[#fff]">No worries, We will send you reset instructions</p>
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={
                  errors.email
                    ? 'w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                    : 'w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                }

                />
                <div className={errors.email ? 'error | absolute bottom-0 right-0 mr-3 mb-2' : 'hidden'}>
                  <p className="text-[#E04F5F] pl-[0.5rem] font-[poppins] text-xs capitalize">{errors.email}</p>
                </div>
              </div>
              <button
                type="submit"
                className="log-cta | w-full h-[4rem] mt-[30px] border-4 border-black outline-none bg-[#FFC100] text-[2rem] text-white md:w-[495px]"
              >
                <h1 className="rotate-[-2.13deg]">REQUEST OTP</h1>
              </button>
            </form>
            <div className="mt-6 text-[#fff]">
              <NavLink to="/login">◀ Back to login</NavLink>
            </div>
          </div>
        </div>

      </section>
      <ToastContainer />
    </div>
  );
}

export default ForgotPassword;
