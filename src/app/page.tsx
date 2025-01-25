"use client";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import AboutUs from "./components/aboutUs";
import MeetTheTeam from "./components/MeetTheTeam";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <MeetTheTeam />
    </div>
  );
};

export default page;
