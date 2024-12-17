import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SampleForm from "../SampleForm/SampleForm";
import MovieList from "../dynamicRouting/movielist";
import MovieDetails from "../dynamicRouting/movieDetails";

export default function Routee() {
  return (
    <div>
      <Router>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/home">Home</Link>
          <Link to="/movies">Movies</Link>
        </div>
        
        <Routes>
          <Route path="/home" element={<SampleForm />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
