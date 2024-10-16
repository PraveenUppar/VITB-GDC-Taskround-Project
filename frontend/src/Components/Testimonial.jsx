import React, { useState, useEffect } from "react";

const testimonials = [
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
      "I love the security features. I can rest easy knowing my business data is protected. It makes my life easier.",
    name: "Chris Lee, Owner of Lee Enterprises",
  },
  {
    quote:
      "The integration tools provided by BizBank have simplified our accounting process significantly!",
    name: "Sarah Brown, CFO of Brown Consulting",
  },
  {
    quote:
      "The customer support at BizBank is exceptional. They are always there to help us when needed.",
    name: "Michael Green, Director of GreenCorp",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500); // Change every 3 seconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  return (
    <div>
      <section id="testimonial" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-semibold text-gray-900 mb-6 text-center">
            What Our Clients Say!
          </h2>
          <div className="relative">
            <div
              className="bg-white rounded-lg shadow-lg p-10  text-center"
              key={currentIndex}
            >
              <p className="text-gray-700 italic mb-4">
                {testimonials[currentIndex].quote}
              </p>
              <h4 className="text-gray-800 font-semibold">
                {testimonials[currentIndex].name}
              </h4>
            </div>

            {/* Controls - Optional */}
            <div className="absolute top-1/2 transform -translate-y-1/2 p-5 flex justify-between w-full">
              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === 0
                      ? testimonials.length - 1
                      : currentIndex - 1
                  )
                }
                className="text-gray-500 text-4xl hover:text-gray-900"
              >
                ⬅️
              </button>
              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === testimonials.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
                className="text-gray-500 text-4xl hover:text-gray-900"
              >
                ➡️
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
