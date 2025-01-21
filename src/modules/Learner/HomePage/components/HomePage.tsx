import { IoIosAlarm } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { TiArrowRight } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { axiosInstance, LearnerQuiz } from '../../../../Constants/URLS/URL';
import income from '../../../../assets/images/upcoming-quiz1.png';
import NoData from "../../../Shared/NoData/NoData";
import QuizModule from "../../Quiz/components/QuizModule";
import UpcomingQuizzes from "../../../Admin/Dashboard/components/UpcomingQuizzes";
import StudentUpcommingQuiz from "./StudentUpcommingQuiz";


export default function HomePage() {
  const [completeQuiz, setCompleteQuiz] = useState([]); // Completed quizzes
  const [incomingQuiz, setIncomingQuiz] = useState<UpcomingQuizzes[]>([]); // Upcoming quizzes
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    navigate('/learner/join-quiz');
  };

    // Check if modal state is passed from the Quiz page
    useEffect(() => {
      if (location.state) {
        setModalOpen(location.state.modalOpen);
        setMessage(location.state.message);
      }
    }, [location.state]); // Dependency array ensures it updates on page load
  
  // Fetch upcoming quizzes
  const getIncomingQuiz = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(LearnerQuiz.firstFiveIncomming);
      setIncomingQuiz(response.data);
      console.log(response.data);
    } catch (err) {
      setError('Failed to fetch upcoming quizzes.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch completed quizzes
  const lastFiveCompleted = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(LearnerQuiz.lastFiveCompleted);
      setCompleteQuiz(response.data);
    } catch (err) {
      setError('Failed to fetch completed quizzes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    lastFiveCompleted();
    getIncomingQuiz();
  }, []);

  return (
    <div className="">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Quizzes Section */}
      <div className="col-span-1">
        <StudentUpcommingQuiz incomingQuiz={incomingQuiz} /> {/* Correct prop name */}
      </div>
        {/* <div className="border-2 rounded-lg py-4 px-4">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-xl tracking-wide">
            Your Upcoming 5 Quizzes
            </h3>
          </div>
          {incomingQuiz.length > 0 ? (
            incomingQuiz.map((quiz) => (
              <div
                key={quiz._id}
                className="flex items-center gap-x-4 border rounded-lg mb-5 p-4 bg-gray-50 hover:shadow-lg transition"
              >
                <div className="w-24 h-24 overflow-hidden rounded-lg">
                  <img
                    src={income}
                    alt={quiz.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{quiz.title}</h4>
                  <p className="text-sm text-gray-500">
                    {format(new Date(quiz.schadule), 'yyyy-MM-dd')} |{' '}
                    {format(new Date(quiz.schadule), 'hh:mm a')}
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm font-medium text-gray-600">
                      Questions: {quiz.questions_number}
                    </span>
                    <Link
                      to={`/quiz-details/${quiz._id}`}
                      className="flex items-center text-green-600 font-semibold"
                    >
                      Open
                      <div className="bg-green-600 rounded-full text-white ml-2 p-2">
                        <TiArrowRight />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="mt-2 border-2 rounded-xl p-5">
            <div className="text-center">
              <NoData />
            </div>
          </div>
          )}
        </div> */}

        {/* Completed Quizzes Section */}
        <div className="border-2 rounded-lg py-4 px-4">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-xl tracking-wide">
              Completed Quizzes
            </h3>
            <Link
              to="/dashboard/results"
              className="flex items-center text-sm text-green-600"
            >
              Results <FaLongArrowAltRight className="ml-1" />
            </Link>
          </div>
          <div className="overflow-x-auto">
          {completeQuiz.length > 0 ? (

            <table className="table-auto w-full border-collapse border">
              <thead>
                <tr className="bg-black text-white">
                  <th className="border px-4 py-2">Title</th>
                  <th className="border px-4 py-2">Difficulty</th>
                  <th className="border px-4 py-2">Quiz Code</th>
                  <th className="border px-4 py-2">End Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  completeQuiz.map((quiz: any) => (
                    <tr key={quiz._id} className="hover:bg-gray-100">
                      <td className="border px-4 py-2">{quiz.title}</td>
                      <td className="border px-4 py-2">{quiz.difficulty}</td>
                      <td className="border px-4 py-2">{quiz.code}</td>
                      <td className="border px-4 py-2">
                        {format(
                          new Date(quiz.closed_at),
                          'yyyy-MM-dd / hh:mm a',
                        )}
                      </td>
                    </tr>
                  ))
                }
               
              </tbody>
            </table>
             ) : (
              <div className="text-center">
                <NoData />
              </div>
            )}
          </div>
        </div>
      </div>
      <QuizModule isOpen={modalOpen} onClose={() => setModalOpen(false)} title={message} />

    </div>
  );
}
