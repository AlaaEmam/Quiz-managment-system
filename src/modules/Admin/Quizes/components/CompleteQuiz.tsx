import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import NoData from '../../../Shared/NoData/NoData';

interface CompletedQuizzes {
  _id: string;
  code: string;
  title: string;
  closed_at: number;
}

interface CompletedQuizzesProps {
  quizzes: CompletedQuizzes[]; // Prop name should match the parent component
}

const CompletedQuizzes = ({ quizzes }) => {
  return (
    <div className="border-2 rounded-lg p-4 mt-8">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl tracking-wide">Completed Quizzes</h3>
        <div>
          <Link to="/dashboard/results" className="flex items-center gap-2 text-sm">
            See All <FaLongArrowAltRight className="text-green" />
          </Link>
        </div>
      </div>

     {quizzes.length > 0 ? (
       <div className="overflow-x-auto mt-3">
       <table className="table-auto border-collapse border w-full">
         <thead>
           <tr className="bg-black text-white">
             <th className="border capitalize">Quiz Code</th>
             <th className="border">Quiz Name</th>
             <th className="border">End Date</th>
           </tr>
         </thead>
         <tbody>
           {quizzes.map((quiz, index) => (
             <tr key={index} 
             className='[&_td]:border [&_td]:border-gray-300 [&_td]:px-4 [&_td]:py-2'
             >
               <td>{quiz.code}</td>
               <td>{quiz.title}</td>
               <td>
               {format(new Date(quiz.closed_at), 'yyyy-MM-dd / hh:mm')}
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

export default CompletedQuizzes;
