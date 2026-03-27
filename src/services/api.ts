import axios from "axios";
import type { IMovie } from "../@types/movie";


const api = axios.create({
    baseURL: import.meta.env.VITE_TMDB_BASE_URL,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
  },
  params: {
    language: 'pt-BR' 
  }
})

export default api;

export const MovieAPI = {
    async getAll(){
        const response = await api.get('/movie/popular');
        return response.data.results as IMovie[];
    }
}