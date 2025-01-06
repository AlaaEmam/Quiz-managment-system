import React, { useState } from "react";

const Students = () => {
  const studentsList = [
    { id: 1, name: "JSB Angular", students: 20, phone: "123-456-7890" },
    { id: 2, name: "JSB React", students: 20, phone: "123-456-7890" },
    { id: 3, name: "FE Fundamentals", students: 20, phone: "123-456-7890" },
    { id: 4, name: "name", students: 20, phone: "123-456-7890" },
    { id: 5, name: "name", students: 20, phone: "123-456-7890" },
    { id: 6, name: "name", students: 20, phone: "123-456-7890" },
  ];

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {studentsList.map((student) => (
            <div
              key={student.id}
              className="flex items-center justify-between w-full max-w-[490px] h-[70px] border border-gray-300 px-4 shadow-sm rounded-md"
            >
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-black text-[16px] font-semibold">{student.name}</p>
                  <p className="text-gray-500 text-[14px]">No. of students: {student.students}</p>
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
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Update Student</h2>
              <form onSubmit={handleUpdateStudent}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={selectedStudent.name}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="students">
                    No. of Students
                  </label>
                  <input
                    type="number"
                    id="students"
                    value={selectedStudent.students}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, students: +e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={selectedStudent.phone}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditModalOpen(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Save
                  </button>
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