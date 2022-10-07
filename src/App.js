import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Tentang from "./components/tentang";
import Menu from "./components/menu";
import Reviews from "./components/review";

const App = () => {
  return (
    <main>
      {/* <Navbar />
      <Home />
      <Tentang />
      <Menu /> */}
      <Reviews />
    </main>
  );
};

export default App;
