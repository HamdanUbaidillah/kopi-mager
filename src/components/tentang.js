import React from "react";
import "../App.css";

const Tentang = () => {
  return (
    <div className="container" id="tentang">
      <div className="title">
        <h1>Tentang kami</h1>
      </div>
      <div className="hero">
        <img id="img-about" src={require("./img/bg/bg-about.jpg")} />
        <div className="about-section">
          <h2>What makes us special?</h2>
          <p className="about-text">Kopi kami dibuat menggunakan biji kopi pilihan yang dipetik dari petani terbaik dan diolah oleh tangan profesional. Rasakan kesegaran dan kenikmatan kopi terbaik dari kami.</p>
          <div className="icons-container">
            <div className="icon-container">
              <img className="icon" src={require("./img/icons/coffee-beans.png")} alt="bean" />
              <p>Kualitas</p>
            </div>
            <div className="icon-container">
              <img className="icon" src={require("./img/icons/fast-delivery.png")} alt="fast" />
              <p>Free ongkir</p>
            </div>
            <div className="icon-container">
              <img className="icon" src={require("./img/icons/couch.png")} alt="couch" />
              <p>Nyaman</p>
            </div>
          </div>
          <div className="order-now">
            <p>Pesan sekarang</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
