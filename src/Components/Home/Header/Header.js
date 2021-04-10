import React from "react";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import FeaturedService from "../FeaturedService/FeaturedService";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <Navbar />
        <HeaderMain />
        <BusinessInfo />
        <FeaturedService />
      </div>
    </>
  );
};

export default Header;
