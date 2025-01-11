import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../../../Constants/URLS/URL";
import img1 from "../../../../assets/images/img1.jpg";
import img2 from "../../../../assets/images/img2.jpg";
import img3 from "../../../../assets/images/img3.jpg";
import img4 from "../../../../assets/images/img4.jpg";

const Students = () => {
  const [studentsList, setStudentsList] = useState([]);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const studentImages = [img1, img2, img3, img4];

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axiosInstance.get("student/without-group");
        setStudentsList(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    getStudents();
  }, []);

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (student) => {
    setSelectedStudent(student);
    setDeleteModalOpen(true);
  };

  const handleUpdateStudent = (e) => {
    e.preventDefault();
    setEditModalOpen(false);
  };

  const handleDeleteStudent = () => {
    setDeleteModalOpen(false);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
    setDeleteModalOpen(false);
  };

  return (
    <div className="w-full px-4">
      <div className="w-full px-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold text-gray-800">Students list</h1>
          <button
            onClick={() => setEditModalOpen(true)}
            className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-gray-300 border border-gray-300"
          >
            + Add Student
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {studentsList.map((student, index) => (
            <div
              key={student._id}
              className="flex items-center w-full h-[100px] border border-gray-300 p-4 shadow-sm rounded-md"
            >
              <img
                src={studentImages[index % studentImages.length]}
                alt="student"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1 ml-4">
                <p className="text-black text-[16px] font-semibold">
                  {student.first_name} {student.last_name}
                </p>
                <p className="text-gray-500 text-[14px]">Email: {student.email}</p>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="text-gray-700 hover:text-gray-900 text-lg"
                  onClick={() => handleEditClick(student)}
                >
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                <button
                  type="button"
                  className="text-gray-700 hover:text-gray-900 text-lg"
                  onClick={() => handleDeleteClick(student)}
                >
                  <i className="fa-solid fa-circle-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
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
                    onClick={handleCloseModal}
                    className="w-6 h-6 flex items-center justify-center bg-gray-100 text-black rounded-full hover:bg-gray-200"
                  >
                    <i className="fa-solid fa-xmark"></i>
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
                      setSelectedStudent({ ...selectedStudent, first_name: e.target.value })
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

        {/* Delete Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-[400px] p-6 rounded-lg shadow-xl">
              <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                <h2 className="text-lg font-medium text-gray-800">Delete Student</h2>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleDeleteStudent}
                    className="w-6 h-6 flex items-center justify-center bg-gray-100 text-black rounded-full hover:bg-gray-200"
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="w-6 h-6 flex items-center justify-center bg-gray-100 text-black rounded-full hover:bg-gray-200"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
              <p className="text-gray-600">Are you sure you want to delete this student?</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;
