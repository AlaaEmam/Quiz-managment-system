import React from "react";
import { useForm } from "react-hook-form";
import { FaKey } from "react-icons/fa";
import { PASSWORD_VALIDATION } from "../../../../Constants/Validation/validation";
import { Auth, axiosInstance } from "../../../../Constants/URLS/URL";
interface formData {
  password: string;
  password_new: string;
}
export default function ChangePassword() {
  let {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    try {
      let response = await axiosInstance.post(Auth.changePassword, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div className="mt-[50px]">
          <h2 className="text-green text-[25px]">Change password</h2>
        </div>

        <div className="text-white mt-[25px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
              <label className="">Old Password</label>
              <div className="mt-3 px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl ">
                <span className=" px-3">
                  <FaKey />
                </span>
                <input
                  type="password"
                  placeholder="Type your old password "
                  className="  bg-inherit w-full   focus:outline-none "
                  {...register("password", {
                    required: "Old password is required",
                  })}
                />
              </div>
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>
            <div className="mt-5">
              <label className="">New Password</label>
              <div className="mt-3 px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl ">
                <span className=" px-3">
                  <FaKey />
                </span>
                <input
                  type="password"
                  placeholder="Type your new password "
                  className="  bg-inherit w-full   focus:outline-none "
                  {...register("password_new", PASSWORD_VALIDATION)}
                />
              </div>
              {errors.password_new && (
                <span className="text-red-600">
                  {errors.password_new.message}
                </span>
              )}
            </div>
            <div className="flex justify-between items-center">
              <button
                className="mt-10 rounded-lg bg-white text-black px-3 py-2 flex items-center font-bold "
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting" : "Change"}
                <i className=" bi bi-check-circle-fill ml-2 text-xl "></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
