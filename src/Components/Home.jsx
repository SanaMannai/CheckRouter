import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieForm from "./MovieForm";
import { useState } from "react";

function Home({ setCardDesc }) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleFilterChange = ({ title, rating }) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>Movie List</h1>
      <Filter handleFilterChange={handleFilterChange} />
      <MovieForm handleAddMovie={handleAddMovie} />
      <MovieList
        movies={filteredMovies.length > 0 ? filteredMovies : movies}
        setCardDesc={setCardDesc}
      />
    </div>
  );
}

export default Home;