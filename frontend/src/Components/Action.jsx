import { useSpring, animated } from "react-spring";

const Action = () => {
  const fadeInProps = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { tension: 170, friction: 20 },
    delay: 200,
  });

  const buttonSpring = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ scale: 1.05 });
        await next({ scale: 1 });
      }
    },
    config: { tension: 200, friction: 12 },
  });

  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <animated.h2
            style={fadeInProps}
            className="text-3xl font-semibold mb-4 text-gray-900"
          >
            Online Banking that Takes Your Business to the Next Level
          </animated.h2>
          <animated.p
            style={fadeInProps}
            className="text-lg text-gray-600 mb-6"
          >
            Monitor all your purchases in one place, and freeze or unfreeze your
            card with a few taps.
          </animated.p>
          <div className="flex justify-center space-x-4">
            <animated.a
              href="#invoice"
              style={buttonSpring}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300 transform hover:scale-110"
            >
              Invoice Management
            </animated.a>
            <animated.a
              href="#integrations"
              style={buttonSpring}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300 transform hover:scale-110"
            >
              Integration Tools
            </animated.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Action;
