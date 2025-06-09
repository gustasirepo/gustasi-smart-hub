
const IntegrationLogos = () => {
  const integrations = [
    { name: "Zomato", logo: "🍽️" },
    { name: "Swiggy", logo: "🛵" },
    { name: "MagicPin", logo: "📍" },
    { name: "WhatsApp", logo: "💬" },
    { name: "Google Maps", logo: "🗺️" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-12 text-gray-700">
            Seamlessly Integrates With Your Favorite Tools
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-w-[120px] animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{integration.logo}</div>
                <div className="font-semibold text-gray-700">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationLogos;
