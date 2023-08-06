import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";

const MyFantasyMoviesList = () => {
  const { myFantasyMovies } = useContext(MoviesContext);

  return (
    <>
      <Typography variant="h3">My Fantasy Movies</Typography>
      <Box mt={2}>
        <Grid container spacing={2}>
          {myFantasyMovies.map((m, i) => (
            <Grid item xs={4}>
              <Card key={i}>
                <CardContent>
                  <Typography variant="h5">{m.title}</Typography>
                  {m.genres.map((g) => (
                    <Chip label={g} color="primary" />
                  ))}
                  <Typography variant="body2">{m.overview}</Typography>
                  <Typography variant="body1">
                    Release Date: {m.releaseDate.toLocaleDateString()}
                  </Typography>
                  <Typography variant="body1">
                    Runtime: {m.runtime} minutes
                  </Typography>
                  {m.productionCompanies.map((c) => (
                    <Chip label={c} color="secondary" />
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MyFantasyMoviesList;
