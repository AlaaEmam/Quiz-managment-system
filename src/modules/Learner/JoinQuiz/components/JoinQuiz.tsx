import React, { useState } from 'react';
import joinquiz from '../../../../assets/join-quiz.svg';
import Logo from '../../../../assets/Logo-black.svg';
import { IoClose } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {axiosInstance, LearnerQuiz } from '../../../../Constants/URLS/URL';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'https://upskilling-egypt.com:3005/api',
//   headers: {
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Nzg0ZmJmOTMzZmY0NjUyMzUwMTFlMTEiLCJlbWFpbCI6ImFsYWE2QGdtYWlsLmNvbSIsInJvbGUiOiJTdHVkZW50IiwiaWF0IjoxNzM2NzY4NTM0LCJleHAiOjE3NDAzNjg1MzR9.PtIcuHmFwksQ3fryjKDfbouJxu47ifL2sx0S8eNOdr0`, // Replace with your actual token or manage it dynamically
//     'Content-Type': 'application/json',
//   },
// });

const JoinQuiz: React.FC = () => {

  interface FormData {
    code: string;
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axiosInstance.post(LearnerQuiz.joinQuiz, { code: data.code });
    // setQuizId(response.data.data.quiz)
      toast.success(response.data.message || 'Starting quiz');
      navigate(`/learner/quiz/${response.data.data.quiz}`);
    } catch (error: any) {
      // Handle specific error cases
      if (axios.isAxiosError(error)) {
        // Check for response and extract error message
        if (error.response) {
          // Server responded with a status other than 2xx
          const status = error.response.status;
          const message = error.response.data?.message || 'An error occurred';

          // Customize messages based on status code
          switch (status) {
            case 400:
              toast.error('Bad Request: ' + message);
              break;
            case 401:
              toast.error('Unauthorized: ' + message);
              break;
            case 403:
              toast.error('Forbidden: ' + message);
              break;
            case 404:
              toast.error('Not Found: ' + message);
              break;
            case 409:
              toast.error('Conflict: ' + message);
              break;
            case 500:
              toast.error('Internal Server Error: ' + message);
              break;
            default:
              toast.error('Error: ' + message);
              break;
          }
        } else {
          // Network error or no response
          toast.error('Network error: Please check your connection.');
        }
      } else {
        // Handle non-Axios errors
        toast.error('An unexpected error occurred.');
      }
    }
  };








  const handleCancel = () => {
    navigate('/learner/quiz');
    toast.error('Quiz join canceled');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen p-1 ">
      <div className="flex flex-col justify-start items-start">
        <div>
          <img src={Logo} alt="Logo" className="my-4" />
        </div>
        <div className='mt-32 text-center'>
          <h1 className="text-4xl font-bold mb-4">Join Quiz</h1>
          <p className="font-semibold mb-6">Input the code received for the quiz below to join</p>
          <form onSubmit={handleSubmit(onSubmit)} className=" my-5">
           <div className='relative'>
           <label className="absolute inset-y-0 flex items-center bg-black text-light_cream px-5 font-bold border-black border-e-0 border rounded-lg rounded-e-none">
              Code
            </label>
            <input
              type="text"
              placeholder="Enter your exam code..."
              {...register('code', { required: 'Quiz code is required' })}
              className="pl-24 rounded-lg w-full p-2 border border-black focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-black"
            />
           </div>
           {errors?.code && <p className="text-red-500 mt-1">{errors.code.message}</p>}


          <div className="flex space-x-4 justify-center mt-20">
            <button
              onClick={handleCancel}
              className="text-2xl font-semibold bg-gray-300 border flex border-black text-black hover:bg-gray-400 rounded-lg px-6 py-4"
            >
              <IoClose className='text-black font-semibold text-3xl my-1 mx-2' />
              Cancel
            </button>
            <button
              type="submit"
              className="text-2xl font-semibold bg-black border flex border-black text-light_cream hover:bg-light_cream hover:text-black rounded-lg px-6 py-4"
            >
              Start Quiz
              <FaArrowRightLong className='text-light-cream font-semibold text-3xl my-1 mx-2' />
            </button>
          </div>
          </form>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img src={joinquiz} alt="Join Quiz" />
        </div>
      </div>
    </div>
  );
};

export default JoinQuiz;