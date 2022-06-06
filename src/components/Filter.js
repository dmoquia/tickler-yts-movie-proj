import React from "react";
import { MovieContext } from "../context/movies";
const Filters = () => {
  const {
    // filters: { quality, genre, rating, year },
    filters: { genre },
    updateFilters,

    movies,
  } = React.useContext(MovieContext);

  // map the object specific array e.g genres
  const filted = movies.map((item) => item.genres);

  // it's time to combine these array
  let flatArray = filted.reduce((acc, curVal) => {
    return acc.concat(curVal);
  }, []);

  // this code will remove duplicate
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  // lets filter unique values
  var unique = flatArray.filter(onlyUnique);

  return (
    <section className="filters-section">
      <h2 className="section-title">search movie</h2>
      <form className="filters-form">
        <div>
          {/* select category */}
          <div className="form-group">
            {/* <label htmlFor="rating" id="rating">
              genre:
            </label>
            <select
              name="rating"
              id="rating"
              value={rating}
              // value={sorted.find((val) => val === genre)}
              onChange={updateFilters}
            >
              <option value="all">all</option>
              <option value="5">5+</option>
              <option value="Comedy">Comedy</option>
            </select> */}

            <label htmlFor="genre" id="genre">
              genre:
            </label>
            <select
              name="genre"
              id="genre"
              value={genre}
              onChange={updateFilters}
            >
              <option value="all">All</option>

              {unique.map((item, i) => (
                <option value={item} key={i}>
                  {item}
                </option>
              ))}
            </select>
            {/* <select
              name="movie"
              id="movie"
              onChange={updateFilters}
              value={sorted}
              className="filter-item"
            >
              {filteredMovie.map((movie, index) => {
                return (
                  <option key={index} value={movie}>
                    {movie}
                  </option>
                );
              })}
            </select> */}
          </div>
          {/*end of select category */}
        </div>
      </form>

      <hr />
    </section>
  );
};

export default Filters;
