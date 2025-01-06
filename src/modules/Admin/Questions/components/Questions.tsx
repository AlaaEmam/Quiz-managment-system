import { useState } from "react";
import Modal from "./Modal";
import plus from "../../../../assets/plus-circle.svg";
export default function Questions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/*
<h2 className="leading-10 font-bold text-xl mb-3 relative " style={{top:"-15px"}}>
        Questions
        </h2> */}

      <div className="border-2 p-4 rounded-lg">
        <Modal isOpen={isModalOpen} closeModal={closeModal} />

        <div className="flex items-center justify-between">
          <h3 className="leading-10 font-bold text-xl ">Bank Of Questions</h3>
          <button
            type="button"
            className=" text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
          >
            <img
              src={plus}
              alt="New Questions"
              className="text-gray-500 pr-4 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
            <div className="font-bold text-xl">New Questions</div>
          </button>
        </div>

        <table className="caption-top	  text-center leading-loose border-separate border-spacing-1 border w-full border-none p-0 m-0 table-fixed">
          <thead>
            <tr className="bg-black text-white">
              <th className="border border-slate-300 ">State</th>
              <th className="border border-slate-300 ">Question Desc</th>
              <th className="border border-slate-300 ">
                Question difficulty level{" "}
              </th>
              <th className="border border-slate-300 "> Date</th>
              <th className="border border-slate-300 "> Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 ...">Ohio</td>
              <td className="border border-slate-300 ...">Columbus</td>
              <td className="border border-slate-300 ...">Ohio</td>
              <td className="border border-slate-300 ...">Columbus</td>
              <td className="border border-slate-300  text-orange">
                <i
                  className="fa-solid fa-eye cursor-pointer "
                  onClick={openModal}
                ></i>
                <i className="fa-solid fa-pen-to-square  px-4"></i>
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>

            <tr>
              <td className="border border-slate-300 ...">Ohio</td>
              <td className="border border-slate-300 ...">Columbus</td>
              <td className="border border-slate-300 ...">Ohio</td>
              <td className="border border-slate-300 ...">Columbus</td>
              <td className="border border-slate-300  text-orange">
                <i
                  className="fa-solid fa-eye cursor-pointer "
                  onClick={openModal}
                ></i>
                <i className="fa-solid fa-pen-to-square  px-4"></i>
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr> <tr>
              <td className="border border-slate-300 ...">Ohio</td>
              <td className="border border-slate-300 ...">Columbus</td>
              <td className="border border-slate-300 ...">Ohio</td>
              <td className="border border-slate-300 ...">Columbus</td>
              <td className="border border-slate-300  text-orange">
                <i
                  className="fa-solid fa-eye cursor-pointer "
                  onClick={openModal}
                ></i>
                <i className="fa-solid fa-pen-to-square  px-4"></i>
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr> <tr>
              <td className="border border-slate-300 ...">Ohio</td>
              <td className="border border-slate-300 ...">Columbus</td>
              <td className="border border-slate-300 ...">Ohio</td>
              <td className="border border-slate-300 ...">Columbus</td>
              <td className="border border-slate-300  text-orange">
                <i
                  className="fa-solid fa-eye cursor-pointer "
                  onClick={openModal}
                ></i>
                <i className="fa-solid fa-pen-to-square  px-4"></i>
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr> <tr>
              <td className="border border-slate-300 ...">Ohio</td>
              <td className="border border-slate-300 ...">Columbus</td>
              <td className="border border-slate-300 ...">Ohio</td>
              <td className="border border-slate-300 ...">Columbus</td>
              <td className="border border-slate-300  text-orange">
                <i
                  className="fa-solid fa-eye cursor-pointer "
                  onClick={openModal}
                ></i>
                <i className="fa-solid fa-pen-to-square  px-4"></i>
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>



          </tbody>
        </table>
      </div>
    </>
  );
}
