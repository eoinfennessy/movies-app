import React from "react";
import { Box } from "@mui/material";

export default function PersonProfileImage({ person, borderRadius }) {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
      alt={person.profile_path}
      style={{
        maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: borderRadius ? borderRadius : "8px",
      }}
    />
  );
}
