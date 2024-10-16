const Price = () => {
  return (
    <div>
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
    </div>
  );
};

export default Price;
