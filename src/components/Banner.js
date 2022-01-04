import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ width: "100%" }}
          src="/image/1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ textAlign: "left" }}>New Arrivals!</h3>
          <p style={{ textAlign: "left" }}>
            Come see what's recently been added to the store
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      {}
    </Carousel>
  );
};
export default Banner;
