import React from 'react';
import UpcomingQuizzes from './UpcomingQuizzes';
import TopStudents from './TopStudents';

const Dashboard = ({ 
  // incomingQuiz, topStudents 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1">
        <UpcomingQuizzes 
        // incomingQuiz={incomingQuiz}
         />
      </div>
      <div className="col-span-1">
        <TopStudents 
        // students={topStudents}
         />
      </div>
    </div>
  );
};

export default Dashboard;