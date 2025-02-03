"use client";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import AboutUs from "./components/aboutUs";
import MeetTheTeam from "./components/MeetTheTeam";
import OurExcellence from "./components/OurExcellence";

import Showcase from "./components/showcase";


const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <MeetTheTeam />
      <OurExcellence />
      <Showcase />
    </div>
  );
};

export default page;
