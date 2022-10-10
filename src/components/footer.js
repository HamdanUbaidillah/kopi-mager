import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <div className="address">
          <img src={require("./img/icons/maps-and-flags.png")} alt="location" />
          <h2>Address</h2>
          <p>Jln. Pahlawan Sunaryo, Pandaan Pasuruan</p>
        </div>
        <div className="contact">
          <img src={require("./img/icons/phone.png")} alt="location" />
          <h2>Contact</h2>
          <p>
            +62 8144 4208 514 <br />
            +62 8155 9548 290
          </p>
        </div>
        <div className="email">
          <img src={require("./img/icons/mail.png")} alt="location" />
          <h2>Email</h2>
          <p>kopimager@gmail.com</p>
        </div>
      </div>
      <div className="credit">
        <p>
          Created by
          <b>
            <i>
              <a href="https://www.instagram.com/hmdnubaidillah"> hmdnubaidillah </a>
            </i>
          </b>
          | <b> Copyrights all rights reserved</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
