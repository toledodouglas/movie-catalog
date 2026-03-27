
export interface IMovie {
    id: number;
    title: string;
    overview: string
    poster_path: string;
    vote_average: number;
    release_date: string;
}

export interface IMovieItemProps{
    id: number;
    title: string;
    overview: string;
    poster_path: string;
}