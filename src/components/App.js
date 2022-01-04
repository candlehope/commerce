import React from "react";
import GoogleAuth from "./GoogleAuth";
import Router from "./Router";
import { Container } from "react-bootstrap";
import Search from "./Search";

const App = () => {
  return (
    <Container>
      <GoogleAuth />
      <Search />
      <Router />
      
    </Container>
  );
};

export default App;
