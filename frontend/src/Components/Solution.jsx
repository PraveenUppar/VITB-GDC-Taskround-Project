const Solution = () => {
  return (
    <div>
      <section id="services" className="services section bg-gray-50 py-20">
        <div className="container mx-auto text-center  mb-10">
          <h2 className="text-5xl font-semibold text-gray-900  ">Solutions</h2>
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
    </div>
  );
};

export default Solution;
