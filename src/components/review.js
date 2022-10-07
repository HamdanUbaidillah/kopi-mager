import React from "react";
import "../App.css";
import Carousel from "react-elastic-carousel";
import Item from "./item-carousel";

const Reviews = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div>
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
