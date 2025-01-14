import axios from 'axios';

export const baseURL = 'https://upskilling-egypt.com:3005/api';

export const axiosInstance = axios.create({
  baseURL,
   headers: { Authorization: localStorage.getItem('token') },
});

export const AuthAxiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login';
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const Auth = {
  login: `/auth/login`,
  register: `/auth/register`,
  changePassword: `/auth/change-password`,
  forgotPassword: `auth/forgot-password`,
  resetPassword: `auth/reset-password`,
  logout: `auth/logout`,
};

export const Groups = {
  getAll: `/group`,
  createGroup: `/group`,
  getById: (id: string) => `/group/${id}`,
  updateGroup: (id: string) => `/group/${id}`,
  deleteGroup: (id: string) => `/group/${id}`,
};

export const Student = {
  getAll: `/student`,
  getAllWithoutgroup: `/student/without-group`,
  getById: (id: string) => `/student/${id}`,
  updateMyAcc: `/student`,
  deleteStudent: (id: string) => `/student/${id}`,
  deleteFromGroup: (id: string, id2: string) => `/student/${id}/${id2}`,
  AddToGroup: (id: string, id2: string) => `/student/${id}/${id2}`,
  updateStudentGroup: (id: string, id2: string) => `/student/${id}/${id2}`,
  gettopFiveStudents: `/student/top-five`,
};



export const Quiz = {
  Create_Quiz: `/quiz`,
  Incomming_Quiz: `/quiz/incomming`,
  getAll: `/quiz`,
  deleteQuiz : (id:number) => `/quiz/${id}`,
  getQuizById : (id:number) => `/quiz/${id}`,
  editQuiz : (id:number) => `/quiz/${id}`,
  firstFiveIncomming:`quiz/incomming`,
  lastFiveCompleted:`/quiz/completed`,
  allResults:`quiz/result`,


};

export const QuestionsUrl = {
  gettAllQUT:"/question",
  getSpcQUT:(id:string)=>`/question/${id}`,
  addQuestion:'/question',
  updateQuestion:(id:string)=>`/question/${id}`,
  deleteQuestion:(id:string)=>`/question/${id}`,
};

// LEARNER APIS

export const LearnerQuiz = {
  joinQuiz:"/quiz/join",
};
