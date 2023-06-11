import React, { useState, useEffect } from "react";
import AddToMustWatchListIcon from "../components/cardIcons/addToMustWatchList";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={() => {
        return <AddToMustWatchListIcon />;
      }}
    />
  );
};
export default UpcomingMoviesPage;
