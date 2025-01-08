import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { TiArrowRight } from 'react-icons/ti';
import image from '../../../../assets/images/upcoming-quiz1.png';

const UpcomingQuizzes = ({ 
    // incomingQuiz 
}) => {
  return (
    <div className="border-2 rounded-lg py-4 px-4">
      <div className="flex items-center justify-between  m-2 ">
          <h3 className="font-bold text-xl tracking-wide mb-5">
          Upcoming 5
            {/* {incomingQuiz.length}  */}
            quizzes      
            </h3>
          <div >
            <Link to="#" className=" items-center ">
              <div className="flex">
              Quiz directory <TiArrowRight className="text-3xl text-green" />
              </div>
            </Link>
          </div>
      </div>
      {/* {incomingQuiz.map((quiz) => ( */}
        <div 
        // key={quiz.id} 
        className="flex items-center gap-x-4 border-2 rounded-lg mb-5">
          <div className="bg-light_cream p-2 rounded-lg justify-start ">
            <img              
            src={image}
            // src={quiz.image} alt={quiz.title}
             />
          </div>
          <div>
            <span className="block font-bold text-lg">
            Introduction to computer programming
                {/* {quiz.title} */}
                </span>
            <span className="block">
            12 / 03 / 2023
              {/* {format(new Date(quiz.schedule), "yyyy-MM-dd")} */}
              <span>
                <span className="mx-3">|</span>
                09:00 AM
                {/* {format(new Date(quiz.schedule), "HH:mm")} */}
              </span>
            </span>

            <div className="relative flex mt-3 justify-between gap-20 font-bold">
              <div>
                <span className="block font-semibold">
                  No. of students enrolled: 22
                  {/* {quiz.participants} */}
                </span>
              </div>
              <div className='open-div '>
                <Link to="quiz-details" className="flex items-center ">
                  Open
                  <div className="bg-green rounded-lg text-white m-1">
                    <TiArrowRight />
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      {/* ))} */}
    </div>
  );
};

export default UpcomingQuizzes;