import React from "react";
import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import ContactFrom from "./ContactFrom/ContactFrom";
import Info from "./Info/Info";
import MakeAppoinment from "./MakeAppoinment/MakeAppoinment";
import OurServices from "./OurServices/OurServices";
import Tastimonial from "./Tastimonial/Tastimonial";
import YourTerms from "./YourTerms/YourTerms";

const Home = () => {
  return (
    <div>
      <div className="px-6">
        <Banner></Banner>
        <Info></Info>
        <OurServices></OurServices>
        <YourTerms></YourTerms>
        <MakeAppoinment></MakeAppoinment>
        <Tastimonial></Tastimonial>
        <ContactFrom></ContactFrom>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
