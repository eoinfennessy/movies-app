import React from "react";
import Header from "../movieListHeader";
import Grid from "@mui/material/Grid";
import TvShowList from "../tvShowList";

const styles = {
  root: {
    padding: "20px",
  },
};

function TvShowListPageTemplate({ tvShows, title, changePage }) {
  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} changePage={changePage} />
        </Grid>
        <Grid item container spacing={5}>
          <TvShowList tvShows={tvShows} />
        </Grid>
      </Grid>
    </>
  );
}
export default TvShowListPageTemplate;
