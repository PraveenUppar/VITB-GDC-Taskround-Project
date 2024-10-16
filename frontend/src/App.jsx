import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/ContactUs";
import Testimonial from "./Components/Testimonial";
import Price from "./Components/Pricing";
import Solution from "./Components/Solution";
import About from "./Components/About";
import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Action from "./Components/Action";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header></Header>

      {/* Main Content Section */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero></Hero>

        {/* Features Section */}
        <Features></Features>

        {/* Call to Action Section */}
        <Action></Action>

        {/* About Section */}
        <About></About>

        {/* Solution Section */}
        <Solution></Solution>

        {/*Pricing Section */}
        <Price></Price>

        {/* Testimonials Section */}
        <Testimonial></Testimonial>

        {/* Contact Us Section */}
        <Contact></Contact>
      </main>

      {/* Footer Section */}
      <Footer></Footer>
    </div>
  );
};

export default App;
