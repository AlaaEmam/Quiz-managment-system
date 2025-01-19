import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { TiArrowRight } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { axiosInstance, LearnerQuiz } from '../../../../Constants/URLS/URL';
import income from '../../../../assets/images/upcoming-quiz1.png';

export default function HomePage() {
  const [completeQuiz, setCompleteQuiz] = useState([]); // Completed quizzes
  const [incomingQuiz, setIncomingQuiz] = useState([]); // Upcoming quizzes
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch upcoming quizzes
  const getIncomingQuiz = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(LearnerQuiz.firstFiveIncomming);
      setIncomingQuiz(response.data);
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
    <div className="p-6">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Quizzes Section */}
        <div className="border-2 rounded-lg py-4 px-4">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-xl tracking-wide">
              Upcoming 5 Quizzes
            </h3>
            {/* <Link
              to="/dashboard/quiz"
              className="flex items-center text-sm text-green-600"
            >
              Quiz Directory <TiArrowRight className="text-2xl ml-1" />
            </Link> */}
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
            <p>No upcoming quizzes available.</p>
          )}
        </div>

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
                {completeQuiz.length > 0 ? (
                  completeQuiz.map((quiz: Any) => (
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
                ) : (
                  <tr>
                    <td colSpan={3} className="text-center text-gray-500 py-4">
                      No completed quizzes available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
