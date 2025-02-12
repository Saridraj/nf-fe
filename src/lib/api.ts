'use server';
import axios, { AxiosInstance } from 'axios';
import { cookies } from 'next/headers';

// Create an Axios instance
const api: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});




export default api;
