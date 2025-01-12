import React, { useEffect, useState } from 'react';
import UpcomingQuizzes from './UpcomingQuizzes';
import TopStudents from './TopStudents';
import { axiosInstance } from '../../../../Constants/URLS/URL';
import { Quiz, Student } from '../../../Shared/Url/components/URL';

export default function Dashboard() {
  const [topFiveStudents, setTopFiveStudents] = useState([]);
  const [firstFiveIncoming, setFirstFiveIncoming] = useState([]);

  
  const getTopFiveStudents = async () => {
    try {
      const response = await axiosInstance.get(Student.gettopFiveStudents); // Correct API endpoint
      console.log(response.data);
      setTopFiveStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFirstFiveIncoming = async () => {
    try {
      const response = await axiosInstance.get(Quiz.firstFiveIncomming); // Correct API endpoint
      console.log(response.data);
      setFirstFiveIncoming(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopFiveStudents();
    getFirstFiveIncoming();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1">
        <UpcomingQuizzes incomingQuiz={firstFiveIncoming} /> {/* Correct prop name */}
      </div>
      <div className="col-span-1">
        <TopStudents students={topFiveStudents} /> {/* Correct prop name */}
      </div>
    </div>
  );
}
