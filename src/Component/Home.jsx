import React from "react";

import "../Component/Home.css";
import Featured from "../Sections/Featured";
import FeaturedProperties from "../Sections/FeaturedProperties";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header";
import MailList from "../Sections/MailList";
import Navbar from "../Sections/Navbar";
import PropertyList from "../Sections/Propertylist";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">Amazing Destinations</h1>
        <Featured />
        <h1 className="homeTitle">More Than 100+ Hotels/Louge/Restaurants</h1>
        <PropertyList />
        <h1 className="homeTitle">Our Featured Hotels</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
