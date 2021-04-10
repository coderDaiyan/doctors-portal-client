import React from "react";
import FeaturedService from "../FeaturedService/FeaturedService";
import Header from "../Header/Header";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <FeaturedService />
      <MakeAppoinment />
    </>
  );
};

export default Home;
