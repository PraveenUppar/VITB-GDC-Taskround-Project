import React from "react";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo and Title */}
            <div className="flex-shrink-0">
              <a href="/" className="text-3xl font-bold text-gray-900">
                BizBank
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex font-semibold space-x-8 text-lg">
              <a
                href="#business-checking"
                className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              >
                About Us
              </a>
              <a
                href="#solutions"
                className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              >
                Solutions
              </a>
              <a
                href="#resources"
                className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#results"
                className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="#results"
                className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              >
                Contact Us
              </a>
            </nav>

            {/* Login and Registration */}
            <div className="hidden md:flex text-lg items-center font-semibold space-x-4">
              <a
                href="/login"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                Log In
              </a>
              <a
                href="/get-started"
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center py-20 bg-white">
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
        <div className="bg-gray-50 py-10">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "Simplified Banking Solutions",
                  description:
                    "Streamline your financial management with our all-in-one platform.",
                },
                {
                  icon: "Faster Payment Processing",
                  description:
                    "Get paid faster with our instant payment options. Our platform ensures you never miss a payment.",
                },
                {
                  icon: "Easy Financial Insights",
                  description:
                    "Gain a clearer picture of your business finances with detailed reports and analytics.",
                },
                {
                  icon: "Secure and Scalable Growth",
                  description:
                    "We prioritize your business’s security with cutting-edge encryption and fraud detection.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:bg-red-500 transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
                >
                  <div className="mb-4 text-3xl transition-all duration-700 ease-in-out group-hover:text-white group-hover:scale-110 flex items-center justify-center">
                    <span className="material-icons">{feature.icon}</span>
                  </div>
                  <p className="text-gray-600 mt-2 text-center transition-all duration-700 ease-in-out group-hover:text-white group-hover:scale-110">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

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

        <section id="about" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8">
              {/* Content */}
              <div className="flex flex-col justify-center">
                <p className="text-red-500 text-3xl font-semibold uppercase tracking-wide mb-2">
                  Who We Are ?
                </p>
                <br></br>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Your Trusted Partner in Business Banking
                </h3>
                <p className="italic text-lg font-semibold text-gray-700 mb-6">
                  We are dedicated to helping businesses thrive by offering
                  innovative, secure, and efficient banking solutions designed
                  to simplify financial management.
                </p>
                <ul className="space-y-4 mb-6 font-semibold text-xl">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-700">
                      Your Trusted Financial Partner.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-700">
                      Champions of Small and Medium Enterprises.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-700">
                      Data-Driven Financial Insights.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-700">
                      Scalable Solutions for Growth
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-700">
                      Top-Tier Security and Fraud Protection.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section bg-gray-50 py-20">
          {/* Section Title */}
          <div className="container mx-auto text-center  mb-10">
            <h2 className="text-5xl font-semibold text-gray-900  ">
              Solutions
            </h2>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Your Trusted Financial Partner",
                  description:
                    "We are dedicated to helping businesses thrive by offering innovative banking solutions tailored to meet your needs. With a focus on providing reliable and efficient services.",
                },
                {
                  title: "Champions of Small Enterprises",
                  description:
                    "Our platform is built to provide customized solutions that help you grow at every stage of your journey, from startup to expansion.",
                },
                {
                  title: "Committed to Your Success",
                  description:
                    "Our mission is simple: to make business banking as seamless as possible. We work closely with you to simplify your financial operations",
                },
                {
                  title: "Enhanced Financial Technology",
                  description:
                    "We are at the forefront of financial technology, constantly evolving to provide the best tools for business owners.",
                },
                {
                  title: "Supportive Business Community",
                  description:
                    "Beyond just banking, we offer a community of like-minded entrepreneurs and experts. Our platform connects you to resources, advice, and support.",
                },
                {
                  title: "Driven by Excellence",
                  description:
                    "At our core, we are committed to delivering exceptional service with transparency and integrity. We believe in building long-term relationships with our clients",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:bg-red-500 transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
                >
                  <h3 className="mb-4 text-3xl transition-all duration-700 ease-in-out group-hover:text-white group-hover:scale-110 flex items-center justify-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 ">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*Pricing Section */}

        <section id="pricing" className="pricing section py-20">
          <div className="container mx-auto text-center  mb-14">
            <h2 className="text-5xl  font-semibold text-gray-900  ">Pricing</h2>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Free Plan",
                price: "$0 / month",
                color: "text-green-500",
                features: [
                  "Top-Tier Security ",
                  "Fraud Protection",
                  "Faster Payment Processing",
                  "Scalable Solutions (not available)",
                  "Financial Insights (not available)",
                ],
                featured: true,
              },
              {
                title: "Starter Plan",
                price: "$19 / month",
                color: "text-blue-400",
                features: [
                  "Top-Tier Security ",
                  "Fraud Protection",
                  "Faster Payment Processing",
                  "Scalable Solutions for Growth",
                  "Financial Insights (not available)",
                ],
                featured: true,
              },
              {
                title: "Business Plan",
                price: "$29 / month",
                color: "text-orange-400",
                features: [
                  "Top-Tier Security ",
                  "Fraud Protection",
                  "Faster Payment Processing",
                  "Scalable Solutions for Growth",
                  "Data-Driven Financial Insights",
                ],
                featured: true,
              },
              {
                title: "Ultimate Plan",
                price: "$49 / month",
                color: "text-blue-600",
                features: [
                  "Top-Tier Security ",
                  "Fraud Protection",
                  "Faster Payment Processing",
                  "Scalable Solutions for Growth",
                  "Data-Driven Financial Insights",
                ],
                featured: true,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-500 ease-in-out ${
                  plan.featured ? "border-4 border-blue-100" : ""
                }`}
                style={{ transform: "scale(1.05)" }}
              >
                <h3 className={`text-2xl font-bold ${plan.color}`}>
                  {plan.title}
                </h3>
                <p className="text-xl font-semibold my-4">{plan.price}</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`${
                        feature.includes("not available")
                          ? "line-through text-gray-400"
                          : ""
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "BizBank has transformed the way we manage our finances. The instant payment feature is a game changer!",
                  name: "John Doe, CEO of Tech Innovations",
                },
                {
                  quote:
                    "The financial insights provided by BizBank have helped us make informed decisions that have boosted our business growth.",
                  name: "Jane Smith, Founder of Startup Co.",
                },
                {
                  quote:
                    "I love the security features. I can rest easy knowing my business data is protected.It makes my life easier.",
                  name: "Chris Lee, Owner of Lee Enterprises",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
                >
                  <p className="text-gray-700 italic mb-4">
                    {testimonial.quote}
                  </p>
                  <h4 className="text-gray-800 font-semibold">
                    {testimonial.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact-us" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-semibold mb-12 text-center text-gray-900">
              Need Help? Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center mt-20 space-x-4">
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--ic"
                      width="32"
                      height="32"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6 20h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm6-13c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-5c3.27 0 7 2.46 7 7.15c0 2.98-2.13 6.12-6.39 9.39c-.36.28-.86.28-1.22 0C7.13 15.26 5 12.13 5 9.15C5 4.46 8.73 2 12 2z"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <h3 className="font-semibold text-xl">Address</h3>
                    <p className="text-gray-600">
                      A108 Adam Street, New York, NY 535022
                    </p>
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--ic"
                      width="32"
                      height="32"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M22 4H2v16h20V4zm-2 4l-8 5l-8-5V6l8 5l8-5v2z"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <h3 className="font-semibold text-xl">Email</h3>
                    <p className="text-gray-600">bizbank@gmail.com</p>
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--ic"
                      width="32"
                      height="32"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <h3 className="font-semibold text-xl">Phone</h3>
                    <p className="text-gray-600">+91 9846513184</p>
                  </span>
                </div>
              </div>

              {/* Contact Form */}
              {/* Contact Form */}
              <div>
                <form className="bg-white shadow-md rounded-lg p-8 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Eg: BizBank"
                      className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Eg: bizbank@gmail.com"
                      className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm">&copy; 2024 BizBank. All rights reserved.</p>
            <div className="flex space-x-4 text-sm">
              <a href="#privacy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:underline">
                Terms of Service
              </a>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
