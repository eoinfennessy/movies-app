import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import People from "@mui/icons-material/People";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";

const styles = {
  card: { maxWidth: 500 },
  media: { height: 345 },
};

export default function TvShowCard({ tvShow }) {
  console.log(tvShow);

  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        image={
          tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
            : img
        }
      />
      <CardContent>
        <Typography variant="h5" component="p">
          {tvShow.name}{" "}
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" component="p">
              {"Vote count: "}
              <People fontSize="small" />
              {"  "} {tvShow.vote_count}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="p">
              {"Vote average: "}
              <StarRateIcon fontSize="small" />
              {"  "} {tvShow.vote_average}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/tv-shows/${tvShow.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            TV Show Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
