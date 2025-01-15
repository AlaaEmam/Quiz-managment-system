import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaKey, FaUserTie } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Auth, AuthAxiosInstance } from '../../../../Constants/URLS/URL';
import {
  EMAIL_VALIDATION,
  GetRequiredMessage,
} from '../../../../Constants/Validation/validation';
import { useAppDispatch, useAppSelector } from '../../../../redux';
import { setToken } from '../../../../redux/AuthSlice';
import { saveTokenToLocalStorage } from '../../../../redux/componenets/utils/localStorageUtils';

interface formData {
  email: string;
  password: string;
}
export default function Login() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<formData>();

  

  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, [token, navigate]);

  const onSubmit = async (data: formData) => {
    try {
      const response = await AuthAxiosInstance.post(Auth.login, data);
      dispatch(setToken(response.data.data.accessToken));
      saveTokenToLocalStorage(response.data.data.accessToken)
      // localStorage.setItem('token', response.data.data.accessToken);
      toast.success(response.data.message || 'login successfully');
      console.log(response);
      
    } catch (error) {
      console.log(error);

      toast.error('Login failed');
    }
  };
  return (
    <>
      <div>
        <div className="mt-[50px]">
          <h2 className="text-green text-[25px]">
            Continue your learning journey with QuizWiz!
          </h2>
        </div>
        <div className="flex gap-[50px] items-center mt-[30px]">
          <div className="bg-[#333333] text-white px-[53px] py-[20px] flex flex-col justify-between items-center rounded-[20px] border-4 border-green">
            <FaUserTie className="text-[40px] text-green" />
            <p className="mt-5">Sign in </p>
          </div>
          <Link to={'/register'}>
            <div className="bg-[#333333] text-white px-[53px] py-[20px] flex flex-col justify-between items-center rounded-[20px] border-4 border-dark_blue duration-150 hover:border-green group">
              <FaUserPlus className="text-[40px] group-hover:text-green" />
              <p className="mt-5">Sign up </p>
            </div>
          </Link>
        </div>
        <div className="text-white mt-[25px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="">Registered email address</label>
              <div className="mt-3   px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl mb-5">
                <span className=" px-3">
                  <i className="bi bi-envelope text-xl"></i>
                </span>
                <input
                  placeholder="Type your email "
                  className="  bg-inherit w-full   focus:outline-none "
                  {...register('email', EMAIL_VALIDATION)}
                />
              </div>
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label className="">Password</label>
              <div className="mt-3 px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl ">
                <span className=" px-3">
                  <FaKey />
                </span>
                <input
                  type="password"
                  placeholder="Type your password "
                  className="  bg-inherit w-full   focus:outline-none "
                  {...register('password', {
                    required: GetRequiredMessage(`Password`),
                  })}
                />
              </div>
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>
            <div className="flex justify-between items-center">
              <button
                className="mt-10 rounded-lg bg-white text-black px-3 py-2 flex items-center font-bold "
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Loging..' : 'Login'}

                <i className=" bi bi-check-circle-fill ml-2 text-xl "></i>
              </button>
              <div className="mt-10">
                Forgot password?
                <button className="ml-1">
                  <Link
                    to={'/forget-Password'}
                    className="text-green underline"
                  >
                    click here
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
