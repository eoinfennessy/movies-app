import React, { useState } from "react";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateTvShowListPage";
import Spinner from "../components/spinner";
import { getTvShows } from "../api/tmdb-api";

const TvShowsPage = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery(
    ["discoverTvShows", page],
    () => getTvShows(page),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data ? data.results : [];

  const changePage = (delta) => {
    const newPage = page + delta;
    if (newPage > 0 && newPage <= data.total_pages) {
      setPage(newPage);
    }
  };

  return (
    <PageTemplate
      title="Discover TV Shows"
      tvShows={tvShows}
      changePage={changePage}
    />
  );
};
export default TvShowsPage;
