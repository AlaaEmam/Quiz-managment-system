import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { TiArrowRight } from 'react-icons/ti';

import image1 from '../../../../assets/images/upcoming-quiz3.png';
import image2 from '../../../../assets/images/upcoming-quiz4.png';
import image3 from '../../../../assets/images/upcoming-quiz5.png';
import image4 from '../../../../assets/images/upcoming-quiz6.png';
import image5 from '../../../../assets/images/upcoming-quiz7.png';
interface UpcomingQuizzes {
  _id: string;
  schadule: string; // Correct spelling: `schedule`
  title: string;
  participants: number;
}

interface UpcomingQuizzesProps {
  incomingQuiz: UpcomingQuizzes[]; // Prop name should match the parent component
}

const UpcomingQuizzes = ({ incomingQuiz }: UpcomingQuizzesProps) => {
  const defaultAvatars = [image1, image2, image3, image4, image5];

  return (
    <div className="border-2 rounded-lg py-4 px-4">
      <div className="flex items-center justify-between m-2">
        <h3 className="font-bold text-xl tracking-wide mb-5">Upcoming 5 quizzes</h3>
        <div>
          <Link to="#" className="items-center">
            <div className="flex">
              Quiz directory <TiArrowRight className="text-3xl text-green" />
            </div>
          </Link>
        </div>
      </div>
      {incomingQuiz.map((quiz ,index) => (
        <div key={quiz._id} className="flex items-center gap-x-4 border-2 rounded-lg mb-5 p-1">
          <div className="w-24 h-24 p-2 rounded-lg justify-start">
            <img
                src={defaultAvatars[index % defaultAvatars.length]} 
              alt={quiz.title}
            />
          </div>
          <div>
            <span className="block font-bold text-lg">{quiz.title}</span>
            <span className="block">
              {format(new Date(quiz.schadule), 'yyyy-MM-dd')}
              <span>
                <span className="mx-3">|</span>
                {format(new Date(quiz.schadule), 'hh:mm')} 
              </span>
            </span>
            <div className="relative flex mt-3 justify-between gap-20 font-bold">
              <div>
                <span className="block font-semibold">
                  No. of students enrolled: {quiz.participants}
                </span>
              </div>
              <div className="open-div">
                <Link to="quiz-details" className="flex items-center">
                  Open
                  <div className="bg-green rounded-lg text-white m-1">
                    <TiArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingQuizzes;
