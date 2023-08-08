import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const Logout = () => {
  const context = useContext(AuthContext);

  const logout = () => {
    context.signout();
  };

  if (!context.isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h3">Logout Page</Typography>
      <Button variant="contained" onClick={logout}>
        Log out
      </Button>
    </Container>
  );
};
export default Logout;
