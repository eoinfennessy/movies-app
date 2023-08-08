import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate, useLocation } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const LoginPage = (props) => {
  const context = useContext(AuthContext);
  const location = useLocation().state || "/";

  const login = () => {
    context.authenticate("myUsername", "myPassword");
  };

  if (context.isAuthenticated) {
    return <Navigate to={location} />;
  }

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h3">Login Page</Typography>
        <Typography variant="body1">
          Log in to access protected routes
        </Typography>
        <Button variant="contained" onClick={login}>
          Log in
        </Button>
      </Container>
    </>
  );
};
export default LoginPage;
