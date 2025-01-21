import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowRight } from 'react-icons/ti';
import { GoDotFill } from "react-icons/go";
// import { image1, image2, image3, image4, image5 } from '@/assets/index';  
import image1 from '../../../../assets/user.svg';
import image2 from '../../../../assets/user2.svg';
import image3 from '../../../../assets/user3.svg';
import image4 from '../../../../assets/user4.svg';
import image5 from '../../../../assets/user5.svg';
import NoData from '../../../Shared/NoData/NoData';

interface TopFiveStudents {
  _id: number;
  first_name: string;
  last_name: string;
  status: string;
  avg_score: number;
}

interface TopStudentsProps {
  students: TopFiveStudents[];
}

const TopStudents: React.FC<TopStudentsProps> = ({ students }) => {
  const defaultAvatars = [image1, image2, image3, image4, image5];

  return (
    <div className="border-2 rounded-lg py-4 ps-4">
      <div className="flex items-center justify-between m-2">
        <h3 className="font-bold text-xl tracking-wide mb-5">Top 5 Students</h3>
        <div>
          <Link to="/dashboard/students" className="items-center">
            <div className="flex">
              All Students <TiArrowRight className="text-3xl text-green" />
            </div>
          </Link>
        </div>
      </div>
    {students.length > 0 ? (
        students.map((student, index) => (
          <div key={student._id} className="flex items-center justify-between gap-x-4 border-2 rounded-lg m-2 overflow-hidden">
            <div className="flex">
              <div className="p-2">
                {/* Use the default avatar based on index */}
                <img 
                  src={defaultAvatars[index % defaultAvatars.length]} 
                  alt={`${student.first_name} ${student.last_name}`} 
                />
              </div>
              <div className="p-4">
                <span className="block font-bold text-lg">
                  {student.first_name} {student.last_name}
                </span>
                <span className="flex">
                    {/* Status Button */}
                    {student.status === 'active' ? (
                          <span className="font-bold flex items-center text-lime-600  px-3 py-1">
                            <span className="mr-1" >
                            <GoDotFill className='text-lime-600'/>
                            </span>
                            Online
                          </span>
                        ) : (
                          <span className="font-bold flex items-center text-red-700  px-3 py-1">
                          <span className="mr-1" >
                          <GoDotFill className='text-red-700'/>
                          </span>
                          Offline
                        </span>
                        )}               
                  <span className="mx-3">|</span>
                  <span className="font-bold flex items-center text-yellow-400  px-3 py-1">
                  Avg Score: 
                  </span>
                  {student.avg_score.toFixed(2)}%
                </span>
              </div>
            </div>
            <div>
              <Link to="student-details" className="flex items-center">
                <div className="bg-slate-800 rounded-full p-1 text-white m-3">
                  <TiArrowRight className="text-3xl" />
                </div>
              </Link>
            </div>
          </div>
        ))
    ): (
        <div className="text-center">
          <NoData />
        </div>
    )}
    </div>
  );
};

export default TopStudents;
