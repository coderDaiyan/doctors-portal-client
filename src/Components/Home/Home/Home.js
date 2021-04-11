import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
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
      <Doctors />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
