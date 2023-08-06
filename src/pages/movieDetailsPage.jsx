import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import Spinner from "../components/spinner";
import { getMovie, getMovieCredits } from "../api/tmdb-api";

const MovieDetailsPage = (props) => {
  const { id } = useParams();

  const movieResult = useQuery(["movie", { id: id }], getMovie);
  const creditsResult = useQuery(["movieCredits", { id: id }], getMovieCredits);

  if (movieResult.isLoading | creditsResult.isLoading) {
    return <Spinner />;
  }

  if (movieResult.isError) return <h1>{movieResult.error.message}</h1>;
  if (creditsResult.isError) return <h1>{creditsResult.error.message}</h1>;

  return (
    <>
      {movieResult.data ? (
        <>
          <PageTemplate movie={movieResult.data}>
            <MovieDetails
              movie={movieResult.data}
              credits={creditsResult.data}
            />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
