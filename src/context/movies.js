import React from "react";
import { paginate } from "../utils/Utils";
export const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);

  const [sorted, setSorted] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");

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
            const {
              id,
              medium_cover_image,
              slug,
              title,
              year,
              genres,
              language,
              rating,
              torrents,
            } = item;

            return {
              id,
              image: medium_cover_image,
              slug,
              title,
              year,
              genres,
              language,
              rating,
              torrents,
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

  // methods and functions

  const changePage = (index) => {
    setPage(index);
  };

  const getSearch = (search) => {
    setSearchTerm(search);
  };

  return (
    <MovieContext.Provider
      value={{
        loading,
        movies,
        sorted,
        page,
        changePage,
        getSearch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
