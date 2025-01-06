import React from "react";
import { FaCalendarAlt, FaPen } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";

export default function QuizesDetails() {
  return (
    <>
      <div className="flex justify-start items-center gap-5 ml-5 font-[500]">
        <p>Quizzes</p>
        <FaAnglesRight className="text-green" />
        <p>Data structures quiz one</p>
      </div>
      <div className="border-2 border-[#0000004D] rounded-[10px] w-[450px] p-5 mt-5 ml-5">
        <div className="mb-[10px]">
          <h2 className="font-[700] text-[24px]">Data Structures Quiz One</h2>
        </div>
        <div className="flex justify-start items-center gap-5 mb-[22px]">
          <div className="flex justify-center items-center gap-2">
            <FaCalendarAlt />
            <p>12 / 03 / 2023</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <MdWatchLater />
            <p>09 : 00</p>
          </div>
        </div>
        <div className="flex justify-between items-center border-2 border-[#0000004D] rounded-[10px] mb-[10px]">
          <div className="bg-light_cream w-1/2 py-2.5 rounded-[10px] px-2">
            <p className="font-[500] text-[16px]">Duration</p>
          </div>
          <div className="px-2">
            <p className="font-[500] text-[16px]">10 minutes</p>
          </div>
        </div>
        <div className="flex justify-between items-center border-2 border-[#0000004D] rounded-[10px] mb-[10px]">
          <div className="bg-light_cream w-1/2 py-2.5 rounded-[10px] px-2 flex-nowrap">
            <p className="font-[500] text-[16px]">Number of questions</p>
          </div>
          <div className="px-2">
            <p className="font-[500] text-[16px]">15</p>
          </div>
        </div>
        <div className="flex justify-between items-center border-2 border-[#0000004D] rounded-[10px] mb-[10px]">
          <div className="bg-light_cream w-1/2 py-2.5 rounded-[10px] px-2">
            <p className="font-[500] text-[16px]">Score per question</p>
          </div>
          <div className="px-2">
            <p className="font-[500] text-[16px]">1</p>
          </div>
        </div>
        <div className="flex justify-between flex-col items-center border-2 border-[#0000004D] rounded-[10px] mb-[10px]">
          <div className="bg-light_cream w-full text-start py-2.5 rounded-[10px] px-2 ">
            <p className="font-[500] text-[16px]">Description</p>
          </div>
          <div className="px-2 my-[10px]">
            <p className="font-[400] text-[14px]">
              Lorem ipsum aset amet consectedur im nascsa assadqw assacsc
              aidwqdjv asdewfas qwdass Lorem ipsum aset amet consectedur im
              nascsa assadqw assacsc aidwqdjv
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-2 border-[#0000004D] rounded-[10px] mb-[10px]">
          <div className="bg-light_cream w-1/2 py-2.5 rounded-[10px] px-2">
            <p className="font-[500] text-[16px]">Question bank used</p>
          </div>
          <div className="px-2">
            <p className="font-[500] text-[16px]">Bank one</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center h-5">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:text-black dark:focus:text-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="ms-2 text-sm">
            <label className="font-medium text-gray-900 dark:text-gray-300">
              Randomize questions
            </label>
          </div>
        </div>
        <div className="flex justify-end items-center  text-white ">
          <button className="flex justify-center items-center gap-2 bg-[#0D1321] px-6 py-1 rounded-[10px]">
            <FaPen />
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
