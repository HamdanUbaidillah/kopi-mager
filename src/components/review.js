import React from "react";
import "../App.css";

const Reviews = () => {
  return (
    <div className="container" id="review">
      <div className="title">
        <h1>Apa kata pelanggan?</h1>
      </div>
      <div className="carousel-container">
        {/* <button className="left">
          <img src={require("./img/icons/arrow.png")} alt="arrow" />
        </button>
        <button className="right">
          <img src={require("./img/icons/arrow.png")} alt="arrow" />
        </button> */}
        <div className="reviews">
          <div className="review">
            <img className="reviewer-img" src={require("./img/reviewer.png")} alt="reviewer" />
            <h2 className="name">Erick Yuda</h2>
            <img className="stars" src={require("./img/stars.png")} alt="stars" />
            <p>“Pelayanan baik, kopi dan makananya enak sangat recomended bagi penikmat kopi atau yang pengen minum kopi saja” </p>
          </div>
          {/* <div className="dots">
            <button className="filled-dot"></button>
            <button></button>
            <button></button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
