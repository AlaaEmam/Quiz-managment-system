<<<<<<< HEAD
=======
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Auth, AuthAxiosInstance } from '../../../../Constants/URLS/URL';
import { EMAIL_VALIDATION } from '../../../../Constants/Validation/validation';

interface formData {
  email: string;
}

interface formData {
  email: string;
}

>>>>>>> ca4c2c510da5b6fadff091cdc13f04ba912ab493
export default function ForgotPassword() {
  const navigate = useNavigate();
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    try {
      const response = await AuthAxiosInstance.post(Auth.forgotPassword, data);
      toast.success(response.data.message || 'Check your mail');
      navigate('/reset-password', { state: data.email });
    } catch (error) {
      toast.error(`Request failed: ${error}`);
    }
  };
  return (
    <>
      <div className="">
        <div>
          <h2 className="text-green text-3xl mb-16">Forget Password</h2>
        </div>
        <div className="text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="">Email address</label>
              <div className="mt-3   px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl mb-20">
                <span className=" px-3">
                  <i className="bi bi-envelope text-xl"></i>
                </span>
                <input
                  type="email"
                  placeholder="Type your email "
                  className="  bg-inherit w-full   focus:outline-none "
                  {...register('email', EMAIL_VALIDATION)}
                />
              </div>
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            <button
              className="mt-10 rounded-lg bg-white text-black px-3 py-2 flex items-center font-bold "
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send email'}

              <i className=" bi bi-check-circle-fill ml-2 text-xl "></i>
            </button>
          </form>
        </div>

        <div className="flex justify-end mt-20 text-white gap-1 ">
          Login?
          <button className="">
            <Link to={'/login'} className="text-green underline">
              click here
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
