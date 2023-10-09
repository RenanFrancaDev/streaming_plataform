import "./index.scss"

import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService"
import MovieCard from "../../components/MovieCard";


const Home = ({ searchValueProp }) => {

const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {data:{results}} = await MovieService.getMovies();
    
    setMovies(results)
  };

  async function getMoviesSearch(movieString) {
    const {
      data: { results },
    } = await MovieService.searchMovies(movieString);

    setMovies(results);
  }

  useEffect(() => {
    getMovies()

}, []);

useEffect(() => {
  if (searchValueProp) {
    getMoviesSearch(searchValueProp);
  }
  if (searchValueProp === "") {
    getMovies();
  }
}, [searchValueProp]);

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