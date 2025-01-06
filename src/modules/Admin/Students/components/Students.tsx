import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../../../Constants/URLS/URL";

const Students = () => {
  const [studentsList, setStudentsList] = useState([]);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Fetch students from API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axiosInstance.get("student/without-group");
        setStudentsList(response.data); // Assuming response.data contains the students array
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
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
    <div className="w-full max-w-5xl px-4">
      <div className="w-full max-w-5xl px-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold text-gray-800">Students list</h1>
          <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-gray-300">
            + Add Student
          </button>
        </div>

        <div className="grid grid-cols -1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {studentsList.map((student) => (
            <div
              key={student._id}
              className="flex items-center justify-between w-full max-w-[490px] h-[70px] border border-gray-300 px-4 shadow-sm rounded-md"
            >
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-black text-[16px] font-semibold">{student.first_name} {student.last_name}</p>
                  <p className="text-gray-500 text-[14px]">Email: {student.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-end">
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
                <h2 className="text-xl font-semibold text-gray-800">Update Student</h2>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleUpdateStudent}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 text-black rounded-full hover:bg-gray-200"
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditModalOpen(false)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 text-black rounded-full hover:bg-gray-200"
                  >
                    <i className="fa-solid fa-x"></i>
                  </button>
                </div>
              </div>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={selectedStudent?.first_name}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, first_name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Email
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={selectedStudent?.email}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
