import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsBank2 } from 'react-icons/bs';
import { FaCheck, FaCheckCircle, FaLongArrowAltRight } from 'react-icons/fa';
import { IoIosAlarm, IoIosCopy } from 'react-icons/io';
import { TiArrowRight } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import upcoming1 from '../../../../assets/images/upcoming-quiz1.png';
import { axiosInstance, Groups, Quiz } from '../../../../Constants/URLS/URL';
import { GetRequiredMessage } from '../../../../Constants/Validation/validation';
import { useNavigate } from 'react-router-dom';
// import upcoming2 from "../../../../assets/images/upcoming-quiz2.png"

interface QuizData {
  title: string;
  description: string;
  group: string;
  questions_number: number;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'FE' | 'BE' | 'DO';
  schadule: string;
  duration: number;
  score_per_question: number;
}

export default function Quizes() {
  const navigate = useNavigate()
  const [groups, setGroups] = useState([]);
  const [incomingQuiz, setIncomingQuiz] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuizData>();

  const onSubmit = async (data: QuizData) => {
    try {
      const response = await axiosInstance.post(Quiz.Create_Quiz, data);
      console.log(response);
      toast.success('Create succesfully');
      navigate("/quiz-details")
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  };

  const getAllGroups = async () => {
    try {
      const response = await axiosInstance.get(Groups.getAll);
      console.log(response.data);
      setGroups(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getIncomingQuiz = async () => {
    try {
      const response = await axiosInstance.get(Quiz.Incomming_Quiz);
      console.log(response);
      setIncomingQuiz(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllGroups();
    getIncomingQuiz();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <div className="grid grid-cols-2 gap-5">
            <button
              className="border-2 rounded-lg py-5 "
              onClick={() => setIsModalOpen(true)}
            >
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
            </button>
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

            {incomingQuiz.map((quiz) => (
              <div className="flex items-center justify-start gap-x-4 border-2 rounded-lg mb-5">
                <div className="bg-light_cream p-2 rounded-lg">
                  <img src={upcoming1} alt="upcoming1" />
                </div>
                <div>
                  <span className="block font-bold text-lg ">{quiz.title}</span>
                  <span className="block">
                    {format(new Date(quiz.schadule), 'yyyy-MM-dd')}
                    <span>
                      <span className="mx-3">|</span>
                      {format(new Date(quiz.schadule), 'HH : mm')}
                    </span>
                  </span>
                  <div className="flex mt-3 justify-between gap-20 ">
                    <div>
                      <span className="block font-semibold ">
                        No. of students enrolled: {quiz.participants}
                      </span>
                    </div>
                    <div>
                      <Link to="/quiz-details" className="flex items-center">
                        open
                        <div className="bg-green  rounded-lg text-white">
                          <TiArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                    onClick={() => {
                      setIsModalOpen(false);
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
                      {...register('title', {
                        required: GetRequiredMessage('title'),
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
                          {...register('duration', {
                            required: GetRequiredMessage('Duration'),
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
                          {...register('questions_number', {
                            required: GetRequiredMessage('No. of questions'),
                          })}
                        >
                          <option value="" disabled selected>
                            Select number of questions
                          </option>
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="50">50</option>
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
                          {...register('score_per_question', {
                            required: GetRequiredMessage('Score per question'),
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
                      {...register('description', {
                        required: GetRequiredMessage('description'),
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
                      {...register('schadule', {
                        required: GetRequiredMessage('schadule'),
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
                        {...register('difficulty', {
                          required: GetRequiredMessage('Difficulty level'),
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
                        {...register('type', {
                          required: GetRequiredMessage('type'),
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
                        {...register('group', {
                          required: GetRequiredMessage('Group'),
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
                  <button className=" text-black my-6 px-6 py-2 rounded-lg bg-light_cream border-2 font-semibold " >
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
                    CODE:{' '}
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
