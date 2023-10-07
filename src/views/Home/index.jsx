import "./index.scss"

import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService"


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
    <div className="container">
      <div className="row gy-5">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12">
            {movie.title}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home