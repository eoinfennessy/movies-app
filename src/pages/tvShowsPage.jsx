import React from "react";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateTvShowListPage";
import Spinner from "../components/spinner";
import { getTvShows } from "../api/tmdb-api";

const TvShowsPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "discoverTvShows",
    getTvShows
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data ? data.results : [];

  return <PageTemplate title="Discover TV Shows" tvShows={tvShows} />;
};
export default TvShowsPage;
