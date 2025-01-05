import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaEye,
  FaEyeSlash,
  FaIdCard,
  FaKey,
  FaUserPlus,
  FaUserTie,
} from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Auth, AuthAxiosInstance } from '../../../../Constants/URLS/URL';
import {
  EMAIL_VALIDATION,
  GetRequiredMessage,
  PASSWORD_VALIDATION,
} from '../../../../Constants/Validation/validation';

interface RegisterDataForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: 'Student' | 'Instructor';
}

export default function Register() {
  const [isPasswordVisable, setIsPasswordVisable] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterDataForm>();

  const onSumbit = async (data: RegisterDataForm) => {
    try {
      const response = await AuthAxiosInstance.post(Auth.register, data);
      console.log(response);
      toast.success(response.data.message || 'Registeration Successfully');
      navigate('/login');
    } catch (error) {
      console.log(error);
      // toast.error(`Request failed: ${error.response.data.message}`);
    }
  };
  return (
    <>
      <div>
        <div className="mt-[50px]">
          <h2 className="text-green text-[25px]">
            Create your account and start using QuizWiz!
          </h2>
        </div>
        <div className="flex gap-[50px] items-center mt-[30px]">
          <Link to={'/Login'}>
            <div className="bg-[#333333] text-white px-[53px] py-[20px] flex flex-col justify-between items-center rounded-[20px] border-4 border-dark_blue duration-150  hover:border-green group ">
              <FaUserTie className="text-[40px] duration-150 group-hover:text-green" />
              <p className="mt-5">Sign in </p>
            </div>
          </Link>
          <div className="bg-[#333333] text-white px-[53px] py-[20px] flex flex-col justify-between items-center rounded-[20px] border-4 border-green">
            <FaUserPlus className="text-[40px]  text-green" />
            <p className="mt-5">Sign up </p>
          </div>
        </div>
        <div className="text-white mt-[25px]">
          <form onSubmit={handleSubmit(onSumbit)}>
            <div className="w-full flex justify-between gap-3 mb-5">
              <div className="w-1/2 ">
                <label>Your first name</label>
                <div className="mt-2  px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl ">
                  <span className=" px-3">
                    <FaIdCard className="text-[20px]" />
                  </span>
                  <input
                    placeholder="Type your first name "
                    className="  bg-inherit w-full   focus:outline-none "
                    {...register('first_name', {
                      required: GetRequiredMessage(`FirstName`),
                    })}
                  />
                </div>
                {errors?.first_name && (
                  <span className="text-red-600">
                    {errors?.first_name?.message}
                  </span>
                )}
              </div>

              <div className="w-1/2 ">
                <label className="">Your last name</label>
                <div className="mt-2   px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl ">
                  <span className=" px-3">
                    <FaIdCard className="text-[20px]" />
                  </span>
                  <input
                    placeholder="Type your last name "
                    className="  bg-inherit w-full   focus:outline-none "
                    {...register('last_name', {
                      required: GetRequiredMessage('LastName'),
                    })}
                  />
                </div>
                {errors?.last_name && (
                  <span className="text-red-600">
                    {errors?.last_name?.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="">Your email address</label>
              <div className="mt-2 px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl ">
                <span className=" px-3">
                  <MdEmail className="text-[20px]" />
                </span>
                <input
                  placeholder="Type your email"
                  autoComplete="email"
                  className="bg-inherit w-full focus:outline-none "
                  {...register('email', {
                    required: EMAIL_VALIDATION.required,
                    pattern: EMAIL_VALIDATION.pattern,
                  })}
                />
              </div>
              {errors?.email && (
                <span className="text-red-600">{errors?.email?.message}</span>
              )}
            </div>

            <div className="mt-5">
              <label className="">Your role</label>
              <div className="mt-2 px-2 py-3 flex items-center justify-center border-[3px] border-white rounded-xl">
                <span className="px-3">
                  <MdEmail className="text-[20px]" />
                </span>
                <select
                  className="bg-inherit w-full focus:outline-none appearance-none"
                  {...register('role', {
                    required: GetRequiredMessage(`role`),
                  })}
                >
                  <option value="" disabled>
                    Choose your role
                  </option>
                  <option value="Student" className="text-black">
                    Student
                  </option>
                  <option value="Instructor" className="text-black ">
                    Instructor
                  </option>
                </select>
                <span className="px-3">
                  <FaArrowDown className="text-[20px]" />
                </span>
              </div>
            </div>

            <div className="mt-5">
              <label>Password</label>
              <div className="mt-2 px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl ">
                <span className=" px-3">
                  <FaKey />
                </span>
                <input
                  type={isPasswordVisable ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Type your password "
                  className="  bg-inherit w-full   focus:outline-none "
                  {...register('password', {
                    required: PASSWORD_VALIDATION.required,
                    pattern: PASSWORD_VALIDATION.pattern,
                  })}
                />
                <span
                  className="cursor-pointer px-3 text-[20px]"
                  onClick={() => setIsPasswordVisable((prev) => !prev)}
                >
                  {isPasswordVisable ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {errors?.password && (
                <span className="text-red-600">
                  {errors?.password?.message}
                </span>
              )}
            </div>

            <div className="flex justify-between items-center">
              <button
                className="mt-10 rounded-lg bg-white text-black px-3 py-2 flex items-center font-bold "
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sign Up ...' : 'Sign Up'}
                <i className=" bi bi-check-circle-fill ml-2 text-xl "></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
