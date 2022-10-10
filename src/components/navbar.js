import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="#home">
          <p>KopiMager</p>
        </a>
      </div>
      <div className="list-items">
        <input id="check" type="checkbox" />
        <label htmlFor="check">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
        <ul>
          <a href="#home">
            <li>Beranda</li>
          </a>
          <a href="#tentang">
            <li>Tentang</li>
          </a>
          <a href="#menu">
            <li>Menu</li>
          </a>
          <a href="#review">
            <li>Review</li>
          </a>
          <a href="#">
            <span>
              <li className="pesan-online">Pesan Online</li>
            </span>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
