import React, { useEffect, useState } from 'react';
import UpcomingQuizzes from './UpcomingQuizzes';
import TopStudents from './TopStudents';
import { axiosInstance } from '../../../../Constants/URLS/URL';
import { Student } from '../../../Shared/Url/components/URL';





export default  function Dashboard () {
const [topFiveStudents , setTopFiveStudents] = useState([]);

  const getTopFiveStudents = async () => {
    try {
      const response = await axiosInstance.get(Student.gettopFiveStudents);
      console.log(response.data);
      setTopFiveStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopFiveStudents();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1">
        <UpcomingQuizzes 
        // incomingQuiz={incomingQuiz}
         />
      </div>
      <div className="col-span-1">
        <TopStudents 
        students={topFiveStudents}
         />
      </div>
    </div>
  );
};

