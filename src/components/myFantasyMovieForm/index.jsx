import React, { useContext } from "react";
import { useQuery } from "react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Spinner from "../spinner";
import { useForm, Controller } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { getGenres } from "../../api/tmdb-api";
import productionCompanies from "./productionCompanies";

const MyFantasyMovieForm = () => {
  const defaultValues = {
    title: "",
    overview: "",
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(defaultValues);
  const context = useContext(MoviesContext);

  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;

  const onSubmit = (movie) => {
    context.addToMyFantasyMovies(movie);
  };

  return (
    <Box component="div">
      <Typography component="h2" variant="h3">
        Create a Fantasy Movie
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="title"
              label="Movie's title"
              autoFocus
            />
          )}
        />
        {errors.title && (
          <Typography variant="h6" component="p">
            {errors.title.message}
          </Typography>
        )}

        <Controller
          name="overview"
          control={control}
          rules={{
            required: "Overview cannot be empty.",
            minLength: { value: 10, message: "Overview is too short" },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={value}
              onChange={onChange}
              label="Overview text"
              id="overview"
              multiline
              minRows={10}
            />
          )}
        />
        {errors.overview && (
          <Typography variant="h6" component="p">
            {errors.overview.message}
          </Typography>
        )}

        <InputLabel id="genre-label">Genre(s)</InputLabel>
        <Controller
          name="genres"
          control={control}
          rules={{ required: "Genre is required" }}
          defaultValue={[]}
          render={({ field: { onChange, value } }) => (
            <Select
              labelId="genre-label"
              id="genre-select"
              value={value}
              multiple
              onChange={onChange}
            >
              {genres.map((genre) => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                );
              })}
            </Select>
          )}
        />
        {errors.genres && (
          <Typography variant="h6" component="p">
            {errors.genres.message}
          </Typography>
        )}

        <div>
          <InputLabel id="date-picker-label">Release Date</InputLabel>
          <Controller
            control={control}
            name="releaseDate"
            rules={{ required: "Release date is required" }}
            render={({ field }) => (
              <DatePicker
                labelId="date-picker-label"
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          {errors.releaseDate && (
            <Typography variant="h6" component="p">
              {errors.releaseDate.message}
            </Typography>
          )}
        </div>

        <Controller
          name="runtime"
          control={control}
          rules={{ required: "Runtime is required" }}
          defaultValue={0}
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              type="number"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="runtime"
              label="Movie runtime"
            />
          )}
        />
        {errors.runtime && (
          <Typography variant="h6" component="p">
            {errors.runtime.message}
          </Typography>
        )}

        <InputLabel id="production-company-label">
          Production Company(s)
        </InputLabel>
        <Controller
          name="productionCompanies"
          control={control}
          rules={{ required: "Production company is required" }}
          defaultValue={[]}
          render={({ field: { onChange, value } }) => (
            <Select
              labelId="production-company-label"
              id="production-company-select"
              value={value}
              multiple
              onChange={onChange}
            >
              {productionCompanies.map((c) => {
                return (
                  <MenuItem key={c.id} value={c.id}>
                    {c.name}
                  </MenuItem>
                );
              })}
            </Select>
          )}
        />
        {errors.productionCompanies && (
          <Typography variant="h6" component="p">
            {errors.productionCompanies.message}
          </Typography>
        )}

        <Box>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            onClick={() => {
              reset({
                title: "",
                overview: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default MyFantasyMovieForm;
