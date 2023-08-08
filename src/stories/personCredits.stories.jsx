import React from "react";
import PersonCredits from "../components/personCredits";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Person Details Page/PersonCredits",
  component: PersonCredits,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return <PersonCredits person={SamplePerson} />;
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const personWithNoTvCredits = {
    ...SamplePerson,
    tv_credits: { cast: [], crew: [] },
  };
  return <PersonCredits person={personWithNoTvCredits} />;
};
Exceptional.storyName = "Exceptional";
