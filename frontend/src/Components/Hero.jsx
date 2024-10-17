import { useSpring, animated } from "react-spring";

const Hero = () => {
  const fadeInProps = useSpring({
    opacity: 10,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { tension: 200, friction: 20 },
    delay: 100,
  });

  const buttonSpring = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ scale: 1.2 });
        await next({ scale: 1 });
      }
    },
    config: { tension: 120, friction: 14 },
  });

  return (
    <div>
      <section id="/" className="text-center py-20 bg-white">
        <animated.h1
          style={fadeInProps}
          className="text-5xl font-bold text-gray-900 transition-all duration-700"
        >
          All Your Business Banking in One Platform
        </animated.h1>
        <animated.p
          style={fadeInProps}
          className="mt-4 text-lg text-gray-600 transition-all duration-700"
        >
          Take your business to new heights with faster cash flow and clear
          financial insights.
        </animated.p>
        <animated.a
          href="#get-started"
          className="mt-6 inline-block bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300"
          style={buttonSpring}
        >
          Get Started
        </animated.a>
      </section>
    </div>
  );
};

export default Hero;
