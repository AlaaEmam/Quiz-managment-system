import { useEffect, useState } from "react";
import plus from "../../../../assets/plus-circle.svg";

import { axiosInstance, QuestionsUrl } from "../../../../Constants/URLS/URL";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DeleteConfirmation from "../../../Shared/DeleteConfirmation/DeleteConfirmation";
import { Link } from "react-router-dom";
export default function Questions() {
  const [question, setquestion] = useState<QU_IF[]>([]);
  const [isAddNewQU, setIsAddNewQU] = useState(false);
  const [_id, set_Id] = useState("0");

  //let [queBy_ID, setQueBy_ID] = useState<QU_IF>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };
  const openclearModal = () => {
    setIsAddNewQU(true);
    setIsModalOpen(true);
  };

  const [isdeleteModalOpen, setIsdeleteModalOpen] = useState(false);

  const openDeleteModal = (id: string) => {
    set_Id(`${id}`);
    setIsdeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsdeleteModalOpen(false);
  };

  interface QU_IF {
    description: string;
    difficulty: string;
    instructor: string;
    options: { A: string; B: string; C: string; D: string };
    points: number;
    status: string;
    answer: string;
    title: string;
    type: string;
    _id: string;
  }

  // get all QU
  const allQut = async () => {
    try {
      const { data } = await axiosInstance.get<QU_IF>(QuestionsUrl.gettAllQUT);
      setquestion(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allQut();
  }, []);

  // get QU by ID
  const getSpcQUbyid = async (id: string) => {
    try {
      set_Id(id);
      const { data } = await axiosInstance.get<QU_IF>(
        QuestionsUrl.getSpcQUT(`${id}`)
      );

      setValue("title", data?.title);
      setValue("description", data?.description);
      setValue("answer", data?.answer);
      setValue("difficulty", data?.difficulty);
      setValue("options.A", data?.options.A);
      setValue("options.B", data?.options.B);
      setValue("options.C", data?.options.C);
      setValue("options.D", data?.options.D);
      setValue("points", data?.points);
      setValue("type", data?.type);
      //  setQueBy_ID(data);
      setIsAddNewQU(false);
      openModal();
    } catch (error) {
      console.log(error);
    }
  };

  ///add Qu and Update
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<QU_IF>();
  const onSubmit: SubmitHandler<QU_IF> = async (data) => {
    try {
      if (isAddNewQU) {
        await axiosInstance.post(QuestionsUrl.addQuestion, data);
        toast.success("Record created successfully");
        // setQueBy_ID({
        //   description: "b",
        //   difficulty: "b",
        //   instructor: "",
        //   options: { A: "", B: "", C: "", D: "" },
        //   points: 0,
        //   status: "",
        //   answer: "",
        //   title: "",
        //   type: "",
        //   _id: "",
        // });
      } else {
        await axiosInstance.put(QuestionsUrl.updateQuestion(`${_id}`), data);
        toast.info(" updated successfully");
      }
      allQut();
      closeModal();
    } catch (error: any) {
      toast.success("error");
    }
  };

  //delete Qu

  const deleteQu = async () => {
    try {
      await axiosInstance.delete(QuestionsUrl.deleteQuestion(`${_id}`));
      toast.info("deleted successfully");
      allQut();
      closeDeleteModal();
    } catch (error: any) {
      toast.error(error);
    }
  };

  const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    return (
   <>
       
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg pt-0 max-w-screen-md w-full">
          
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 border-b-2 ">
              <h2 className="text-lg font-bold col-span-8    py-2  px-3 leading-10">
                Set up a new question
              </h2>

              {isAddNewQU ? (
                <button
                  type="submit"
                  className="col-span-2  py-2  border-l-2 text-center px-2"
                >
                  <i className=" fa-solid fa-check  align-middle	leading-10  "></i>
                </button>
              ) : (
                <button
                  type="submit"
                  className="col-span-2  py-2  border-l-2 text-center px-2 "
                >
                  <i className=" fa-solid fa-check-double  align-middle	leading-10  "></i>
                </button>
              )}
              <i
                onClick={closeModal}
                className=" cursor-pointer  border-l-2	 fa-solid fa-xmark col-span-2  py-2 text-center px-2 leading-10"
              ></i>
            </div>
            <div className="p-5">
              <div className="mb-3 sm:col-span-3 lex  place-items-stretch relative grid grid-cols-12 ">
                <div className=" border-2  border-r-0 rounded-l-lg  text-sm/6  col-span-4  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                  tite
                </div>
                <div className=" col-span-8 m-0 border-2 rounded-r-lg border-l-0 ">
                  <input
                    type="text"
                    className=" leading-10   w-full rounded-md
               bg-white px-3 py-1.5 shadow-none
              text-base text-gray-900 border-none
               placeholder:text-gray-400  sm:text-sm/6    "
                    {...register("title",{required:"this field is required"})}
                  />
                          {errors.title && <span className="text-xs text-red-700  ml-3">{errors.title.message}</span>}

                </div>

              </div>

              <div className="mb-3 sm:col-span-3 lex  place-items-stretch relative grid grid-cols-12 ">
                <div className=" border-2  border-r-0 rounded-l-lg  text-sm/6  col-span-4  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                  Description{" "}
                </div>
                <div className=" col-span-8 m-0 border-2 rounded-r-lg border-l-0 ">
                  <textarea
                    id="about"
                    {...register("description",{required:"this field is required"})}
                    className="block w-full rounded-md
                 bg-white px-3 py-1.5 text-base text-gray-900 border-none
                   outline-gray-300 placeholder:text-gray-400
                  sm:text-sm/6"
                  ></textarea>
                          {errors.description && <span className="text-xs text-red-700  ml-3">{errors.description.message}</span>}

                </div>
              </div>

              <div className=" sm:col-span-3 lex  place-items-stretch relative grid grid-cols-12 ">
                <div className="mb-3 border-2  border-r-0 rounded-l-lg  text-sm/6  col-span-1  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                  a
                </div>
                <div className=" mb-3 col-span-5 m-0 border-2 rounded-r-lg border-l-0 ">
                  <input
                    type="text"
                    {...register("options.A",{required:"this field is required"})}
                    className=" leading-10   w-full rounded-md
               bg-white px-3 py-1.5
              text-base text-gray-900 border-none
               placeholder:text-gray-400  sm:text-sm/6    "
                  />
                          {errors.options?.A && <span className="text-xs text-red-700  ml-3">{errors.options.A.message}</span>}
                </div>
                <div className="mb-3 border-2  border-r-0 rounded-l-lg  text-sm/6  col-span-1  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                  B
                </div>
                <div className=" mb-3 col-span-5 m-0 border-2 rounded-r-lg border-l-0 ">
                  <input
                    type="text"
                    {...register("options.B",{required:"this field is required"})}
                    className=" leading-10   w-full rounded-md
               bg-white px-3 py-1.5
              text-base text-gray-900 border-none
               placeholder:text-gray-400  sm:text-sm/6    "
                  />
                          {errors.options?.B && <span className="text-xs text-red-700  ml-3">{errors.options.B.message}</span>}

                </div>{" "}
                <div className="mb-3 border-2  border-r-0 rounded-l-lg  text-sm/6  col-span-1  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                  C
                </div>
                <div className=" mb-3 col-span-5 m-0 border-2 rounded-r-lg border-l-0 ">
                  <input
                    type="text"
                    {...register("options.C",{required:"this field is required"})}
                    className=" leading-10   w-full rounded-md
               bg-white px-3 py-1.5
              text-base text-gray-900 border-none
               placeholder:text-gray-400  sm:text-sm/6    "
                  />
                {errors.options?.C && <span className="text-xs text-red-700  ml-3">{errors.options.C.message}</span>}

                </div>
                <div className="mb-3 border-2  border-r-0 rounded-l-lg  text-sm/6  col-span-1  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                  D
                </div>
                <div className=" mb-3 col-span-5 m-0 border-2 rounded-r-lg border-l-0 ">
                  <input
                    type="text"
                    {...register("options.D",{required:"this field is required"})}
                    className=" leading-10   w-full rounded-md
               bg-white px-3 py-1.5
              text-base text-gray-900 border-none
               placeholder:text-gray-400  sm:text-sm/6    "
                  />
                 {errors.options?.D && <span className="text-xs text-red-700  ml-3">{errors.options.D.message}</span>}

                </div>
              </div>

              <div className="sm:col-span-3 lex  place-items-stretch relative grid grid-cols-12 ">
                <div className=" col-start-1 border-3  border-r-0 rounded-l-lg  text-sm/6  col-span-4  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                  Right Answer
                </div>
                <div className=" col-span-1 m-0 border-2 rounded-r-lg border-l-0 ">
                  <input
                    type="text"
                    {...register("answer",{required:"this field is required"})}
                    className=" leading-10   w-full rounded-md
               bg-white px-3 py-1.5 shadow-none text-center
              text-base text-gray-900 border-none
               placeholder:text-gray-400  sm:text-sm/6    "
                  />
                {errors.answer && <span className="text-xs text-red-700  ml-3">{errors.answer.message}</span>}

                </div>

                <div className="col-end-12 border-3  border-r-0 rounded-l-lg  text-sm/6  col-span-4  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                  Category type{" "}
                </div>
                <div className=" col-span-1 m-0 border-2 rounded-r-lg border-l-0 ">
                  <select
                    {...register("type") }
                    className="  leading-10   w-full rounded-md border-none bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>BE</option>
                    <option>FE</option>
                    <option>DO</option>
                  </select>
                  {/* <input
                    type="text"
                    value={queBy_ID?.type}
                    {...register("type")}
                    className="
               bg-white px-3 py-1.5 shadow-none text-center
              text-base
               placeholder:text-gray-400  sm:text-sm/6    "
                  /> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
   </>
    );
  };

  // const allQut = async () => {
  //   try {
  //     const res = await axiosInstance.get(
  //       QuestionsUrl.gettAllQUT
  //     );
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   allQut()
  // });

  return (
    <>
      <div className="flex items-center space-x-2 mb-5">
          <h3 className="font-light text-gray-500">
            <Link to="/dashboard">  Dashboard </Link>
             /            
             <Link to="/quiz">  Quizzes </Link>
             /        
            <Link
              to="#" // Adjust this route as needed
              className="font-normal text-gray-900 underline"
            >
              Question Bank
            </Link>
          </h3>
      </div>

      <div className="border-2 p-4 rounded-lg">
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
            <div className="font-bold text-xl" onClick={openclearModal}>
              New Questions
            </div>
          </button>
        </div>

        <table className=" text-center leading-loose border-separate border-spacing-1 border w-full border-none p-0 m-0 table-fixed">
          <thead>
            <tr className="bg-black text-white">
              <th className="border border-slate-300 ">title</th>
              <th className="border border-slate-300 ">Question Desc</th>
              <th className="border border-slate-300 ">difficulty level</th>
              <th className="border border-slate-300 "> points</th>
              <th className="border border-slate-300 "> Actions </th>
            </tr>
          </thead>
          <tbody>
            {question.map((QU) => (
              <tr key={QU._id}>
                <td className="border border-slate-300 ...">{QU.title}</td>
                <td className="border border-slate-300 ...">
                  {QU.description}
                </td>
                <td className="border border-slate-300 ...">{QU.difficulty}</td>
                <td className="border border-slate-300 ...">{QU.points}</td>

                <td className="border border-slate-300  text-orange">
                  <i
                    className="fa-solid fa-eye cursor-pointer "
                    onClick={() => getSpcQUbyid(QU._id)}
                  ></i>
                  <i
                    className="fa-solid fa-pen-to-square cursor-pointer px-2  mx-2"
                    onClick={() => getSpcQUbyid(QU._id)}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can cursor-pointer"
                    onClick={() => openDeleteModal(QU._id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <DeleteConfirmation
          deleteFun={deleteQu}
          closeModal={closeDeleteModal}
          showModal={isdeleteModalOpen}
          title={"questions"}
        />

        <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
