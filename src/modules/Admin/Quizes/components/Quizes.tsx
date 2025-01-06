import { useState } from "react";
import { BsBank2 } from "react-icons/bs";
import { FaCheck, FaCheckCircle, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosAlarm, IoIosCopy } from "react-icons/io";
import { TiArrowRight } from "react-icons/ti";
import upcoming1 from "../../../../assets/images/upcoming-quiz1.png";
// import upcoming2 from "../../../../assets/images/upcoming-quiz2.png"

export default function Quizes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const categories = ["TV/Monitors", "PC", "Gaming/Console", "Phones"];
  return (
    <>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <div className="grid grid-cols-2 gap-5">
            <div className="border-2 rounded-lg py-5 ">
              <div className="flex flex-col justify-center  items-center gap-y-2">
                <div>
                  <IoIosAlarm className="text-6xl" />
                </div>
                <div>
                  <span className="font-semibold text-lg">
                    Set up a new quiz
                  </span>
                </div>
              </div>
            </div>
            <div className="border-2 rounded-lg py-5 ">
              <div className="flex flex-col justify-center  items-center gap-y-2">
                <div>
                  <BsBank2 className="text-6xl" />
                </div>
                <div>
                  <span className="font-semibold text-lg">Question Bank</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="border-2 rounded-lg py-4 ps-4">
            <h3 className=" font-semibold text-xl tracking-wide mb-5">
              Upcoming quizzes
            </h3>
            <div className="flex items-center justify-start gap-x-4 border-2 rounded-lg mb-5">
              <div className="bg-light_cream p-2 rounded-lg">
                <img src={upcoming1} alt="upcoming1" />
              </div>
              <div>
                <span className="block font-bold text-lg ">
                  Introduction to computer programming
                </span>
                <span className="block">
                  12 / 03 / 2023{" "}
                  <span>
                    <span className="mx-3">|</span>09:00 AM
                  </span>
                </span>
                <div className="flex mt-3 justify-between">
                  <div>
                    <span className="block font-semibold ">
                      No. of students enrolled: 32
                    </span>
                  </div>
                  <div>
                    <button className="flex items-center">
                      open
                      <div className="bg-green  rounded-lg text-white">
                        <TiArrowRight />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-4 border-2 rounded-lg">
              <div className="bg-light_cream p-2 rounded-lg">
                <img src={upcoming1} alt="upcoming1" />
              </div>
              <div>
                <span className="block font-bold text-lg ">
                  Introduction to computer programming
                </span>
                <span className="block">
                  12 / 03 / 2023{" "}
                  <span>
                    <span className="mx-3">|</span>09:00 AM
                  </span>
                </span>
                <div className="flex mt-3 justify-between">
                  <div>
                    <span className="block font-semibold ">
                      No. of students enrolled: 32
                    </span>
                  </div>
                  <div>
                    <button className="flex items-center">
                      open
                      <div className="bg-green  rounded-lg text-white">
                        <TiArrowRight />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 rounded-lg p-4 mt-8">
            <div className="flex items-center justify-between">
              <h3 className=" font-semibold text-xl tracking-wide">
                Completed Quizzes
              </h3>
              <div>
                <button className="flex items-center gap-2 texe-sm">
                  Result <FaLongArrowAltRight className="text-green" />
                </button>
              </div>
            </div>

            <div>
              <div className="overflow-x-auto mt-3">
                <table className="table-auto border-collapse border  w-full">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="border  capitalize">Title</th>
                      <th className="border ">Group name</th>
                      <th className="border ">No. of persons in group</th>
                      {/* <th className="border ">Date</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Row 1, Col 1
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Row 1, Col 2
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Row 1, Col 3
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Row 2, Col 1
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Row 2, Col 2
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Row 2, Col 3
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Row 3, Col 1
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Row 3, Col 2
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Row 3, Col 3
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="">
          <button
            onClick={() => setIsModalOpen(true)}
            className="block text-black "
            type="button"
          >
            New Quiz
          </button>
        </div>
        {/* <div className="">
          <button
            onClick={() => setIsSecondModalOpen(true)}
            className="block text-black "
            type="button"
          >
            second modal
          </button>
        </div> */}

        {isModalOpen && (
          <div
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-3xl h-full md:h-auto bg-white rounded-lg ">
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
                <h3
                  id="modal-title"
                  className="text-lg font-semibold text-gray-900 "
                >
                  Set up a new quiz
                </h3>
                <div className="flex justify-center items-center gap-8">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsSecondModalOpen(true);
                    }}
                  >
                    <FaCheck className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-[30px] p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" />
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
              </div>

              <form>
                <div className="relative ">
                  <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black  border-e-0 border rounded-lg rounded-e-none">
                    Title:
                  </span>
                  <input className="pl-24 rounded-lg  w-full p-2 border border-black focus:border-none " />
                </div>

                <div className="my-4 ">
                  <div className="grid grid-cols-3 gap-x-4">
                    <div className="relative overflow-hidden">
                      <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black  border-e-0 border rounded-lg rounded-e-none overflow-hidden">
                        Duration (in minutes)
                      </span>
                      <input className="pl-24 rounded-lg  w-full p-2 border border-black " />
                    </div>
                    <div className="relative ">
                      <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black  border-e-0 border rounded-lg rounded-e-none">
                        No. of questions
                      </span>
                      <input className="pl-24 rounded-lg  w-full p-2 border border-black  " />
                    </div>
                    <div className="relative ">
                      <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black  border-e-0 border rounded-lg rounded-e-none">
                        Score per question
                      </span>
                      <input className="pl-24 rounded-lg  w-full p-2 border border-black  " />
                    </div>
                  </div>
                </div>

                <div className="relative ">
                  <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black  border-e-0 border rounded-lg rounded-e-none">
                    Description:
                  </span>
                  <input className="pl-36 rounded-lg  w-full p-6 border border-black focus:border-none " />
                </div>

                <div className="relative my-4">
                  <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black  border-e-0 border rounded-lg rounded-e-none">
                    Schedule
                  </span>
                  <input className="pl-24 rounded-lg  w-full p-2 border border-black focus:border-none " />
                </div>

                <div className="flex justify-center items-center gap-4">
                  <div className="relative ">
                    <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black  border-e-0 border rounded-lg rounded-e-none">
                      Difficulty level
                    </span>
                    <input className="pl-24 rounded-lg  w-full p-2 border border-black focus:border-none " />
                  </div>
                  <div className="relative ">
                    <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black  border-e-0 border rounded-lg rounded-e-none">
                      Category type
                    </span>
                    <input className="pl-24 rounded-lg  w-full p-2 border border-black focus:border-none " />
                  </div>
                  <div className="relative ">
                    <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black  border-e-0 border rounded-lg rounded-e-none">
                      Group name
                    </span>
                    <input className="pl-24 rounded-lg  w-full p-2 border border-black focus:border-none " />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className=" text-black my-6 px-6 py-2 rounded-lg bg-light_cream border-2 font-semibold ">
                    Add Quiz
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {isSecondModalOpen && (
          <div
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-lg h-full md:h-auto bg-white rounded-lg ">
              <div className="flex justify-center items-center flex-col">
                <FaCheckCircle className="w-[60px] h-[60px]" />
                <div className="mt-[22px]">
                  <p className="font-[700] text-[20px]">
                    Quiz was successfully created
                  </p>
                </div>
                <div className="flex justify-between items-center gap-4 mt-[10px] border-2 rounded-[20px]">
                  <span className="bg-light_cream p-3 rounded-tl-[20px] rounded-bl-[20px] font-[700] text-[20px]">
                    CODE:{" "}
                  </span>
                  <span className="font-[700] text-[20px]">A123DDS</span>
                  <span className="px-5 text-xl">
                    <IoIosCopy />
                  </span>
                </div>
                <div className="mt-[44px]">
                  <button
                    className="bg-green px-14 py-2 rounded-[20px]"
                    onClick={() => setIsSecondModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
