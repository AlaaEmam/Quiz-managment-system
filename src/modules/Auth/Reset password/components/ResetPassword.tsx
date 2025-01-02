import React from "react";
import { useForm } from "react-hook-form";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiCompassDiscoverFill } from "react-icons/ri";
import {
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
} from "../../../../Constants/Validation/validation";
import { Auth, axiosInstance } from "../../../../Constants/URLS/URL";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

interface formData {
  email: string;
  password: string;
  otp: number;
}

export default function ResetPassword() {
  const location = useLocation();
  let {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<formData>({
    defaultValues: { email: location.state },
    mode: "onChange",
  });
  const onSubmit = async (data: formData) => {
    try {
      let response = await axiosInstance.post(Auth.resetPassword, data);
      toast.success(response.data.message || "Password updated successfully");
    } catch (error) {
      toast.error("failed to reset password");
    }
  };
  return (
    <>
      <div>
        <div className="mt-[50px]">
          <h2 className="text-green text-[25px]">Reset password</h2>
        </div>

        <div className="text-white mt-[25px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="">Your email address</label>
              <div className="mt-3 px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl ">
                <span className=" px-3">
                  <MdEmail className="text-[20px]" />
                </span>
                <input
                  placeholder="Type your email"
                  className="bg-inherit w-full focus:outline-none "
                  {...register("email", EMAIL_VALIDATION)}
                />
              </div>
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>

            <div className="mt-5">
              <label className="">OTP</label>
              <div className="mt-3 px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl ">
                <span className=" px-3">
                  <RiCompassDiscoverFill className="text-[20px]" />
                </span>
                <input
                  placeholder="Type your otp "
                  className="  bg-inherit w-full   focus:outline-none "
                  {...register("otp", { required: "OTP is required" })}
                />
              </div>
              {errors.otp && (
                <span className="text-red-600">{errors.otp.message}</span>
              )}
            </div>

            <div className="mt-5">
              <label className="">Password</label>
              <div className="mt-3 px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl ">
                <span className=" px-3">
                  <FaKey />
                </span>
                <input
                  placeholder="Type your password "
                  className="  bg-inherit w-full   focus:outline-none "
                  {...register("password", PASSWORD_VALIDATION)}
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
                {isSubmitting ? "Submitting..." : "Reset"}

                <i className=" bi bi-check-circle-fill ml-2 text-xl "></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
