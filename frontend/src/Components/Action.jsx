const Action = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Online Banking that Takes Your Business to the Next Level
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Monitor all your purchases in one place, and freeze or unfreeze your
            card with a few taps.
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
    </div>
  );
};

export default Action;
