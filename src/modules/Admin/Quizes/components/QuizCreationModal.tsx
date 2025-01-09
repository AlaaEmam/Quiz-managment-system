import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import QuizData from './Quizes'; // make sure to import QuizData type
import { GetRequiredMessage } from '../../../../Constants/Validation/validation';

interface QuizCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: QuizData) => void;
  errors: any;
  register: any;
  handleSubmit: any;
  reset: () => void;
  groups: { _id: string, name: string }[]; // Assuming groups is passed as a prop

}

const QuizCreationModal: React.FC<QuizCreationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  errors,
  register,
  handleSubmit,
  reset,
  groups,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-3xl h-full md:h-auto bg-white rounded-lg">
        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
          <h3 id="modal-title" className="text-lg font-semibold text-gray-900">
            Set up a new quiz
          </h3>
          <div className="flex justify-center items-center gap-8">
            <button>
              <FaCheck className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-[30px] p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" />
            </button>
            <button
              onClick={() => {
                onClose();
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    <span className="text-red-600">
                    {errors?.title?.message}
                    </span>
                )}
                </div>
                <div className="my-4">
                <div className="grid grid-cols-3 gap-x-4">
                    <div>
                    <div className="relative flex items-center">
                        <span className="px-5 absolute inset-y-0 flex items-center bg-light_cream font-semibold border-black border-e-0 border rounded-lg rounded-e-none">
                        Duration
                        </span>
                        <select
                        className="pl-28 rounded-lg w-full border border-black"
                        {...register("duration", {
                            required: GetRequiredMessage("Duration"),
                        })}
                        >
                        <option value="" disabled selected>
                            Select duration
                        </option>
                        <option value="10">10</option>
                        <option value="10">20</option>
                        <option value="30">30</option>
                        </select>
                    </div>
                    {errors?.duration && (
                        <span className="text-red-600">
                        {errors?.duration?.message}
                        </span>
                    )}
                    </div>

                    <div>
                    <div className="relative">
                        <span className="px-5 absolute inset-y-0 flex items-center bg-light_cream font-semibold border-black border-e-0 border rounded-lg rounded-e-none">
                        No. of questions
                        </span>
                        <select
                        className="pl-40 rounded-lg w-full p-2 border border-black"
                        {...register("questions_number", {
                            required: GetRequiredMessage("No. of questions"),
                        })}
                        >
                        <option value="" disabled selected>
                            Select number of questions
                        </option>
                        <option value="10">1</option>
                        <option value="20">2</option>
                        <option value="50">3</option>
                        <option value="20">4</option>
                        <option value="50">5</option>
                        <option value="10">6</option>
                        <option value="20">7</option>
                        <option value="50">8</option>
                        <option value="20">9</option>
                        <option value="50">10</option>
                        </select>
                    </div>
                    {errors?.questions_number && (
                        <span className="text-red-600">
                        {errors?.questions_number?.message}
                        </span>
                    )}
                    </div>

                    <div>
                    <div className="relative">
                        <span className="px-5 absolute inset-y-0 flex items-center bg-light_cream font-semibold border-black border-e-0 border rounded-lg rounded-e-none">
                        Score per que
                        </span>
                        <select
                        className="pl-40 rounded-lg w-full p-2 border border-black"
                        {...register("score_per_question", {
                            required: GetRequiredMessage("Score per question"),
                        })}
                        >
                        <option value="" disabled selected>
                            Select score
                        </option>
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        </select>
                    </div>
                    {errors?.score_per_question && (
                        <span className="text-red-600">
                        {errors?.score_per_question?.message}
                        </span>
                    )}
                    </div>
                </div>
                </div>

                <div>
                <div className="relative ">
                    <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black  border-e-0 border rounded-lg rounded-e-none">
                    Description:
                    </span>
                    <input
                    className="pl-36 rounded-lg  w-full p-6 border border-black focus:border-none "
                    {...register("description", {
                        required: GetRequiredMessage("description"),
                    })}
                    />
                </div>
                {errors?.description && (
                    <span className="text-red-600">
                    {errors?.description?.message}
                    </span>
                )}
                </div>

                <div className="my-4">
                <div className="relative ">
                    <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black  border-e-0 border rounded-lg rounded-e-none">
                    Schedule
                    </span>
                    <input
                    type="date"
                    className="pl-32 rounded-lg  w-full p-2 border border-black focus:border-none "
                    {...register("schadule", {
                        required: GetRequiredMessage("schadule"),
                    })}
                    />
                </div>
                {errors?.schadule && (
                    <span className="text-red-600">
                    {errors?.schadule?.message}
                    </span>
                )}
                </div>

                <div className="grid grid-cols-3 gap-x-4 ">
                <div>
                    <div className="relative">
                    <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black border-e-0 border rounded-lg rounded-e-none">
                        Difficulty level
                    </span>
                    <select
                        className="pl-40 rounded-lg w-full p-2 border border-black focus:outline-none"
                        {...register("difficulty", {
                        required: GetRequiredMessage("Difficulty level"),
                        })}
                    >
                        <option value="" disabled selected>
                        Select difficulty
                        </option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    </div>
                    {errors?.difficulty && (
                    <span className="text-red-600">
                        {errors?.difficulty?.message}
                    </span>
                    )}
                </div>

                <div>
                    <div className="relative">
                    <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black border-e-0 border rounded-lg rounded-e-none">
                        Category type
                    </span>
                    <select
                        className="pl-40 rounded-lg w-full p-2 border border-black focus:outline-none"
                        {...register("type", {
                        required: GetRequiredMessage("type"),
                        })}
                    >
                        <option value="" disabled selected>
                        Select category
                        </option>
                        <option value="FE">FE</option>
                        <option value="BE">BE</option>
                        <option value="DO">DO</option>
                    </select>
                    </div>
                    {errors?.type && (
                    <span className="text-red-600">
                        {errors?.type?.message}
                    </span>
                    )}
                </div>

                <div>
                    <div className="relative">
                    <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black border-e-0 border rounded-lg rounded-e-none">
                        Group name
                    </span>
                    <select
                        className="pl-40 rounded-lg w-full p-2 border border-black focus:outline-none"
                        {...register("group", {
                        required: GetRequiredMessage("Group"),
                        })}
                    >
                        <option value="" disabled selected>
                        Select group
                        </option>
                        {groups.map(({ _id, name }) => (
                        <option key={_id} value={_id}>
                            {name}
                        </option>
                        ))}
                    </select>
                    </div>
                    {errors?.group && (
                    <span className="text-red-600">
                        {errors?.group?.message}
                    </span>
                    )}
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
  );
};

export default QuizCreationModal;
