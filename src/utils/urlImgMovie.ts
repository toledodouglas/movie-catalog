export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getMovieImageUrl = (path: string | null) => {
  if (!path) return "https://via.placeholder.com/500x750?text=Sem+Poster";
  return `${IMG_BASE_URL}${path}`;
};