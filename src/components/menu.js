import React from "react";
import "../App.css";

const Menu = () => {
  return (
    <div className="menu-container container">
      <div className="title" id="title-menu">
        <h1>Menu</h1>
      </div>
      <div className="menu-lists">
        {/* capuchino */}
        <div className="menu">
          <img 
          className="menu-img"
          src={require("./img/menu/capuchino.png")} 
          alt="cappuchino" 
          style={{width:"150px", height:"140px", marginRight:"15px"}}
          />
          <div className="pricing">
            <h3 className="name">Cappucino</h3>
            <h3 className="price">IDR 27.000</h3>
          </div>
        </div>
        {/* mocha */}
        <div className="menu">
          <img  
          className="menu-img"
          src={require("./img/menu/mocha.png")} 
          alt="mocha" 
          style={{width: "115px", height: "110px", marginRight: "20px"}}
          />
          <div className="pricing">
            <h3 className="name">Mocha</h3>
            <h3 className="price">IDR 20.000</h3>
          </div>
        </div>
        {/* egg toast */}
        <div className="menu">
          <img 
          className="menu-img" 
          src={require("./img/menu/eggtoast.png")} 
          alt="eggtoast" 
          style={{width:"160px", height:"150px"}}
          />
          <div className="pricing">
            <h3 className="name">Egg toast</h3>
            <h3 className="price">IDR 20.000</h3>
          </div>
        </div>
        {/* latte */}
        <div className="menu">
          <img 
          className="menu-img" 
          src={require("./img/menu/latte.png")} 
          alt="latte" 
          style={{width:"170px", height: "170px", marginLeft:"-20px"}}
          />
          <div className="pricing">
            <h3 className="name">Latte</h3>
            <h3 className="price">IDR 24.000</h3>
          </div>
        </div>
        {/* machiato */}
        <div className="menu">
          <img 
          className="menu-img" 
          src={require("./img/menu/macchiato.png")}
          alt="machiato" 
          style={{width: "130px", height:"140px", marginRight: "15px"}}
          />
          <div className="pricing">
            <h3 className="name">Machiato</h3>
            <h3 className="price">IDR 30.000</h3>
          </div>
        </div>
        {/* pancake */}
        <div className="menu">
          <img className="menu-img" 
          src={require("./img/menu/pancake.png")} 
          alt="pancake" 
          style={{width:"130px", height:"120px", marginRight: "20px"}}
          />
          <div className="pricing">
            <h3 className="name">Pancake</h3>
            <h3 className="price">IDR 27.000</h3>
          </div>
        </div>
        {/* expresso */}
        <div className="menu">
          <img 
          className="menu-img" 
          src={require("./img/menu/expresso.png")} 
          alt="expresso" 
          style={{width: "260px", height: "180px", marginRight: "-50px", marginLeft: "-65px"}}
          />
          <div className="pricing">
            <h3 className="name">Expresso</h3>
            <h3 className="price">IDR 28.000</h3>
          </div>
        </div>
        {/* americano */}
        <div className="menu">
          <img 
          className="menu-img" 
          src={require("./img/menu/americano.png")} 
          alt="americano" 
          style={{width: "130px", height: "120px", marginRight: "15px", marginLeft: "10px"}}
          />
          <div className="pricing">
            <h3 className="name">Americano</h3>
            <h3 className="price">IDR 34.000</h3>
          </div>
        </div>
        {/* fried rice */}
        <div className="menu">
          <img 
          className="menu-img" 
          src={require("./img/menu/friedrice.png")} 
          alt="friedrice" 
          style={{width: "130px", height: "120px", marginRight: "20px"}}
          />
          <div className="pricing">
            <h3 className="name">Fried rice</h3>
            <h3 className="price">IDR 34.000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
