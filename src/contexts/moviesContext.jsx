import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [mustWatchMovies, setMustWatchMovies] = useState([]);
  const [myFantasyMovies, setMyFantasyMovies] = useState([]);

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const addToMustWatchMovies = (movie) => {
    let updatedMustWatchMovies = [...mustWatchMovies];
    if (!mustWatchMovies.includes(movie.id)) {
      updatedMustWatchMovies.push(movie.id);
    }
    setMustWatchMovies(updatedMustWatchMovies);
  };

  const addToMyFantasyMovies = (movie) => {
    let updatedMyFantasyMovies = [...myFantasyMovies];
    updatedMyFantasyMovies.push(movie);
    setMyFantasyMovies(updatedMyFantasyMovies);
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        mustWatchMovies,
        myFantasyMovies,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToMustWatchMovies,
        addToMyFantasyMovies,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
