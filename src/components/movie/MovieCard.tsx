import type { IMovieItemProps} from "../../@types/movie"
import { getMovieImageUrl } from "../../utils/urlImgMovie"

export const MovieCard = ({id, title, overview, poster_path}: IMovieItemProps) => {
    return(
        <>
        <div className="card-container">
            <div className="card-content">
                <h1 className="content-title">{title}</h1>
                <img 
                    className="content-img"
                    src={getMovieImageUrl(poster_path)} 
                    alt={`Poster do filme ${title}`}
                    />
                <p className="content-overview">{overview}</p>
            </div>
        </div>
        </>
    )
}