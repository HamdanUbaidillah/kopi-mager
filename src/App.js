import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Tentang from "./components/tentang";
import Menu from "./components/menu";
import Reviews from "./components/review";
import Footer from "./components/footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <Tentang />
      <Menu />
      <Reviews />
      <Footer />
    </main>
  );
};

export default App;
