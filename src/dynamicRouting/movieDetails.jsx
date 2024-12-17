import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const movies = [
    { id: "1", movie: "Salaar" },
    { id: "2", movie: "Pushpa" },
    { id: "3", movie: "Devara" },
    { id: "4", movie: "OG" },
  ];

  const { id } = useParams();

  // Find the movie by ID
  const movie = movies.find((m) => m.id === id);

  // If no movie is found, display an error message
  if (!movie) {
    return <h1>Movie Not Found</h1>;
  }

  return (
    <div>
      
      <p>{movie.id}</p>
      <h1>{movie.movie}</h1> 
    </div>
  );
}
