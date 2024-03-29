import React, { useState } from "react";
import Header from "../movieListHeader";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieList from "../movieList";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function MovieListPageTemplate({ movies, title, action, changePage }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState(0);
  const [voteAverageFilter, setVoteAverageFilter] = useState(0.0);
  const [minReleaseDateFilter, setMinReleaseDateFilter] = useState(null);
  const [maxReleaseDateFilter, setMaxReleaseDateFilter] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreFilter > 0 ? m.genre_ids.includes(genreFilter) : true;
    })
    .filter((m) => {
      return m.vote_average > voteAverageFilter;
    })
    .filter((m) => {
      const releaseDate = new Date(m.release_date);
      return minReleaseDateFilter ? releaseDate >= minReleaseDateFilter : true;
    })
    .filter((m) => {
      const releaseDate = new Date(m.release_date);
      return maxReleaseDateFilter ? releaseDate < maxReleaseDateFilter : true;
    });

  const handleChange = (type, value) => {
    switch (type) {
      case "title":
        setTitleFilter(value);
        break;
      case "genre":
        setGenreFilter(value);
        break;
      case "voteAverage":
        setVoteAverageFilter(value);
        break;
      case "minReleaseDate":
        setMinReleaseDateFilter(value);
        break;
      case "maxReleaseDate":
        setMaxReleaseDateFilter(value);
        break;
      default:
        console.error(`Filter type "${type}" has not been implemented.`);
        break;
    }
  };

  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} changePage={changePage} />
        </Grid>
        <Grid item container spacing={5}>
          <MovieList action={action} movies={displayedMovies} />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          voteAverageFilter={voteAverageFilter}
          setMinReleaseDateFilter={setMinReleaseDateFilter}
          setMaxReleaseDateFilter={setMaxReleaseDateFilter}
        />
      </Drawer>
    </>
  );
}
export default MovieListPageTemplate;
