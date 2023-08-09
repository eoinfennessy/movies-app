import React from "react";
import PersonalInfo from "../components/personalInfo";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Person Details Page/PersonalInfo",
  component: PersonalInfo,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return <PersonalInfo person={SamplePerson} />;
};
Basic.storyName = "Default";

export const IncludeDeathDay = () => {
  const personWithNoTvCredits = {
    ...SamplePerson,
    deathday: "2020-10-10",
  };
  return <PersonalInfo person={personWithNoTvCredits} />;
};
IncludeDeathDay.storyName = "Include Death Day";
