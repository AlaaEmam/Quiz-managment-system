import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { axiosInstance, Student } from "../../../../Constants/URLS/URL";
import AllStudents from "./AllStudent"; 

const Students = () => {
  const [studentsList, setStudentsList] = useState<any[]>([]); // We can use 'any' here if response type is not known
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(6); // Number of students displayed per page

  const getStudents = async () => {
    try {
      const response = await axiosInstance.get(Student.getAll);
      console.log("all students", response);
      setStudentsList(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  // Calculate current students
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = studentsList.slice(indexOfFirstStudent, indexOfLastStudent);

  // Total number of pages
  const totalPages = Math.ceil(studentsList.length / studentsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle Next and Prev buttons
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="flex items-center space-x-2 mb-5">
        <h3 className="font-light text-gray-500">
          <Link to="/dashboard"> Dashboard </Link> / 
          <Link to="/quiz" className="font-normal text-gray-900 underline">
            All Students
          </Link>
        </h3>
      </div>

      <div className="border-2 rounded-lg py-4 ps-4">
        <div className="grid gap-4">
          <div className="col-span-1">
            {/* Displaying the students in 2 columns, 3 per column */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-4">
                {/* Display the first 3 students in the first column */}
                {currentStudents.slice(0, 3).map(student => (
                  <AllStudents key={student._id} students={[student]} />
                ))}
              </div>
              <div className="space-y-4">
                {/* Display the next 3 students in the second column */}
                {currentStudents.slice(3, 6).map(student => (
                  <AllStudents key={student._id} students={[student]} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="inline-flex flex-row items-center mt-4">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{indexOfFirstStudent + 1}</span> to 
          <span className="font-semibold text-gray-900 dark:text-white"> {Math.min(indexOfLastStudent, studentsList.length)} </span> 
          of <span className="font-semibold text-gray-900 dark:text-white">{studentsList.length}</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0 mx-3">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Prev
          </button>
          
          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Students;
