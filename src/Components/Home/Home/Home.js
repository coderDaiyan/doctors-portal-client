import React from "react";
import Blogs from "../Blogs/Blogs";
import FeaturedService from "../FeaturedService/FeaturedService";
import Header from "../Header/Header";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <FeaturedService />
      <MakeAppoinment />
      <Testimonial />
      <Blogs />
    </>
  );
};

export default Home;
