import React from "react";
export default function Movie({ title, poster, year, rating }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={poster} alt={title} width="200" />
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}
