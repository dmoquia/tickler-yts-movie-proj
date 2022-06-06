import React from "react";
import MovieList from "./MovieList";
import { MovieContext } from "../context/movies";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

function PageMovie() {
  const {
    sorted,
    page,
    changePage,
    movies: movieLength,
  } = React.useContext(MovieContext);

  if (sorted[page]) {
    return (
      <>
        {sorted.length > 1 && [
          <article className="pagination-buttons" key="0">
            {/* prev */}
            {page > 0 && (
              <button
                className="prev-page-btn"
                onClick={() => changePage(page - 1)}
              >
                <ArrowCircleLeftIcon />
              </button>
            )}

            {sorted.map((_, index) => {
              return (
                <button
                  onClick={() => changePage(index)}
                  key={index}
                  className={`page-btn ${page === index && `page-btn-current`}`}
                >
                  {index + 1}
                </button>
              );
            })}
            {page < sorted.length - 1 && (
              <button
                className="next-page-btn"
                onClick={() => changePage(page + 1)}
              >
                <ArrowCircleRightIcon />
              </button>
            )}

            {/* next */}
          </article>,
          <MovieList movies={sorted[page]} movieLength={movieLength} key="1" />,
          <article className="pagination-buttons" key="2">
            {/* prev */}
            {page > 0 && (
              <button
                className="prev-page-btn"
                onClick={() => changePage(page - 1)}
              >
                <ArrowCircleLeftIcon />
              </button>
            )}

            {sorted.map((_, index) => {
              return (
                <button
                  onClick={() => changePage(index)}
                  key={index}
                  className={`page-btn ${page === index && `page-btn-current`}`}
                >
                  {index + 1}
                </button>
              );
            })}
            {page < sorted.length - 1 && (
              <button
                className="next-page-btn"
                onClick={() => changePage(page + 1)}
              >
                <ArrowCircleRightIcon />
              </button>
            )}

            {/* next */}
          </article>,
        ]}
      </>
    );
  } else {
    return (
      <h3 className="search-errors">
        unfortunately your search query did not return any result
      </h3>
    );
  }
}

export default PageMovie;
