import React, { useState } from "react";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Spinner from "../components/spinner";
import { getMovies } from "../api/tmdb-api";

const HomePage = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery(
    ["discover", page],
    () => getMovies(page),
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
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />;
      }}
      changePage={changePage}
    />
  );
};
export default HomePage;
