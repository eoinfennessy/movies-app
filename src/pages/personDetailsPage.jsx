import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPerson } from "../api/tmdb-api";
import { Container, Paper, Grid, Box, Typography } from "@mui/material";
import PersonProfileImage from "../components/personProfileImage";
import PersonalInfo from "../components/personalInfo";
import PersonCredits from "../components/personCredits";

const PersonDetailsPage = () => {
  const { id } = useParams();

  const {
    data: person,
    error,
    isLoading,
    isError,
  } = useQuery(["person", { id: id }], getPerson);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  console.log(person);

  return (
    <>
      {person ? (
        <>
          <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Paper elevation={3}>
                  <Box padding={"20px"}>
                    <PersonProfileImage person={person} />
                    <PersonalInfo person={person} />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={9}>
                <Paper elevation={3}>
                  <Box padding={"20px"}>
                    <Typography variant="h3" paddingBottom="20px">
                      {person.name}
                    </Typography>
                    <Typography variant="h5">Biography</Typography>
                    <Typography variant="body1">{person.biography}</Typography>
                  </Box>
                  <PersonCredits person={person} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <p>Waiting for person details</p>
      )}
    </>
  );
};

export default PersonDetailsPage;
