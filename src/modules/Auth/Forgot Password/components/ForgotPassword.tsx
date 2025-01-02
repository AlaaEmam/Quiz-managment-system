import { Link, useNavigate } from "react-router-dom";
import auth_pic from "../../../../assets/auth pic.png"
import { useForm } from 'react-hook-form';


export default function ForgotPassword() {
  const navigate=useNavigate();
  // let {register, formState:{isSubmitting, errors}, handleSubmit}=useForm();
  return (
  <div className="bg-black text-white">
    <div className="grid grid-cols-2">
      <div className="ml-40">
        <span className="border-2 p-2 rounded-lg
          border-solid 
          border-white">
            <i className=" bi bi-check-circle fs-5 "></i>
        </span>
        <h1 className="text-green-300 mt-40 mb-20 
         sm:text-sm
         md:text-base
         lg:text-2xl
         xl:text-4xl">Forget Password</h1>
        <form>
          <label className="">Email address</label>
          
          <div className="mt-3 border-2 
            rounded-lg
            border-solid 
          border-white flex items-center rounded-md">
            <span className="border-2 p-2 border-none rounded-lg
    
            border-white">
              <i className="bi bi-envelope text-xl"></i>
            </span>
            <input placeholder="Type your Email here" 
            className="
            p-2
            w-96  bg-black"/>
          </div>

          

          <button className="mt-10 rounded-lg bg-white text-black p-2 " type="submit">Send email</button>
        </form>
        <div className="flex justify-end xl:mt-10 lg:mt-5 md:mt-3 ">
          <p>
            Login? <Link to={"auth/login"} className="text-yellow-200">click here</Link>  
          </p>
        </div>
      </div>
      <div className="p-14">
        <div className="bg-amber-200 rounded-2xl">
          <img src={auth_pic} alt="auth pic" />

        </div>
      </div>
      
    </div>
  </div>);
}