import React from "react";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-gray-900">
                nová
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#business-checking"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                Business Checking
              </a>
              <a
                href="#solutions"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                Solution
              </a>
              <a
                href="#resources"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                Resources
              </a>
              <a
                href="#results"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                Results
              </a>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/login"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
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
        <section className="text-center py-20 bg-white">
          <h1 className="text-5xl font-bold">
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

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">
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
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <p>&copy; 2024 Nová. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
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
}

export default App;
