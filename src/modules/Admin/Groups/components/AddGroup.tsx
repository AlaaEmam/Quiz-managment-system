import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosInstance, Student } from '../../../../Constants/URLS/URL';
import { MenuItem, Select, InputLabel, FormControl, Chip, Box, SelectChangeEvent } from '@mui/material';

interface FormData {
  name: string;
  students: string[]; // Array of selected student IDs
}

interface AddGroupProps {
  handleCloseAddGroup: () => void;
  AddNewGroup: (data: FormData) => any;
  isOpenAddGroup: boolean;
}

interface StudentData {
  _id: string;
  first_name: string;
  last_name: string;
}

const AddGroup: React.FC<AddGroupProps> = ({ handleCloseAddGroup, AddNewGroup, isOpenAddGroup }) => {
  
  const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm<FormData>({ mode: 'onChange' });
  const [students, setStudents] = useState<StudentData[]>([]); // List of all students
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]); // Selected student IDs

  // Fetch students data
  const getStudents = async () => {
    try {
      const response = await axiosInstance.get(Student.getAllWithoutgroup);
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle change in selection
  const handleChange = (event: SelectChangeEvent<typeof selectedStudents>) => {
    const { value } = event.target;
    setSelectedStudents(typeof value === 'string' ? value.split(',') : value); // Update selected students
    setValue('students', typeof value === 'string' ? value.split(',') : value); // Update form value for selected students
  };

  useEffect(() => {
    getStudents();
  }, []);

  useEffect(() => {
    if (!isOpenAddGroup) {
      reset(); // Reset form data when modal is closed
    }
  }, [isOpenAddGroup, reset]);

  return (
    <>
      {isOpenAddGroup && (
        <div
          onClick={handleCloseAddGroup}
          className={` fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
            isOpenAddGroup ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <form
            className={`bg-white rounded-lg shadow-lg w-1/3 md:w-1/3 transition-transform transform duration-300 ${
              isOpenAddGroup ? 'scale-100' : 'scale-95'
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
            onSubmit={handleSubmit(AddNewGroup)}
          >
            <div className="flex justify-between border-b-2 p-4">
              <h2 className="text-xl font-semibold">Set up a new Group</h2>
              <div className="text-2xl">
                <button type="submit" className="border-l-2 px-2">
                  <i className="bi bi-check-lg"></i>
                </button>
                <button
                  type="button"
                  className="border-l-2 px-2"
                  onClick={handleCloseAddGroup}
                >
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
                    placeholder="Add Group Name..."
                    className="pl-40 rounded-lg w-full p-2 border border-black focus:border-none"
                    {...register('name', { required: 'This Name is required' })}
                  />
                </div>
                {errors.name && <div className="text-red-600">{errors.name.message}</div>}
              </div>

              <div className="p-2">
                <div className="relative border-black  border rounded-lg overflow-hidden">
                  <label className="z-10 absolute inset-y-0 flex items-center bg-light_cream px-5 font-bold">
                    Student List :
                  </label>
                  <FormControl sx={{ marginLeft: '30%', width: '70%' , border: 'none'}}>
                    <Select
                      labelId="students-label"
                      multiple
                      sx={{ background: 'transparent' }}
                      aria-placeholder="Select Student... "
                      value={selectedStudents}
                      onChange={handleChange}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value: string) => {
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
}

export default AddGroup;
