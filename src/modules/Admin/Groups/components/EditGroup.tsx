
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosInstance, Student } from '../../../../Constants/URLS/URL';
import { MenuItem, Select, InputLabel, FormControl, Chip, Box, SelectChangeEvent } from '@mui/material';

interface FormData {
  name: string;
  students: string[]; // Array of selected student IDs
}

interface GroupData {
  _id: string;
  name: string;
  students: string[]; // Array of student IDs
}

interface EditGroupProps {
  handleCloseEditGroup: () => void;
  editGroup: (data: FormData) => any; // Function to edit the group
  isOpenEditGroup: boolean;
  groupData: GroupData; // Existing group data to be edited
}

interface StudentData {
  _id: string;
  first_name: string;
  last_name: string;
}

const EditGroup: React.FC<EditGroupProps> = ({ handleCloseEditGroup, editGroup, isOpenEditGroup, groupData }) => {
  
  const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm<FormData>({ mode: 'onChange' });
  const [students, setStudents] = useState<StudentData[]>([]); // List of all students

  // Fetch students data
  const getStudents = async () => {
    try {
      const response = await axiosInstance.get(Student.getAllWithoutgroup);
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Set form values when group data is passed for editing
  useEffect(() => {
    if (groupData) {
      setValue('name', groupData.name); // Set group name in form
      setValue('students', groupData.students); // Set students in form
    }
  }, [groupData, setValue]);

  // Fetch the students data only when the modal opens
  useEffect(() => {
    if (isOpenEditGroup) {
      getStudents();
    }
  }, [isOpenEditGroup]);

  // Reset form when modal is closed
  useEffect(() => {
    if (!isOpenEditGroup) {
      reset(); // Reset form data when modal is closed
    }
  }, [isOpenEditGroup, reset]);

  return (
    <>
      {isOpenEditGroup && (
        <div
          onClick={handleCloseEditGroup}
          className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${isOpenEditGroup ? 'opacity-100' : 'opacity-0'}`}
        >
          <form
            className={`bg-white rounded-lg shadow-lg w-1/3 md:w-1/3 transition-transform transform duration-300 ${isOpenEditGroup ? 'scale-100' : 'scale-95'}`}
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
            onSubmit={handleSubmit(editGroup)}
          >
            <div className="flex justify-between border-b-2 p-4">
              <h2 className="text-xl font-semibold">Edit Group</h2>
              <div className="text-2xl">
                <button type="submit" className="border-l-2 px-2">
                  <i className="bi bi-check-lg"></i>
                </button>
                <button type="button" className="border-l-2 px-2" onClick={handleCloseEditGroup}>
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="p-2">
                <div className="relative">
                  <span className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold border-black border-e-0 border rounded-lg rounded-e-none">
                    Group Name:
                  </span>
                  <input
                    placeholder="Edit Group Name..."
                    className="pl-40 rounded-lg w-full p-2 border border-black focus:border-none"
                    {...register('name', { required: 'This Name is required' })}
                  />
                </div>
                {errors.name && <div className="text-red-600">{errors.name.message}</div>}
              </div>

              <div className="p-2">
                <div className="relative border-black border rounded-lg overflow-hidden">
                  <label className="absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold">
                    Student List :
                  </label>
                  <FormControl sx={{ marginLeft: '30%', width: '70%', border: 'none' }}>
                    <Select
                      labelId="students-label"
                      multiple
                      sx={{ background: 'transparent' }}
                      aria-placeholder="Select Student..."
                      {...register('students')}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {(selected as string[]).map((value: string) => {
                            const student = students.find((student) => student._id === value);
                            return (
                              <Chip key={value} label={student ? `${student.first_name} ${student.last_name}` : ''} />
                            );
                          })}
                        </Box>
                      )}
                    >
                      {students.map((student) => (
                        <MenuItem key={student._id} value={student._id}>
                          {student.first_name} {student.last_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                {errors.students && <div className="text-red-600">{errors.students.message}</div>}
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditGroup;