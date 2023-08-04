import React from "react";
import Grid from "@mui/material/Grid";
import TvShow from "../tvShowCard";

const TvShowList = ({ tvShows }) => {
  let tvShowCards = tvShows.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvShow key={s.id} tvShow={s} />
    </Grid>
  ));
  return tvShowCards;
};

export default TvShowList;
