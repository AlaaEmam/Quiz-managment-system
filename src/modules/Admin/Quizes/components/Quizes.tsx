import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsBank2 } from "react-icons/bs";
import { FaCheck, FaCheckCircle, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosAlarm, IoIosCopy } from "react-icons/io";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import upcoming1 from "../../../../assets/images/upcoming-quiz1.png";
 import { axiosInstance, Groups, Quiz } from "../../../../Constants/URLS/URL";
import { GetRequiredMessage } from "../../../../Constants/Validation/validation";
import { useNavigate } from "react-router-dom";
import UpcomingQuizzes from "../../Dashboard/components/UpcomingQuizzes";
import CompletedQuizzes from "./CompleteQuiz";
import QuizCreationModal from "./QuizCreationModal";
import SuccessModal from "./SuccessModal";
// import upcoming2 from "../../../../assets/images/upcoming-quiz2.png"

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

export default function Quizes() {
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  const [firstFiveIncoming, setFirstFiveIncoming] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [code, setCode] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuizData>();


  const handleCopyCode = () => {
    navigator.clipboard.writeText(code.toString())
      .then(() => {
        toast.success("code copied to clipboard")
      })
  };



  const onSubmit = async (data: QuizData) => {
    try {
      const response = await axiosInstance.post(Quiz.Create_Quiz, data);
      setCode(response.data.data.code)
      console.log(code);
      console.log(response);
      toast.success("Create Successfully ");
      setIsModalOpen(false);
      setIsSecondModalOpen(true);
      reset()
    } catch (error) {
      console.log(error);
      toast.error(`Request failed`);
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

  const getFirstFiveIncoming = async () => {
    try {
      const response = await axiosInstance.get(Quiz.firstFiveIncomming);
      console.log(response);
      setFirstFiveIncoming(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCompletedQuizzes = async () => {
    try {
      const response = await axiosInstance.get(Quiz.lastFiveCompleted);
      console.log("getCompletedQuizzes: " ,response);
      setCompletedQuizzes(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getAllGroups();
    getFirstFiveIncoming();
    getCompletedQuizzes();
  }, []);

  return (
    <>
    <div className="flex items-center space-x-2 mb-5">
          <h3 className="font-light text-gray-500">
            <Link to="/dashboard">  Dashboard </Link>
             / 
            <Link
              to="/quiz" // Adjust this route as needed
              className="font-normal text-gray-900 underline"
            >
              Quizzes
            </Link>
          </h3>
    </div>

        <div className="grid grid-cols-2 gap-16">
        <div>
          <div className="grid grid-cols-2 gap-5">
            <button
              className="border-2 rounded-lg py-5 hover:bg-slate-900 hover:text-light_cream"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="flex flex-col justify-center items-center gap-y-2">
                <div>
                  <IoIosAlarm className="text-6xl" />
                </div>
                <div>
                  <span className="font-semibold text-lg">Set up a new quiz</span>
                </div>
              </div>
            </button>
            <Link
              to="questions"
              className="border-2 rounded-lg py-5 hover:bg-slate-900 hover:text-light_cream"
            >
              <div className="flex flex-col justify-center items-center gap-y-2">
                <div>
                  <BsBank2 className="text-6xl" />
                </div>
                <div>
                  <span className="font-semibold text-lg">Question Bank</span>
                </div>
              </div>
            </Link>
          </div>

          <CompletedQuizzes quizzes={completedQuizzes}/>
        </div>

        <div>
        <UpcomingQuizzes incomingQuiz={firstFiveIncoming} /> 

        </div>
      </div>

      <div>
      <QuizCreationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onSubmit}
        errors={errors}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        groups={groups}
      />
      <SuccessModal
          isOpen={isSecondModalOpen}
          onClose={() => setIsSecondModalOpen(false)}
          code={code}
          onCopyCode={handleCopyCode}
        />

      </div>
    </>
  );
}
