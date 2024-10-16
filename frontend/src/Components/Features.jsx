const Features = () => {
  return (
    <div>
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
    </div>
  );
};

export default Features;
