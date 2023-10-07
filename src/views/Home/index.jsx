import "./index.scss"

import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService"
import MovieCard from "../../components/MovieCard";


const Home = () => {

const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {data:{results}} = await MovieService.getMovies();
    
    setMovies(results)
  };

  useEffect(() => {
    getMovies()

}, []);


return (
    <div className="Home">
        {movies.map((movie) => (
          <div key={movie.id} className="card">
            <MovieCard movie={movie}/>
          </div>
        ))}

    </div>
  );
};

export default Home