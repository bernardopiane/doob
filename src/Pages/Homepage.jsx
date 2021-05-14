import React from "react";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Portfolio from "../Components/Portfolio";
import Services from "../Components/Services";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
