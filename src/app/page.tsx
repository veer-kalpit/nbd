"use client";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import AboutUs from "./components/aboutUs";
import MeetTheTeam from "./components/MeetTheTeam";
import OurExcellence from "./components/OurExcellence";
import Showcase from "./components/showcase";
import Form from "./components/form";
import Footer from "./components/footer";


const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <MeetTheTeam />
      <OurExcellence />
      <Showcase />
      <Form />
      <Footer />
    </div>
  );
};

export default page;
