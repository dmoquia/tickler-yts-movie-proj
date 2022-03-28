import React, { useRef, useEffect } from "react";
import { MovieContext } from "../context/movies";
export default function SearchMovie() {
  const { getSearch } = React.useContext(MovieContext);
  const searchValue = useRef("");
  useEffect(() => {
    // console.log(searchValue.current.value);
  });
  const handleSubmit = (e) => {
    e.prevenDefault();
  };
  const searchMovie = () => {
    getSearch(searchValue.current.value);
  };
  return (
    <section className="section">
      {/* <h2 className="section-title">search movies</h2> */}
      <form onSubmit={handleSubmit} className="form search-form">
        <div className="form-control">
          <div>
            <label htmlFor="title">search your favorite movie</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={searchMovie}
              ref={searchValue}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
