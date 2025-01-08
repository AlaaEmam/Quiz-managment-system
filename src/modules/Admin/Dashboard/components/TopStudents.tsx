import React from 'react';
import image from '../../../../assets/user.png';
import { Link } from 'react-router-dom';
import { TiArrowRight } from 'react-icons/ti';
const TopStudents = ({ 
    // students 
}) => {
  return (
    <div className="border-2 rounded-lg py-4 ps-4">
   <div className="flex items-center justify-between  m-2 ">
      <h3 className="font-bold text-xl tracking-wide mb-5">
        Top 5 Students
      </h3>
      <div >
        <Link to="student" className=" items-center ">
          <div className="flex">
          All Students <TiArrowRight className="text-3xl text-green" />
          </div>
        </Link>
      </div>
   </div>
      {/* {students.map((student) => ( */}
        <div 
        // key={student.id} 
        className="flex items-center justify-between gap-x-4 border-2 rounded-lg m-2 overflow-hidden">
          <div className='flex'>
          <div className='user-image'>
            <img 
            src={image}
            // src={student.profilePicture} 
            // alt={student.name} 
           />
          </div>
          <div className='p-4'>
            <span className="block font-bold text-lg">
            Emmanuel James
                {/* {student.name} */}
                </span>
            <span className="block">
            Class rank: 1th
                {/* {student.rank} */}
                <span className="mx-3">|</span>
                Average score: 87%
                {/* {student.score} */}
            </span>
          </div>
          </div>
          <div className=''>
            <Link to="student-details" className="flex items-center ">
              <div className="bg-slate-800 rounded-full p-1 text-white m-3">
                <TiArrowRight className="text-3xl" />
              </div>
            </Link>
          </div>
      {/* ))} */}
    </div>
    </div>
  );
};

export default TopStudents;