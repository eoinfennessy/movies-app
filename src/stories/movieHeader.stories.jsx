import React from "react";
import MovieHeader from "../components/movieHeader";
import SampleMovie from "./sampleData";

export default {
  title: "Movie Details Page/MovieHeader",
  component: MovieHeader,
};

export const Basic = () => <MovieHeader movie={SampleMovie} />;
Basic.storyName = "Default";
