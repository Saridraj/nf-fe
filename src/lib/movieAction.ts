'use server';
import api from '@/lib/api';

export async function fetchPopularMovies() {
  try {
    const response = await api.get('/movies/popular');
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
  }
}

export async function fetchTopRateMovies() {
    try {
      const response = await api.get('/movies/topRate');
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  }

  export async function fetchUpcomingMovies() {
    try {
      const response = await api.get('/movies/upcoming');
      return response.data;
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  }