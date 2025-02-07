import React, { useState } from "react";
import "../App.css";

const MovieForm = ({ handleAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === "" || description === "" || rating === "") {
      alert("You Must Write All Data");
    } else {
      handleAddMovie({ title, description, posterURL, rating });
      setTitle("");
      setDescription("");
      setPosterURL("");
      setRating("");
    }
  };

  return (
    <form className="movie-form " onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;