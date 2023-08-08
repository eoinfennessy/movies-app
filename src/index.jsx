import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TvShowDetailsPage from "./pages/tvShowDetailsPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import SiteHeader from "./components/siteHeader";
import TvShowsPage from "./pages/tvShowsPage";
import MyFantasyMoviesPage from "./pages/myFantasyMoviesPage";
import PersonDetailsPage from "./pages/personDetailsPage";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import PrivateRoute from "./components/privateRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <AuthContextProvider>
            <Routes>
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route
                path="/movies/favourites"
                element={
                  <PrivateRoute>
                    <FavouriteMoviesPage />
                  </PrivateRoute>
                }
              />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/tv-shows" element={<TvShowsPage />} />
              <Route path="/tv-shows/:id" element={<TvShowDetailsPage />} />
              <Route path="/person/:id" element={<PersonDetailsPage />} />
              <Route
                path="/my-fantasy-movies"
                element={<MyFantasyMoviesPage />}
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AuthContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
