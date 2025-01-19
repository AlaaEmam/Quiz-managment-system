import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance, Quiz } from '../../../../Constants/URLS/URL';

export default function StudentResults() {

   const [completedQuizzes, setCompletedQuizzes] = useState([]);
  
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
          getCompletedQuizzes();
        }, []);
      



  const [data] = useState([
    {
      title: 'Computer Science',
      date: "25/1/2025",
      yourGrade: "40",
      subjectGrade: '50',
      numberOfQuestions: '40'
    },
    {
      title: 'Mathematics',
      date: "12/2/2025",
      yourGrade: "35",
      subjectGrade: '45',
      numberOfQuestions: '35'
    },
    {
      title: 'Physics',
      date: "5/3/2025",
      yourGrade: "42",
      subjectGrade: '48',
      numberOfQuestions: '38'
    },
    {
      title: 'Chemistry',
      date: "18/4/2025",
      yourGrade: "38",
      subjectGrade: '44',
      numberOfQuestions: '36'
    },
    {
      title: 'Biology',
      date: "30/5/2025",
      yourGrade: "45",
      subjectGrade: '50',
      numberOfQuestions: '40'
    },
    {
      title: 'English Literature',
      date: "14/6/2025",
      yourGrade: "30",
      subjectGrade: '35',
      numberOfQuestions: '28'
    },
    {
      title: 'History',
      date: "22/7/2025",
      yourGrade: "33",
      subjectGrade: '40',
      numberOfQuestions: '32'
    },
    {
      title: 'Geography',
      date: "9/8/2025",
      yourGrade: "37",
      subjectGrade: '42',
      numberOfQuestions: '34'
    }
  ]);

  return (
    <div className="border-2 rounded-lg p-4 mt-8">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl tracking-wide">Student Results</h3>
      </div>

      <div className="overflow-x-auto mt-3">
        <table className="table-auto border-collapse border w-full">
          <thead>
            <tr className="bg-black text-white">
              <th scope="col" className="border capitalize">Title</th>
              <th scope="col" className="border capitalize">Your Grade</th>
              <th scope="col" className="border capitalize">Subject Grade</th>
              <th scope="col" className="border capitalize">No. of Questions</th>
              <th scope="col" className="border capitalize text-center">Date</th>
             </tr>
          </thead>
          <tbody>
            {data.map((res, idx) => (
              <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {res.title}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">{res.yourGrade}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{res.subjectGrade}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{res.numberOfQuestions}</td>
                <td className="border border-gray-300 px-4 py-2 text-center ">{res.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}