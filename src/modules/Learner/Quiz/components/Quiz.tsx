import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosInstance, LearnerQuiz } from "../../../../Constants/URLS/URL";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import logo from '../../../../assets/images/Logo.png';
import QuizModule from "./QuizModule";

interface QuestionOption {
  A: string;
  B: string;
  C: string;
  D: string;
  _id: string;
}

interface Question {
  _id: string;
  title: string;
  options: QuestionOption;
}

interface ExamData {
  title: string;
  description: string;
  duration: number; // Duration in seconds
  instructor: string;
  group: string;
  questions_number: number;
  questions: Question[];
}

interface QuizResponse {
  data: ExamData;
}

export default function Quiz() {
  const [exam, setExam] = useState<QuizResponse | null>(null);
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [timeRemaining, setTimeRemaining] = useState<number>(0); // State for countdown timer
  const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const fetchQuestions = async () => {
    try {
      const res = await axiosInstance.get<QuizResponse>(
        LearnerQuiz.qutionWithoutAnswer(`${id}`)
      );
      toast.info("Your Exam Started Now , Good Luck !");
      setExam(res.data);
      setTimeRemaining(res.data.data.duration * 60); // Set time remaining in seconds
      startTimer(res.data.data.duration); // Start the countdown timer
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch quiz");
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const startTimer = (duration: number) => {
    const totalSeconds = duration * 60; // Convert minutes to seconds
    setTimeRemaining(totalSeconds); // Initialize the timer with total seconds
  
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          // Optionally handle submission or notify the user that time is up
          return 0;
        }
        return prevTime - 1; // Decrement by 1 second
      });
    }, 2000); // Set interval to 1000ms (1 second)
  };

  const onSubmit = async (data: any) => {
    try {
      // Validate that all questions have been answered
      const unansweredQuestions = exam?.data.questions.filter((question) => !data[question._id]);
      if (unansweredQuestions && unansweredQuestions.length > 0) {
        toast.warn("Please answer all questions before submitting.");
        return; // Exit early if there are unanswered questions
      }
  
      const results = exam?.data.questions.map((question) => ({
        question: question._id,
        answer: data[question._id] || null,
      }));
  
      const response = await axiosInstance.post(
        LearnerQuiz.submitQuiz(`${id}`),
        { answers: results }
      );
  
      console.log(response);
      toast.success("Quiz submitted successfully!");
   
     // Pass the success message and modal state to the homepage
     navigate("/learner", {
      state: {
        modalOpen: true,
        message: "Quiz submitted successfully!"
      }
    });
    } catch (error) {
      // Handle different types of errors
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server responded with a status other than 2xx
          if (error.response.status === 409) {
            // Handle 409 Conflict error
            toast.error("Conflict occurred. Navigating to homepage.");
            navigate("/learner"); // Navigate to homepage on 409 error
          } else {
            const errorMessage = error.response.data?.message || "An error occurred while submitting the quiz.";
            toast.error(errorMessage);
          }
        } else if (error.request) {
          // Request was made but no response received
          toast.error("No response from the server. Please try again later.");
        } else {
          // Something else caused the error
          toast.error("An error occurred. Please try again.");
        }
      } else {
        // Non-Axios error
        toast.error("An unexpected error occurred. Please try again.");
      }
  
      console.error(error);
    }
  };
  return (
    <div className='w-full h-full'>
      <div className="flex items-center justify-center min-h-screen bg-black relative">
        <div className='absolute top-4 left-8'>
          <img src={logo} alt="logo" />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
          <h1 className="text-2xl font-bold mb-4">{exam?.data.title}</h1>
          <p className="text-lg mb-4">Time Remaining: {Math.floor(timeRemaining / 60)}:{String(timeRemaining % 60).padStart(2, '0')} </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exam?.data.questions.map((question, index) => (
                <div key={question._id} className="p-4 border rounded-lg">
                  <h2 className="text-lg font-semibold">{index + 1}. {question.title}</h2>
                  <div className="mt-2">
                    {Object.entries(question.options).slice(0, 4).map(([key, value], idx) => ( // Limit to 4 options
                      <div key={idx} className="flex items-center mb-2">
                        <input
                          type="radio"
                          id={`${question._id}_${key}`}
                          {...register(question._id)} // Register input with react-hook-form
                          value={key} // Set the value to the option key (A, B, C, D)
                          className="mr-2 checked:bg-green focus:ring-green"
                        />
                        <label htmlFor={`${question._id}_${key}`} className="text-gray-700">{value}</label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center" >
              <div className="text-center">
                  <button className="w-[150px] bg-green border-solid border-black border-[1px] shadow-md text-black px-4 py-2 hover:bg-green-600 mt-4">
                    Submit
                  </button>
                  <p className='font-extralight text-xs'>Send All response data</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <QuizModule isOpen={modalOpen} onClose={() => setModalOpen(false)} title={message} /> */}

    </div>
    
  );
}



     