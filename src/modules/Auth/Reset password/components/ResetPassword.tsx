import { Link, useNavigate } from "react-router-dom";
import auth_pic from "../../../../assets/auth pic.png"
import { SubmitHandler, useForm } from 'react-hook-form';
import { EMAIL_VALIDATION, PasswordValidation } from "../../../Shared/Url/components/validations";
import { Auth, axiosInstance } from "../../../Shared/Url/components/URL";

interface formData{
  email:string;
  otp:string;
  password:string;
}
export default function ResetPassword() {
  const navigate=useNavigate();
  const{register, handleSubmit, formState:{isSubmitting, errors}}=useForm<formData>()
  
  const onSubmit:SubmitHandler<formData>=async(data)=>{
    try{
      const response=await axiosInstance.post(Auth.resetPassword);
      navigate('/auth/login', {state:data.email})
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="bg-black text-white">
    <div className="grid grid-cols-2">
      <div className="ml-40">
        
        <h1 className="text-green-300 mt-40 mb-20 
         sm:text-sm
         md:text-base
         lg:text-2xl
         xl:text-4xl">Reset Password</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="mt-5">Your Email address</label>
          
          {errors.email && <span className="text-danger ">{errors.email.message}</span>}
              
          <div className="mt-3 border-2 
            rounded-lg
            border-solid 
          border-white flex items-center ">
            <span className="border-2 p-2 border-none rounded-lg
            border-white">
              <i className="bi bi-envelope text-xl"></i>
            </span>
            <input placeholder="Type your Email here" 
            className="
            p-2
            w-96  bg-black"
            {...register("email",EMAIL_VALIDATION)}/>
          </div>


          <label className="mt-5">OTP</label>
          
          <div className="mt-3 border-2 
            rounded-lg
            border-solid 
          border-white flex items-center rounded-md">
            <span className="border-2 p-2 border-none rounded-lg
            border-white">
              <i className="bi bi-envelope text-xl"></i>
            </span>
            <input type="text" placeholder="Choose your otp" 
            className="
            p-2
            w-96  bg-black"
            {...register("otp")}/>
          </div>

          <label className="mt-5">Password</label>
          
          <div className="mt-3 border-2 
            rounded-lg
            border-solid 
          border-white flex items-center ">
            <span className="border-2 p-2 border-none rounded-lg
            border-white">
              <i className="bi bi-envelope text-xl"></i>
            </span>
            <input type="password" placeholder="Type your Password" 
            className="
            p-2
            w-96  bg-black"
            {...register("password",PasswordValidation("invalid Password"))}/>
          </div>

          <label className="mt-5">Confirm Password</label>
          
          <div className="mt-3 border-2 
            rounded-lg
            border-solid 
          border-white flex items-center rounded-md">
            <span className="border-2 p-2 border-none rounded-lg
            border-white">
              <i className="bi bi-envelope text-xl"></i>
            </span>
            <input type="password" placeholder="Type your confirm Password" 
            className="
            p-2
            w-96  bg-black"
            {...register("password",PasswordValidation("invalid Password"))}/>
          </div>

          <button className="mt-5 rounded-lg 
            bg-white text-black p-2 px-4  text-center" 
            type="submit">
              {isSubmitting? "Reseting...":"Reset"}
              <span className="">
                <i className=" bi bi-check-circle-fill text-lg ml-2"></i>
              </span>
          </button>
        </form>
        
      </div>
      <div className="p-14">
        <div className="bg-amber-200 rounded-2xl">
          <img src={auth_pic} alt="auth pic" />

        </div>
      </div>
      
    </div>
  </div>);
}