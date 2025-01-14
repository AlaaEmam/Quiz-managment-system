import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Interface for Result
interface Result {
  studentName: string;
  score: number;
  average: number;
  timeSubmitted: string; // Assuming it's a string in the format "HH:MM"
}

const ResultSingleQuiz: React.FC = () => {
  const { quizId } = useParams();  // Get the quizId from the URL parameters
  const [results, setResults] = useState<Result[]>([]);
  const [quizTitle, setQuizTitle] = useState<string>('');

  useEffect(() => {
    // Using fake data instead of API call for demonstration purposes
    if (quizId) {
      // Fake quiz data based on quizId for demo purposes
      const fakeQuizData = {
        title: `Quiz Title for ID: ${quizId}`,
        results: [
          { studentName: 'Jacob Hamuel', score: 16, average: 20, timeSubmitted: '09:00' },
          { studentName: 'Emily Clarke', score: 18, average: 20, timeSubmitted: '09:15' },
          { studentName: 'David John', score: 14, average: 20, timeSubmitted: '09:30' },
        ],
      };

      setQuizTitle(fakeQuizData.title);
      setResults(fakeQuizData.results);
    }
  }, [quizId]); // Dependency on quizId ensures fetching data when quizId changes

  return (
    <>
      <div className="flex items-center space-x-2 mb-5">
        <h3 className="font-light text-gray-500">
          <Link to="/dashboard"> Dashboard </Link>
          / 
          <Link to="/dashboard/results"> Complete Quizzes </Link>/
          <Link to="#" className="font-normal text-gray-900 underline"> Result </Link>
        </h3>
      </div>

      <div className="border-2 rounded-lg p-4 mt-8">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-xl tracking-wide">Results for Quiz</h3>
          <div>
            <Link to="/dashboard/results" className="flex items-center gap-2 text-sm">
              Back to Quizzes <FaLongArrowAltRight className="text-green" />
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto mt-3">
          <table className="table-auto border-collapse border w-full">
            <thead>
              <tr className="bg-black text-white">
                <th className="border capitalize">Student Name</th>
                <th className="border">Score</th>
                <th className="border">Average</th>
                <th className="border">Time Submitted</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{result.studentName}</td>
                  <td className="border border-gray-300 px-4 py-2">{result.score}</td>
                  <td className="border border-gray-300 px-4 py-2">{result.average}</td>
                  <td className="border border-gray-300 px-4 py-2">{result.timeSubmitted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ResultSingleQuiz;
