import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Asection from "../components/Asection";
import AboutAuthentic from "../components/AboutAuthentic";
import AboutInfo from "../components/AboutInfo";

function About() {
  return (
    <>
      <Navbar />
    <Asection  />
    <AboutAuthentic/>
    <AboutInfo/>
     <Testimonials/>
  <Footer/>
    </>
  );
}
export default About;