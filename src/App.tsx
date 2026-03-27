import { useEffect, useState } from "react"
import type { IMovie } from "./@types/movie"
import { MovieAPI } from "./services/api"
import { MovieCard } from './components/movie/movieCard'


function App() {
  const [list, setList] = useState<IMovie[]>([])

  useEffect(() => {
    MovieAPI.getAll()
      .then(data => {setList(data)  
    })
  }, []);

  return (
    <>
      <div>
        <h1>Hello World!</h1>
        <div>
          {list.map(movie => <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            overview={movie.overview} 
            poster_path={movie.poster_path} 
          />)
          }
        </div>
      </div>
    </>
  )
}

export default App
