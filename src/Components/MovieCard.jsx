import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const MovieCard = ({ movie, setCardDesc }) => {
  return (
    <div className="movie-card" style={{}}>
      <img
        src={"https://amazing.tn/wp-content/uploads/2021/03/netflix-cover.jpg"}
        alt={movie.title}
      />
      <h3>
        Title: <span>{movie.title}</span>
      </h3>
      <p>
        Description: <span>{movie.description}</span>
      </p>
      <p>
        Rating: <span>{movie.rating}</span>
      </p>
      <Link to="desc" onClick={() => setCardDesc(movie)}>
        Details
      </Link>
    </div>
  );
};

export default MovieCard;