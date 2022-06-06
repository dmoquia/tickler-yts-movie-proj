import React from "react";
import { paginate } from "../utils/Utils";

export const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [sorted, setSorted] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");

  const [filters, setFilters] = React.useState({
    genre: "all",
    quality: "3D",
  });

  React.useEffect(() => {
    setLoading(true);
    async function getMovies() {
      try {
        const response = await fetch(
          `https://yts.mx/api/v2/list_movies.jsonp?limit=50&query_term=${searchTerm}`
        );
        const data = await response.json();
        const {
          data: { movies },
        } = data;

        if (movies) {
          const newMovies = movies.map((item) => {
            const { id, medium_cover_image, slug, title, year, genres } = item;

            return {
              id,
              image: medium_cover_image,
              slug,
              title,
              year,
              genres,
            };
          });

          setMovies(newMovies);
          setSorted(paginate(newMovies));
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getMovies();
  }, [searchTerm]);

  React.useEffect(() => {
    let newMovie = [...movies].sort((a, b) => a.id - b.id);
    // let newMovie = [...movies].sort();
    // let newMovie = [...new Set(tags)];
    const { genre } = filters;
    console.log(filters);
    if (genre !== "all") {
      newMovie = newMovie.filter((item) => {
        //  item.genres === genre;
        const res = item.genres.find((i) => {
          return i === genre;
        });
        return res;
      });
    }
    console.log(newMovie[0]);
    // if (rating !== "all") {
    //   return (newMovie = newMovie.filter((item) => item.rating === rating));
    // }
    // if (quality !== "all") {
    //   return (newMovie = newMovie.filter((item) => item.quality === quality));
    // }
    // if (year !== "all") {
    //   return (newMovie = newMovie.filter((item) => item.year === year));
    // }
    // if (language !== "all") {
    //   return (newMovie = newMovie.filter((item) => item.language === language));
    // }
    setPage(0);
    setSorted(paginate(newMovie));
  }, [filters, movies]);

  // methods and functions

  const changePage = (index) => {
    setPage(index);
  };

  const getSearch = (search) => {
    setSearchTerm(search);
  };

  const updateFilters = (e) => {
    const filter = e.target.name;
    const value = e.target.value;
    let filterValue;

    if (value !== "all") {
      return filterValue;
    } else {
      value === "all"
        ? (filterValue = value)
        : (filterValue = Math.floor(parseInt(value)));
    }

    setFilters({ ...filters, [filter]: filterValue });
  };
  return (
    <MovieContext.Provider
      value={{
        loading,
        movies,
        sorted,
        page,
        filters,
        changePage,
        getSearch,
        updateFilters,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
