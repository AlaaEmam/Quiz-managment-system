import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaCheck, FaPen, FaTrash } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { axiosInstance, Groups, Quiz } from "../../../../Constants/URLS/URL";
import { format } from "date-fns";

import DeleteConfirmation from "../../../Shared/DeleteConfirmation/DeleteConfirmation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { GetRequiredMessage } from "../../../../Constants/Validation/validation";
import { useParams } from "react-router-dom";
interface quizData {
  _id: number;
  title: string;
  duration: number;
  questions_number: number;
  score_per_question: number;
  description: string;
  schadule: string;
}
interface QuizData {
  title: string;
  description: string;
  group: string;
  questions_number: number;
  difficulty: "easy" | "medium" | "hard";
  type: "FE" | "BE" | "DO";
  schadule: string;
  duration: number;
  score_per_question: number;
}

export default function QuizesDetails() {
  const params = useParams();
  const [quizes, setQuizes] = useState<quizData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [quizId, setQuizId] = useState(0);
  const [groups, setGroups] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuizData>();

  const toggleModal = (id: number) => {
    setQuizId(id);
    setIsModalOpen(true);
  };
  const toggleEditModal = (id: number) => {
    setQuizId(id);
    setIsEditModalOpen(true);
  };

  useEffect(() => {
    if (quizId) {
      const getQuizById = async () => {
        try {
          const response = await axiosInstance.get(Quiz.getQuizById(quizId));
          setValue("title", response.data.title);
        } catch (error) {
          console.error("Error fetching task:", error);
        }
      };
      getQuizById();
    }
  }, [quizId, setValue]);

  const getAllGroups = async () => {
    try {
      const response = await axiosInstance.get(Groups.getAll);
      console.log(response.data);
      setGroups(response.data);
    } catch (error) {
      console.log(error);
    }
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
      toast.success("Deleted successfully");
      getAllQuizzes();
    } catch (error) {
      console.log(error);
      toast.error("failed to delete");
    }
  };
  const onSubmitEdit = async (data: QuizData) => {
    try {
      const updateData = { title: data.title };
      const response = await axiosInstance.put(
        Quiz.editQuiz(quizId),
        updateData
      );
      console.log(response);
      getAllQuizzes();
      toast.success(response.data.message || "Updated successfully");
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error in onSubmitEdit:", error);
      toast.error(error.response.data.message || "Failed to update ");
    }
  };

  useEffect(() => {
    getAllQuizzes();
    getAllGroups();
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

      {isEditModalOpen && (
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
                    setIsEditModalOpen(false);
                  }}
                >
                  <FaCheck className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-[30px] p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" />
                </button>
                <button
                  onClick={() => {
                    setIsEditModalOpen(false);
                    reset();
                  }}
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

            <form onSubmit={handleSubmit(onSubmitEdit)}>
              <div>
                <div className="relative ">
                  <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black  border-e-0 border rounded-lg rounded-e-none">
                    Title:
                  </span>
                  <input
                    className="pl-24 rounded-lg  w-full p-2 border border-black focus:border-none "
                    {...register("title", {
                      required: GetRequiredMessage("title"),
                    })}
                  />
                </div>
                {errors?.title && (
                  <span className="text-red-600">{errors?.title?.message}</span>
                )}
              </div>

              <div className="flex justify-end">
                <button className=" text-black my-6 px-6 py-2 rounded-lg bg-light_cream border-2 font-semibold ">
                  Update Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
                <h2 className="font-[700] text-[24px]  break-words  ">{quiz.title}</h2>
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
                <button
                  className="flex justify-center items-center gap-2 bg-[#0D1321] px-6 py-1 rounded-[10px]"
                  onClick={() => toggleEditModal(quiz._id)}
                >
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
