import environment from '../environment';
import { Movie, MovieListResult } from './schemas';

export const moviesAgent = {
  getDiscoverList: async (): Promise<MovieListResult | null> => {
    try {
      const response = await fetch(
        `${environment.apiUrl}discover/movie?api_key=${environment.apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      if (!response.ok) {
        return null;
      }
      return await response.json();
    } catch (err) {
      console.log(err);
      return null;
    }
  },

  search: async (query: string): Promise<MovieListResult | null> => {
    try {
      const response = await fetch(
        `${environment.apiUrl}search/movie?api_key=${environment.apiKey}&query=${query}&include_adult=false&include_video=false&page=1`
      );
      if (!response.ok) {
        return null;
      }
      return await response.json();
    } catch (err) {
      console.log(err);
      return null;
    }
  },

  getMovie: async (id: string): Promise<Movie | null> => {
    try {
      const response = await fetch(
        `${environment.apiUrl}movie/${id}?api_key=${environment.apiKey}`
      );
      if (!response.ok) {
        return null;
      }
      return await response.json();
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};
