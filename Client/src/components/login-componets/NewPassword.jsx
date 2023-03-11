import React from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
// eslint-disable-next-line import/no-unresolved
import { toast, ToastContainer } from 'react-toastify';
import Navbar from '../general-componets/Navbar';
import key from '../../images/key.svg';
import { resetPasswordValidationSchema } from '../../helper/validate';
import resetPasswordEndpoint from '../../apiendpoints/resetPasswordEndpoint';

function NewPassword() {
  const navigate = useNavigate();
  const { id } = useParams();
  const initialValues = {
    password: '',
    confirmPassword: '',
  };
  const {
    values, errors, handleBlur, handleChange, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: resetPasswordValidationSchema,
    onSubmit: async (submitValues) => {
      try {
        await resetPasswordEndpoint(submitValues, id);
        toast.success('Password Has been successfully been reset');
        setTimeout(() => {
          navigate('/login');
        }, 4500);
      } catch (error) {
        toast.error('SomeThing went Wrong Please Try Again!');
        setTimeout(() => {
          navigate('forgotpassword');
        });
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
            <p className="text-4xl mt-6 text-[#fff]">CREATE NEW PASSWORD</p>
            <p className="text-sm mb-6 text-[#fff]">Verified! Enter your new credentials</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
              <div className="relative">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className={
                  errors.password
                    ? 'w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                    : 'w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                }
                />
                <div className={errors.password ? 'error | absolute bottom-0 right-0 mr-3 mb-2' : 'hidden'}>
                  <p className="text-[#E04F5F] pl-[0.5rem] font-[poppins] text-xs capitalize">{errors.password}</p>
                </div>
              </div>

              <div className="relative">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  type="Password"
                  placeholder="Confirm Your Password"
                  className={
                  errors.confirmPassword
                    ? 'w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                    : 'w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                }
                />
                <div className={errors.confirmPassword ? 'error | absolute bottom-0 right-0 mr-3 mb-2' : 'hidden'}>
                  <p className="text-[#E04F5F] pl-[0.5rem] font-[poppins] text-xs capitalize">{errors.confirmPassword}</p>
                </div>
              </div>
              <button
                type="submit"
                className="log-cta | w-full h-[4rem] mt-[30px] border-4 border-black outline-none bg-[#FFC100] text-[2rem] text-white md:w-[495px]"
              >
                <h1 className="rotate-[-2.13deg]">ChangePassword</h1>
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

export default NewPassword;
