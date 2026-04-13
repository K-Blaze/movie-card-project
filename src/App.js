import React from "react";
import Movie from "./Movie";

export default function App() {
  const movies = [
    {
      title: "Black Panther",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
      year: 2018,
      rating: "7.3/10",
    },
    {
      title: "The Lion King",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
      year: 1994,
      rating: "8.5/10",
    },
  ];

  return (
    <div>
      <h1>My Movie App</h1>

      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          poster={movie.poster}
          year={movie.year}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}
