import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { TiArrowRight } from 'react-icons/ti';

import image1 from '../../../../assets/images/upcoming-quiz3.png';
import image2 from '../../../../assets/images/upcoming-quiz4.png';
import image3 from '../../../../assets/images/upcoming-quiz5.png';
import image4 from '../../../../assets/images/upcoming-quiz6.png';
import image5 from '../../../../assets/images/upcoming-quiz7.png';
import NoData from '../../../Shared/NoData/NoData';
interface UpcomingQuizzes {
  _id: string;
  schadule: string; // Correct spelling: `schedule`
  title: string;
  code: string;
  participants: number;
}

interface UpcomingQuizzesProps {
  incomingQuiz: UpcomingQuizzes[]; // Prop name should match the parent component
}

const StudentUpcommingQuiz = ({ incomingQuiz }: UpcomingQuizzesProps) => {
  const defaultAvatars = [image1, image2, image3, image4, image5];

  return (
    <div className="border-2 rounded-lg py-4 px-4">
      <div className="flex items-center justify-between m-2">
        <h3 className="font-bold text-xl tracking-wide mb-5">Upcoming 5 quizzes</h3>
      </div>
      {incomingQuiz.length > 0 ? (
        incomingQuiz.map((quiz, index) => (
          <div key={quiz._id} className="flex items-center gap-x-4 border-2 rounded-lg mb-5 p-1">
            <div className="w-24 h-24 p-2 rounded-lg justify-start">
              <img
                src={defaultAvatars[index % defaultAvatars.length]} 
                alt={quiz.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <span className="block font-bold text-lg">{quiz.title}</span>
              <span className="block font-bold text-lg">
                Exam Code:
                <span className="text-sm font-normal text-gray-500"> {quiz.code}</span>
                </span>
             <div className='flex items-center justify-around'>
            <div> 
              <span className="mx-2">
                {format(new Date(quiz.schadule), 'yyyy-MM-dd')}
                <span>
                  <span className="mx-3">|</span>
                  {format(new Date(quiz.schadule), 'hh:mm a')} {/* Added am/pm */}
                </span>
              </span>
              </div>
             
          <div>
          <button className="open-div text-xs text-light_cream bg-black p-2 rounded-lg">   
                  <Link to="/learner/join-quiz" className="flex items-center ">
                    Start Your Exam
                    <div className="bg-light-cream rounded-lg text-white m-1">
                      <TiArrowRight />
                    </div>
                  </Link>
                </button>
          </div>
             </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">
          <NoData />
        </div>
      )}
    </div>
  );
};

export default StudentUpcommingQuiz;
