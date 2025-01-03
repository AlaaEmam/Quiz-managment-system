import axios from 'axios';

export const baseURL = 'https://upskilling-egypt.com:3005/api';

export const axiosInstance = axios.create({ baseURL });

export const Auth = {
  login: `/auth/login`,
  register: `/auth/register`,
  changePassword: `/auth/change-password`,
  forgotPassword: `auth/forgot-password`,
  resetPassword: `auth/reset-password`,
  logout: `auth/logout`,
};

export const Group = {
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
};