import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/ContactUs";
import Testimonial from "./Components/Testimonial";
import Price from "./Components/Pricing";
import Solution from "./Components/Solution";
import About from "./Components/About";
import Features from "./Components/Features";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header></Header>

      {/* Main Content Section */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="/" className="text-center py-20 bg-white">
          <h1 className="text-5xl font-bold text-gray-900">
            All Your Business Banking in One Platform
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Take your business to new heights with faster cash flow and clear
            financial insights.
          </p>
          <a
            href="#get-started"
            className="mt-6 inline-block bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300"
          >
            Get Started
          </a>
        </section>

        {/* Features Section */}
        <Features></Features>

        {/* Call to Action Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Online Banking that Takes Your Business to the Next Level
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Monitor all your purchases in one place, and freeze or unfreeze
              your card with a few taps.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#invoice"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Invoice Management
              </a>
              <a
                href="#integrations"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Integration Tools
              </a>
            </div>
          </div>
        </section>

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
