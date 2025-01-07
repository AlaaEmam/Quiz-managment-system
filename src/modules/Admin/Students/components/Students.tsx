import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../../../Constants/URLS/URL";

const Students = () => {
  const [studentsList, setStudentsList] = useState([]);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Get students from API
  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axiosInstance.get("student/without-group");
        setStudentsList(response.data); // Assuming response.data contains the students array
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    getStudents();
  }, []); // This effect runs once when the component mounts

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setEditModalOpen(true);
  };

  const handleUpdateStudent = (e) => {
    e.preventDefault();
    console.log("Updated Student:", selectedStudent);
    setEditModalOpen(false);
  };

  return (
    <div className="w-full px-4">
      <div className="w-full px-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold text-gray-800">Students list</h1>
          <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-gray-300">
            + Add Student
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {studentsList.map((student) => (
            <div
              key={student._id}
              className="flex flex-col w-full h-[100px] border border-gray-300 p-4 shadow-sm rounded-md"
            >
              <div className="flex flex-col">
                <p className="text-black text-[16px] font-semibold">
                  {student.first_name} {student.last_name}
                </p>
                <p className="text-gray-500 text-[14px]">Email: {student.email}</p>
              </div>

              <div className="flex items-center gap-4 justify-end mt-2">
                <button
                  type="button"
                  className="text-gray-700 hover:text-gray-900 text-lg"
                  aria-label="Edit"
                  onClick={() => handleEditClick(student)}
                >
                  <i className="fas fa-pen-to-square"></i>
                </button>
                <button
                  type="button"
                  className="text-gray-700 hover:text-gray-900 text-lg"
                  aria-label="Delete"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {isEditModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-[400px] p-6 rounded-lg shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-300">
                <h2 className="text-lg font-medium text-gray-800">Update student</h2>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleUpdateStudent}
                    className="w-6 h-6 flex items-center justify-center bg-gray-100 text-black rounded-full hover:bg-gray-200"
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditModalOpen(false)}
                    className="w-6 h-6 flex items-center justify-center bg-gray-100 text-black rounded-full hover:bg-gray-200"
                  >
                    <i className="fa-solid fa-x"></i>
                  </button>
                </div>
              </div>
              <form>
                <div className="mb-4 flex items-center">
                  <label
                    className="block text-gray-700 text-sm font-medium px-2 py-1 rounded bg-[#FFEDDF] w-20 text-center"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={selectedStudent?.first_name}
                    onChange={(e) =>
                      setSelectedStudent({ ...selectedStudent, first_name: e.target .value })
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-0"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <label
                    className="block text-gray-700 text-sm font-medium px-2 py-1 rounded bg-[#FFEDDF] w-20 text-center"
                    htmlFor="email"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={selectedStudent?.email}
                    onChange={(e) =>
                      setSelectedStudent({ ...selectedStudent, email: e.target.value })
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-0"
                  />
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-4">
          <span className="text-sm text-gray-500">... 1 2 3 ...</span>
        </div>
      </div>
    </div>
  );
};

export default Students;