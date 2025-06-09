
import { t } from "@/utils/localization";

const SuccessStories = () => {
  const stories = [
    {
      metric: "230%",
      description: t("success.growth"),
      company: "Restaurant B"
    },
    {
      metric: "800 hrs",
      description: t("success.time"),
      company: "Cafe Central"
    },
    {
      metric: "25+",
      description: t("success.reports"),
      company: "Hotel Plaza"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
              {t("success.title")}
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real restaurants using Gustasi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
                  {story.metric}
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  {story.description}
                </p>
                <p className="text-gray-500 font-medium">
                  — {story.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
