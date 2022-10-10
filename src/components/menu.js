import React from "react";
import "../App.css";
import menus from "./menu-list";

const Menu = () => {
  return (
    <div className="menu-container container" id="menu">
      <div className="title" id="title-menu">
        <h1>Menu</h1>
      </div>
      <div className="menu-lists">
        {menus.map((menu, i) => {
          return (
            <div className="menu" key={i}>
              <img src={menu.img} className="menu-img" alt={menu.name} style={menu.style} />
              <div className="pricing">
                <h3 className="name">{menu.name}</h3>
                <h3 className="price">{menu.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
