import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies, loading, movieLength }) {
  if (loading) {
    return <h2 className="section-title">loading...</h2>;
  }
  if (movies.length < 1) {
    return <h2 className="section-title">no movies found</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">
        {/* {movieLength.length >= 50 ? "Movies" : movieLength.length + " Result"} */}
        Movies
      </h2>
      ;
      <div className="movies-center">
        {movies.map((item) => {
          return <Movie key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
