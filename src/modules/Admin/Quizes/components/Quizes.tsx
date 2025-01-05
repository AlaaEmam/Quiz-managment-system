import { BsBank2 } from 'react-icons/bs';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoIosAlarm } from 'react-icons/io';
import { TiArrowRight } from 'react-icons/ti';
import upcoming1 from '../../../../assets/images/upcoming-quiz1.png';
// import upcoming2 from "../../../../assets/images/upcoming-quiz2.png"

export default function Quizes() {
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
                  12 / 03 / 2023{' '}
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
                  12 / 03 / 2023{' '}
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
    </>
  );
}
