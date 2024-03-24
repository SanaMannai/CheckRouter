import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, setCardDesc }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} setCardDesc={setCardDesc} />
      ))}
    </div>
  );
};

export default MovieList;