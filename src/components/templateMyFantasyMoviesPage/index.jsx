import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { MoviesContext } from "../../contexts/moviesContext";

const TemplateMyFantasyMoviesPage = ({ children }) => {
  const context = useContext(MoviesContext);
  console.log(context.myFantasyMovies);

  return (
    <>
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMyFantasyMoviesPage;
