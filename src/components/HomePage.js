import React from "react";
import { Container, Row } from "react-bootstrap";
import Banner from "./Banner";

class HomePage extends React.Component {
  render() {
    return (
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          flexShrink: "1",
          justifyContent: "center",
        }}
      >
        <Row style={{ maxWidth: "700px" }}>
          <Banner />
        </Row>
      </Container>
    );
  }
}

export default HomePage;
