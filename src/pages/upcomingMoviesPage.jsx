import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToMustWatchListIcon from "../components/cardIcons/addToMustWatchList";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery(
    ["upcoming", page],
    () => getUpcomingMovies(page),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  const changePage = (delta) => {
    const newPage = page + delta;
    if (newPage > 0 && newPage <= data.total_pages) {
      setPage(newPage);
    }
  };

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchListIcon movie={movie} />;
      }}
      changePage={changePage}
    />
  );
};
export default UpcomingMoviesPage;
