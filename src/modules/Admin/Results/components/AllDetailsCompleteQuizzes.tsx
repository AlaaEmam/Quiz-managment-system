import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import NoData from '../../../Shared/NoData/NoData';

interface Question {
    _id: string;
    text: string;
    options: string[];
}

interface AllQuizData {
    _id: string;
    code: string;
    title: string;
    duration: number; // Duration in minutes
    questions: Question[];
    participants: number;
    questions_number: number;
    score_per_question: number;
    status: string;
    type: string; // e.g., "FE", "BE", "DO"
    closed_at: string; // Date string
}

interface AllDetailsCompleteQuizzesProps {
    quizzes: AllQuizData[]; // Accept quizzes as a prop
}

const AllDetailsCompleteQuizzes: React.FC<AllDetailsCompleteQuizzesProps> = ({ quizzes }) => {
  return (
    <div className="border-2 rounded-lg p-4 mt-8">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl tracking-wide">Completed Quizzes</h3>
       
      </div>

   {quizzes.length > 0 ? (
       <div className="overflow-x-auto mt-3">
       <table className="table-auto border-collapse border w-full">
         <thead>
           <tr className="bg-black text-white">
             <th className="border capitalize">Quiz Code</th>
             <th className="border capitalize">Quiz Name</th>
             <th className="border">Duration (min)</th>
             <th className="border">Participants</th>              
             <th className="border capitalize">Questions Number</th>
             <th className="border capitalize">Score per Question</th>
             <th className="border capitalize">Type</th>
             <th className="border capitalize">Closed At</th>
             <th className="border capitalize">Result</th>
           </tr>
         </thead>
         <tbody>
           {quizzes.map((quiz) => (
             <tr key={quiz._id}>
               <td className="border border-gray-300 px-4 py-2">{quiz.code}</td>
               <td className="border border-gray-300 px-4 py-2">{quiz.title}</td>
               <td className="border border-gray-300 px-4 py-2">{quiz.duration} minutes</td>
               <td className="border border-gray-300 px-4 py-2">{quiz.participants} Student</td>
               <td className="border border-gray-300 px-4 py-2">{quiz.questions_number}</td>
               <td className="border border-gray-300 px-4 py-2">{quiz.score_per_question}</td>
               <td className="border border-gray-300 px-4 py-2">{quiz.type}</td>
               <td className="border border-gray-300 px-4 py-2">
                 {format(new Date(quiz.closed_at), 'yyyy-MM-dd / hh:mm')} PM
               </td>
               <td className="border border-gray-300 px-4 py-2">
                 <Link to={`${quiz._id}`} 
                  className="px-2 py-1 bg-[#C5D86D] rounded-tl-[10px]"
                 >
                   View
               </Link>
               </td>
   
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   ): (
    <div className="text-center">
      <NoData />
    </div>
   )}
    </div>
  );
};

export default AllDetailsCompleteQuizzes;