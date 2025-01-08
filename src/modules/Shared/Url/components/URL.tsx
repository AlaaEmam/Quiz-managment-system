import axios from "axios";


export const  baseURL="https://upskilling-egypt.com:3005/api";

export const axiosInstance=axios.create({baseURL, headers:{Authorization:localStorage.getItem("token")}})

export const Auth={
  register:`/auth/register`,
  login:`/auth/login`,
  changePassword:`/auth/change-password`,
  logout:`auth/logout`,
  forgotPassword:`auth/forgot-password`,
  resetPassword:`auth/reset-password`
}

export const Group={
  getAll:`/group`,
  createGroup:`/group`,
  getById:(id:string)=>`/group/${id}`,
  updateGroup:(id:string)=>`/group/${id}`,
  deleteGroup:(id:string)=>`/group/${id}`,
}

export const Student={
  getAll:`/student`,
  getAllWithoutgroup:`/student/without-group`,
  getById:(id:string)=>`/student/${id}`,
  gettopFiveStudents: `/student/top-five`,
  updateMyAcc:`/student`,
  deleteStudent:(id:string)=>`/student/${id}`,
  deleteFromGroup:(id:string, id2:string)=>`/student/${id}/${id2}`,
  AddToGroup:(id:string, id2:string)=>`/student/${id}/${id2}`,
  updateStudentGroup:(id:string, id2:string)=>`/student/${id}/${id2}`,
  
}

export const Question={
  getAll:`/question`,
  getById:(id:string)=>`/question/${id}`,
  createQuestion:`/question`,
  updateQuestion:(id:string)=>`/question/${id}`,
  deleteQuestion:(id:string)=>`/question/${id}`,
  searchQuestion:`/question/search`
}

export const Quiz={
  getAll:`/quiz`,
  getById:(id:string)=>`/quiz/${id}`,
  createQuiz:`/quiz`,
  updateQuiz:(id:string)=>`/quiz/${id}`,
  deleteQuiz:(id:string)=>`/quiz/${id}`,
  joinQuiz:`/quiz/join`,
  submit:(id:string)=>`/quiz/submit/${id}`,
  questionsWithoutAnswers:(id:string)=>`quiz/without-answers/${id}`,
  allResults:`quiz/result`,
  firstFiveIncomming:`quiz/incomming`,
  lastFiveCompleted:`quiz/completed`,
  reassign:(id:string)=>`quiz/reassign/${id}`
}