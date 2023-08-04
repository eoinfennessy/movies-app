import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateTvShowPage";
import Spinner from "../components/spinner";
import { getTvShow } from "../api/tmdb-api";
import TvShowDetails from "../components/tvShowDetails";

const TvShowDetailsPage = (props) => {
  const { id } = useParams();

  const {
    data: tvShow,
    error,
    isLoading,
    isError,
  } = useQuery(["tvShow", { id: id }], getTvShow);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tvShow ? (
        <>
          <PageTemplate tvShow={tvShow}>
            <TvShowDetails tvShow={tvShow} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default TvShowDetailsPage;
