import { Typography } from "@mui/material";

function getGender(genderId) {
  switch (genderId) {
    case 0:
      return "Not set / not specified";
    case 1:
      return "Female";
    case 2:
      return "Male";
    case 3:
      return "Non-binary";
    default:
      return "Unknown";
  }
}

export default function PersonalInfo({ person }) {
  return (
    <>
      <Typography variant="h5" paddingTop={"20px"}>
        Personal Info
      </Typography>
      <Typography variant="body1" paddingTop="20px">
        <strong>Known For</strong>
      </Typography>
      <Typography variant="body1">{person.known_for_department}</Typography>
      <Typography variant="body1" paddingTop="20px">
        <strong>Known Credits</strong>
      </Typography>
      <Typography variant="body1">
        {person.movie_credits.cast.length +
          person.movie_credits.crew.length +
          person.tv_credits.cast.length +
          person.tv_credits.crew.length}
      </Typography>
      <Typography variant="body1" paddingTop="20px">
        <strong>Gender</strong>
      </Typography>
      <Typography variant="body1">{getGender(person.gender)}</Typography>
      <Typography variant="body1" paddingTop="20px">
        <strong>Birth Date</strong>
      </Typography>
      <Typography variant="body1">{person.birthday}</Typography>
      <Typography variant="body1" paddingTop="20px">
        <strong>Place of Birth</strong>
      </Typography>
      <Typography variant="body1">{person.place_of_birth}</Typography>
      {person.deathday && (
        <>
          <Typography variant="body1" paddingTop="20px">
            <strong>Death Date</strong>
          </Typography>
          <Typography variant="body1">{person.deathday}</Typography>
        </>
      )}
    </>
  );
}
