import React from "react";
import { Link } from "react-router-dom";

export default function MovieList() {
  const movies = [
    { id: "1", movie: "Salaar" },
    { id: "2", movie: "Pushpa" },
    { id: "3", movie: "Devara" },
    { id: "4", movie: "OG" },
  ];

  return (
    <div>
      <h1>Movies List</h1>
      {movies.map((a) => (
        <ul key={a.id}>
          <li>
            <Link to={`/movies/${a.id}`}>{a.movie}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
