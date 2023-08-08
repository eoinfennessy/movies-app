import React, { useState, createContext } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const [user, setUser] = useState({ username: null, password: null });
  const isAuthenticated = user.username !== null;

  const authenticate = (username, password) => {
    setUser({ username, password });
  };

  const signout = () => {
    setUser({ username: null, password: null });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate, signout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
