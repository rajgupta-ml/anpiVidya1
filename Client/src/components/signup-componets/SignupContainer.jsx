import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../../css/signup-css/signup.css';
import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import arrow from '../../images/dropdownarrow.png';
import { registerValidationSchema } from '../../helper/validate';
import Monkey from '../svg-componets/Monkey';
import registrationEndpoint from '../../apiendpoints/registrationEndpoint';
import 'react-toastify/dist/ReactToastify.min.css';

function SignupContainer() {
  const navigate = useNavigate();
  const [arrowOpen, setArrowOpen] = useState(false);
  const arrowFun = () => {
    setArrowOpen(!arrowOpen);
  };
  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    institution: '',
    userType: '',
  };
  const {
    values, errors, handleBlur, handleChange, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: registerValidationSchema,
    onSubmit: async (submitValues) => {
      try {
        await registrationEndpoint(submitValues);
        toast.success('You Have Registerd Successfully');
        setTimeout(() => {
          navigate('/login');
        }, 4500);
      } catch (error) {
        if (error.response.data.err.split(' ')[0] === 'E11000') {
          toast.error('This Email Id is Already Registered', { autoClose: false });
        } else {
          toast.error('Something Went Wrong!');
        }
      }
    },
  });
  return (
    <div>
      <div className="signup-container | flex flex-col justify-center items-center max-width-container ">
        <form className="signup-form " onSubmit={handleSubmit}>
          <div className="flex justify-center mb-[20px] ">
            <Monkey />
          </div>

          <div className="input-fields | flex flex-col gap-4 ">
            <div className="relative">
              <input
                values={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                name="fullName"
                type="text"
                placeholder="Enter your Full Name"
                className={
                  errors.fullName
                    ? 'signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                    : 'signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                }
              />
              <div className={errors.fullName ? 'error | absolute bottom-0 right-0 mr-3 mb-2' : 'hidden'}>
                <p className="text-[#E04F5F] pl-[0.5rem] font-[poppins] text-xs capitalize">{errors.fullName}</p>
              </div>
            </div>
            <div className="relative">
              <input
                values={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                type="email"
                placeholder="Enter your email"
                className={
                  errors.email
                    ? 'signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                    : 'signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                }
              />
              <div className={errors.email ? 'error | absolute bottom-0 right-0 mr-3 mb-2' : 'hidden'}>
                <p className="text-[#E04F5F] pl-[0.5rem] font-[poppins] text-xs capitalize">{errors.email}</p>
              </div>
            </div>
            <div className="relative">
              <input
                values={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                type="password"
                placeholder="Enter your password"
                className={
                  errors.password
                    ? 'signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                    : 'signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                }
              />

              {/* <img src={accept} alt="" className={!errors.password ? 'error-icon |
               absolute top-[35%] right-[5%]' : "hidden"} />
                            <img src={close} alt="" className={errors.password ?
                            'error-icon | absolute top-[23%] right-[5%] ' : "hidden"} /> */}
              <div className={errors.password ? 'error | absolute bottom-0 right-0 mr-3 mb-2' : 'hidden'}>
                <p className="text-[#E04F5F] pl-[0.5rem] font-[poppins] text-xs capitalize">{errors.password}</p>
              </div>
            </div>
            <div className="relative">
              <input
                values={values.institution}
                onChange={handleChange}
                onBlur={handleBlur}
                name="institution"
                type="text"
                placeholder="Enter your instiuttion"
                className={
                  errors.institution
                    ? 'signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                    : 'signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                }
              />
              {/*
                            <img src={accept} alt="" className={!errors.institution ?
                              'error-icon | absolute top-[35%] right-[5%]' : "hidden"} />
                            <img src={close} alt="" className={errors.institution ?
                            'error-icon | absolute top-[23%] right-[5%] ' : "hidden"} /> */}
              <div className={errors.institution ? 'error | absolute bottom-0 right-0 mr-3 mb-2' : 'hidden'}>
                <p className="text-[#E04F5F] pl-[0.5rem] font-[poppins] text-xs capitalize">
                  {errors.institution}
                </p>
              </div>
            </div>

            <div className="relative">
              <input
                values={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                name="confirmPassword"
                type="password"
                placeholder="re-enter your password"
                className={
                  errors.confirmPassword
                    ? 'signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                    : 'signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                }
              />
              {/*
                            <img src={accept} alt="" className={!errors.confirmPassword ?
                              'error-icon | absolute top-[35%] right-[5%]' : "hidden"} />
                            <img src={close} alt="" className={errors.confirmPassword ?
                            'error-icon | absolute top-[23%] right-[5%] ' : "hidden"} /> */}
              <div className={errors.confirmPassword ? 'error | absolute bottom-0 right-0 mr-3 mb-2' : 'hidden'}>
                <p className="text-[#E04F5F] pl-[0.5rem] font-[poppins] text-xs capitalize">
                  {errors.confirmPassword}
                </p>
              </div>
            </div>
            <div className="divSelectDropdownContainer | relative">
              <select
                onClick={arrowFun}
                values={values.userType}
                onChange={handleChange}
                onBlur={handleBlur}
                name="userType"
                className={
                  errors.userType
                    ? 'signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#E04F5F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                    : 'signup-input-field | w-[350px] h-[71px] font-[poppins]  px-8 bg-[#F0F5FB] border-4  border-[#4BAE4F]  text-black text-[1.25rem] outline-none md:w-[495px]'
                }
              >
                <option value="">User Type</option>
                <option value="Student"> Student</option>
                <option value="Teacher"> Teacher</option>
              </select>
              <div className="selectArrow absolute top-[8px] right-[10px] bg-[#F0F5FB] h-[80%] w-[60px] grid place-content-center pointer-events-none border-l-[1px] border-black ">
                <img
                  src={arrow}
                  className={
                    !arrowOpen
                      ? 'h-[28px] aspect-square transition-all duration-200 ease-in-out'
                      : 'rotate-180 h-[28px] aspect-square transition-all duration-200 ease-in-out'
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="signup-cta | w-full h-[5.375rem] mt-[30px] border-4 border-black outline-none bg-[#FFC100] text-[3.375rem] text-white"
          >
            <h1 className="rotate-[-2.13deg]">submit</h1>
          </button>
          <div className="mt-[27px]">
            <p>
              Already a member? &nbsp;
              <span className="text-[#FFC100] text-2xl cursor-pointer">
                {' '}
                <NavLink to="/login">Login</NavLink>
              </span>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignupContainer;
