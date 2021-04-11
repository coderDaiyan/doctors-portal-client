import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import HeaderMain from "../HeaderMain/HeaderMain";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="header-container">
        <Navbar />
        <HeaderMain />
        <BusinessInfo />
      </div>
    </>
  );
};

export default Header;
