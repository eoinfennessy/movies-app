import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getGenres } from "../../api/tmdb-api";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

export default function FilterMoviesCard(props) {
  const [minDateDisplay, setMinDateDisplay] = useState(null);
  const [maxDateDisplay, setMaxDateDisplay] = useState(null);

  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const handleUserInput = (e, type, value) => {
    e?.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = (e, props) => {
    handleUserInput(e, "title", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleUserInput(e, "genre", Number(e.target.value));
  };

  const handleVoteAverageChange = (e) => {
    handleUserInput(e, "voteAverage", Number(e.target.value));
  };

  const handleMinReleaseDateChange = (date) => {
    setMinDateDisplay(date);
    handleUserInput(null, "minReleaseDate", date);
  };

  const handleMaxReleaseDateChange = (date) => {
    setMaxDateDisplay(date);
    handleUserInput(null, "maxReleaseDate", date);
  };

  return (
    <>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <FilterAltIcon fontSize="large" />
            Filter the movies.
          </Typography>
          <TextField
            sx={styles.formControl}
            id="filled-search"
            label="Search field"
            type="search"
            value={props.titleFilter}
            variant="filled"
            onChange={handleTextChange}
          />
          <FormControl sx={styles.formControl}>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre-select"
              value={props.genreFilter}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <TextField
            sx={styles.formControl}
            label="Minimum Average Vote Score"
            id="vote-average-select"
            type="number"
            variant="filled"
            value={props.voteAverageFilter}
            onChange={handleVoteAverageChange}
          />
          <InputLabel id="min-release-date-picker-label">
            Released After Date
          </InputLabel>
          <DatePicker
            labelId="min-release-date-picker-label"
            placeholderText="Select minimum release date"
            onChange={handleMinReleaseDateChange}
            selected={minDateDisplay}
          />
          <InputLabel id="max-release-date-picker-label">
            Released Before Date
          </InputLabel>
          <DatePicker
            labelId="max-release-date-picker-label"
            placeholderText="Select max release date"
            onChange={handleMaxReleaseDateChange}
            selected={maxDateDisplay}
          />
        </CardContent>
      </Card>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the movies.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
