import React, { useContext } from "react";
import { MoviesContext } from "../contexts/moviesContext";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToMustWatchListIcon from "../components/cardIcons/addToMustWatchList";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
  // TODO: delete these two lines
  const context = useContext(MoviesContext);
  console.log("Must watch movies:", context.mustWatchMovies);

  const { data, error, isLoading, isError } = useQuery(
    "upcoming",
    getUpcomingMovies
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchListIcon movie={movie} />;
      }}
    />
  );
};
export default UpcomingMoviesPage;
