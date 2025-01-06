import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaPen, FaTrash } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { axiosInstance, Quiz } from "../../../../Constants/URLS/URL";
import { format, parseISO } from "date-fns";

import DeleteConfirmation from "../../../Shared/DeleteConfirmation/DeleteConfirmation";
import { toast } from "react-toastify";
interface quizData {
  title: string;
  duration: number;
  questions_number: number;
  score_per_question: number;
  description: string;
  schadule: string;
}

export default function QuizesDetails() {
  const [quizes, setQuizes] = useState<quizData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quizId, setQuizId] = useState(0);

  const toggleModal = (id: number) => {
    setQuizId(id);
    setIsModalOpen(true);
  };

  const getAllQuizzes = async () => {
    try {
      const response = await axiosInstance.get(Quiz.getAll);
      setQuizes(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteQuiz = async () => {
    try {
      const response = await axiosInstance.delete(Quiz.deleteQuiz(quizId));
      console.log(response);
      setIsModalOpen(false);
      toast.success("Deleted");
      getAllQuizzes();
    } catch (error) {
      console.log(error);
      toast.error("failed");
    }
  };
  useEffect(() => {
    getAllQuizzes();
  }, []);
  return (
    <>
      <div>
        <DeleteConfirmation
          deleteFun={deleteQuiz}
          showModal={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          title="Quiz"
        />
      </div>
      <div className="grid grid-cols-2 gap-10">
        {quizes.map((quiz) => (
          <div>
            <div className="flex justify-start items-center gap-5 ml-5 font-[500] my-2">
              <p>Quizzes</p>
              <FaAnglesRight className="text-green" />
              <p>{quiz.title}</p>
            </div>
            <div className="border-2 border-[#0000004D] rounded-[10px] p-5 ">
              <div className="mb-[10px]">
                <h2 className="font-[700] text-[24px]">{quiz.title}</h2>
              </div>
              <div className="flex justify-start items-center gap-5 mb-[22px]">
                <div className="flex justify-center items-center gap-2">
                  <FaCalendarAlt />
                  <p>{format(new Date(quiz.schadule), "yyyy-MM-dd")}</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <MdWatchLater />
                  <p>{format(new Date(quiz.schadule), "HH : mm")}</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-2 border-[#0000004D] rounded-[10px] mb-[10px]">
                <div className="bg-light_cream w-1/2 py-2.5 rounded-[10px] px-2">
                  <p className="font-[500] text-[16px]">Duration</p>
                </div>
                <div className="px-2">
                  <p className="font-[500] text-[16px]">{quiz.duration}</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-2 border-[#0000004D] rounded-[10px] mb-[10px]">
                <div className="bg-light_cream w-1/2 py-2.5 rounded-[10px] px-2 flex-nowrap">
                  <p className="font-[500] text-[16px]">Number of questions</p>
                </div>
                <div className="px-2">
                  <p className="font-[500] text-[16px]">
                    {quiz.questions_number}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center border-2 border-[#0000004D] rounded-[10px] mb-[10px]">
                <div className="bg-light_cream w-1/2 py-2.5 rounded-[10px] px-2">
                  <p className="font-[500] text-[16px]">Score per question</p>
                </div>
                <div className="px-2">
                  <p className="font-[500] text-[16px]">
                    {quiz.score_per_question}
                  </p>
                </div>
              </div>
              <div className="flex justify-between flex-col items-center border-2 border-[#0000004D] rounded-[10px] mb-[10px]">
                <div className="bg-light_cream w-full text-start py-2.5 rounded-[10px] px-2 ">
                  <p className="font-[500] text-[16px]">Description</p>
                </div>
                <div className="px-2 my-[10px]">
                  <p className="font-[400] text-[14px]">{quiz.description}</p>
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
              <div className="flex justify-between mt-5 items-center  text-white ">
                <button className="flex justify-center items-center gap-2 bg-[#0D1321] px-6 py-1 rounded-[10px]">
                  <FaPen />
                  Edit
                </button>
                <button
                  className="flex justify-center items-center gap-2 bg-red-600 px-6 py-1 rounded-[10px]"
                  onClick={() => toggleModal(quiz._id)}
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
