import React, { useState, useEffect } from 'react';
import { Link, Router } from 'react-router-dom';
import { axiosInstance, Quiz } from '../../../../Constants/URLS/URL';
import AllDetailsCompleteQuizzes from './AllDetailsCompleteQuizzes';
import ResultSingleQuiz from './ResultSingleQuiz';



const Results = () => {
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
    
    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>{error}</div>;

    
    return (
        <>
    <div className="flex items-center space-x-2 mb-5">
        <h3 className="font-light text-gray-500">
        <Link to="/dashboard">  Dashboard </Link>
            / 
        <Link
            to="/results" // Adjust this route as needed
            className="font-normal text-gray-900 underline"
        >
            Complete Quizzes
        </Link>
        </h3>
    </div>
  
  <AllDetailsCompleteQuizzes  quizzes={completedQuizzes}/>
        </>
      
    );
};

export default Results;
