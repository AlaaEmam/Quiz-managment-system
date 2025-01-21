import React from 'react'; 
import { Link } from 'react-router-dom';
import { TiArrowRight } from 'react-icons/ti';
import { GoDotFill } from "react-icons/go";
import image5 from '../../../../assets/user5.svg';

interface Group {
  name: string;
}

interface Student {
  _id: number;
  email: string;
  first_name: string;
  last_name: string;
  status: string;
  group: Group;  // Update group to be a single object, not an array
}

interface AllStudentsProps {
  students: Student[]; 
}

const AllStudents: React.FC<AllStudentsProps> = ({ students }) => {
  return (
<>

{students.map((student) => (
        <div key={student._id} className="flex items-center justify-between gap-x-4 border-2 rounded-lg m-2 overflow-hidden">
          <div className="flex">
            <div className="p-4">
              <span className="block font-bold  ">
               Student Name: <span className="font-normal "> {student.first_name} {student.last_name}</span>
              </span>
              <span className="block font-bold  ">
               Student Email:  <span className="font-normal ">  {student.email} </span>
              </span>
              <span className="flex items-center">
                {student.status === 'active' ? (
                  <span className="font-bold flex items-center text-lime-600 px-3 py-1">
                    <GoDotFill className="text-lime-600" />
                    <span className="ml-1">Online</span>
                  </span>
                ) : (
                  <span className="font-bold flex items-center text-red-700 px-3 py-1">
                    <GoDotFill className="text-red-700" />
                    <span className="ml-1">Offline</span>
                  </span>
                )}
                <span className="mx-3">|</span>
                <span className="font-bold flex items-center text-yellow-400 px-3 py-1">
                  Group Name: {student.group?.name}
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
</>
  );
};

export default AllStudents;
