import React from "react";
import "../App.css";

const Navbar = () => {
  const smoothScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <div className="logo">
        <a href="#">
          <p>KopiMager</p>
        </a>
      </div>
      <div className="list-items">
        <ul>
          <a href="#">
            <li>Beranda</li>
          </a>
          <a href="#">
            <li>Tentang</li>
          </a>
          <a href="#">
            <li>Menu</li>
          </a>
          <a href="#">
            <li>Review</li>
          </a>
          <a href="#">
            <span>
              <li>Pesan Online</li>
            </span>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
