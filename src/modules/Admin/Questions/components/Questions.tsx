import { useState } from "react";
import Modal from "./Modal";

export default function Questions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <>
      <div className="border-2 p-4 rounded-lg">

      <Modal isOpen={isModalOpen} closeModal={closeModal} />

    <button
        className="bg-blue-500 text-white rounded px-4 py-2"
        onClick={openModal}
      >
        Open Modal
      </button>
        <h3 className=" font-semibold text-xl tracking-wide mb-4">
          Bank Of Questions
        </h3>
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
              <td className="border border-slate-300 ">
                <i className="fa-solid fa-eye "></i>
                <i className="fa-solid fa-pen-to-square  px-4"></i>
                <i className="fa-solid fa-trash-can"></i>

              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">Michigan</td>
              <td className="border border-slate-300 ...">Detroit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );


}
