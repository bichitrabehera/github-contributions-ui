import { FaCode, FaFeather, FaWrench, FaRocket } from "react-icons/fa6";

const Features = () => {
  const features = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Zero Dependencies",
      description:
        "Pure React + TypeScript + Tailwind CSS. No bloated libraries or external data fetchers.",
    },
    {
      icon: <FaFeather className="w-6 h-6" />,
      title: "Lightweight",
      description:
        "Minimal bundle size. Loads fast and doesn't impact your site's performance.",
    },
    {
      icon: <FaWrench className="w-6 h-6" />,
      title: "Fully Customizable",
      description:
        "Choose from 4 themes: light, dark, blue, and purple. Easy to extend and modify.",
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Production Ready",
      description:
        "Battle-tested on portfolios and dashboards. Used by developers worldwide.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-black via-green-950/5 to-black py-20 border-y border-green-900/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose This Component?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built with developer experience and performance in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/40 border border-green-900/30 rounded-lg hover:border-green-500/50 hover:bg-green-950/20 transition-all duration-300 group"
            >
              <div className="text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
