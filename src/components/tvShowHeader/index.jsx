import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const TvShowHeader = (props) => {
  const tvShow = props.tvShow;

  return (
    <Paper component="div" sx={styles.root}>
      <Typography variant="h4" component="h3">
        {tvShow.name}
        {"   "}
        <a href={tvShow.homepage}>
          <HomeIcon color="primary" fontSize="='large" />
        </a>
        <br />
        <span>{`${tvShow.tagline}`} </span>
      </Typography>
    </Paper>
  );
};

export default TvShowHeader;
