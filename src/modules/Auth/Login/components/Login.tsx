import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaKey, FaUserTie } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Auth, AuthAxiosInstance } from '../../../../Constants/URLS/URL';
import { EMAIL_VALIDATION, GetRequiredMessage } from '../../../../Constants/Validation/validation';
import { useAppDispatch, useAppSelector } from '../../../../redux';
import { setToken } from '../../../../redux/AuthSlice';

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token && user) {
      navigate(user.role === 'Instructor' ? '/dashboard' : '/learner');
    }
  }, [token, user, navigate]);

  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await AuthAxiosInstance.post(Auth.login, data);
      const accessToken = response.data.data.accessToken;
      dispatch(setToken(accessToken)); // Set the token in Redux and localStorage
      toast.success(response.data.message || 'Login successfully');
    } catch (error) {
      toast.error('Login failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
    <div className="mt-10">
      <h2 className="text-green text-2xl">
        Continue your learning journey with QuizWiz!
      </h2>
    </div>
    <div className="flex gap-12 items-center mt-8">
      <div className="bg-[#333] text-white px-12 py-5 flex flex-col justify-center items-center rounded-2xl border-4 border-green">
        <FaUserTie className="text-4xl text-green" />
        <p className="mt-5">Sign in</p>
      </div>
      <Link to="/register">
        <div className="bg-[#333] text-white px-12 py-5 flex flex-col justify-center items-center rounded-2xl border-4 border-dark_blue duration-150 hover:border-green group">
          <FaUserPlus className="text-4xl group-hover:text-green" />
          <p className="mt-5">Sign up</p>
        </div>
      </Link>
    </div>
    <div className="text-white mt-8 w-full max-w-md">
      <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>Email</label>
      <div className="mt-3 px-2 py-3 flex items-center justify-center border-[3px] border-white rounded-xl mb-5">
        <span className="px-3">
          <i className="bi bi-envelope text-xl"></i>
        </span>
        <input
          placeholder="Enter your email"
          className="bg-inherit w-full focus:outline-none"
          {...register('email', EMAIL_VALIDATION)}
        />
      </div>
      {errors.email && (
        <span className="text-red-600">{errors.email.message}</span>
      )}
    </div>
    <div>
      <label>Password</label>
      <div className="mt-3 px-2 py-3 flex items-center justify-center border-[3px] border-white rounded-xl">
        <span className="px-3">
          <FaKey />
        </span>
        <input
          type="password"
          placeholder="Enter your password"
          className="bg-transparent w-full focus:outline-none ring-0 ring-transparent border-transparent border-0"
          {...register('password', {
            required: GetRequiredMessage('Password'),
          })}
        />
      </div>
      {errors.password && (
        <span className="text-red-600">{errors.password.message}</span>
      )}
    </div>
    <div className="flex justify-between items-center">
      <button
        className="mt-10 rounded-lg bg-white text-black px-3 py-2 flex items-center font-bold"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Logging...' : 'Login'}
        <i className="bi bi-check-circle-fill ml-2 text-xl" />
      </button>
      <div className="mt-10">
        Forgot password?
        <button className="ml-1">
          <Link to={'/forget-Password'} className="text-green underline">
            click here
          </Link>
        </button>
      </div>
    </div>
    </form>

    </div>
    </div>
    
  );
}



