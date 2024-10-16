const Header = () => {
  return (
    <div>
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
                href="#about-us"
                className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              >
                Solutions
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="#testimonial"
                className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              >
                Testimonial
              </a>
              <a
                href="#contact-us"
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
    </div>
  );
};

export default Header;
