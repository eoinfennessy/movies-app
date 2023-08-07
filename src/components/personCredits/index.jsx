import { ExpandMore, Movie, Person, TvRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function getYear(dateString) {
  const ts = Date.parse(dateString);
  const d = new Date(ts);
  return d.getFullYear();
}

export default function PersonCredits({ person }) {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Movie />
          <Typography variant="h5">Movie Credits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Person />
              <Typography variant="h5">As Cast Member</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {person.movie_credits.cast.map((credit) => (
                <Typography key={credit.credit_id}>
                  <Link to={`/movies/${credit.id}`}>{credit.title}</Link>
                  {credit.release_date && ` (${getYear(credit.release_date)})`}
                  {" - "}
                  {credit.character}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Person />
              <Typography variant="h5">As Crew Member</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {person.movie_credits.crew.map((credit) => (
                <Typography key={credit.credit_id}>
                  <Link to={`/movies/${credit.id}`}>{credit.title}</Link>
                  {credit.release_date && ` (${getYear(credit.release_date)})`}
                  {" - "}
                  {credit.job}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <TvRounded />
          <Typography variant="h5">TV Credits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Person />
              <Typography variant="h5">As Cast Member</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {person.tv_credits.cast.map((credit) => (
                <Typography key={credit.credit_id}>
                  <Link to={`/tv-shows/${credit.id}`}>{credit.name}</Link>
                  {" - "}
                  {credit.character}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Person />
              <Typography variant="h5">As Crew Member</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {person.tv_credits.crew.map((credit) => (
                <Typography key={credit.credit_id}>
                  <Link to={`/tv-shows/${credit.id}`}>{credit.name}</Link>
                  {" - "}
                  {credit.job}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
