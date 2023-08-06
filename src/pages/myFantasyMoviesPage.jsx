import React from "react";
import MyFantasyMovieForm from "../components/myFantasyMovieForm";
import MyFantasyMoviesList from "../components/myFantasyMoviesList";
import { Box, Container } from "@mui/material";

const MyFantasyMoviesPage = () => {
  return (
    <Container maxWidth="md">
      <MyFantasyMoviesList />
      <Box mt={5}>
        <MyFantasyMovieForm />
      </Box>
    </Container>
  );
};

export default MyFantasyMoviesPage;
