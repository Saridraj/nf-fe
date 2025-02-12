'use server';
import axios, { AxiosInstance } from 'axios';
import { cookies } from 'next/headers';

// Create an Axios instance
const api: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

// Axios interceptor to add Authorization header dynamically
// api.interceptors.request.use(async (config) => {
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });


export default api;
