import React from "react";
import { FaKey, FaUserPlus, FaUserTie } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Register() {
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
          <form>
            <div className="w-full flex justify-between gap-3">
              <div className="w-1/2 ">
                <label className="">Your first name</label>
                <div className="mt-3  px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl mb-5">
                  <span className=" px-3">
                    <FaIdCard className="text-[20px]" />
                  </span>
                  <input
                    placeholder="Type your first name "
                    className="  bg-inherit w-full   focus:outline-none "
                  />
                </div>
              </div>
              <div className="w-1/2 ">
                <label className="">Your last name</label>
                <div className="mt-3   px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl mb-5">
                  <span className=" px-3">
                    <FaIdCard className="text-[20px]" />
                  </span>
                  <input
                    placeholder="Type your last name "
                    className="  bg-inherit w-full   focus:outline-none "
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="">Your email address</label>
              <div className="mt-3 px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl ">
                <span className=" px-3">
                  <MdEmail className="text-[20px]" />
                </span>
                <input
                  placeholder="Type your email"
                  className="bg-inherit w-full focus:outline-none "
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="">Your role</label>
              <div className="mt-3 px-2 py-3 flex items-center justify-center border-[3px] border-white rounded-xl">
                <span className="px-3">
                  <MdEmail className="text-[20px]" />
                </span>
                <select
                  className="bg-inherit w-full focus:outline-none appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose your role
                  </option>
                  <option value="student" className="text-black">
                    Student
                  </option>
                  <option value="teacher" className="text-black ">
                    Teacher
                  </option>
                  <option value="administrator" className="text-black ">
                    Administrator
                  </option>
                </select>
                <span className="px-3">
                  <FaArrowDown className="text-[20px]" />
                </span>
              </div>
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
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="mt-10 rounded-lg bg-white text-black px-3 py-2 flex items-center font-bold "
                type="submit"
              >
                Sign Up
                <i className=" bi bi-check-circle-fill ml-2 text-xl "></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
