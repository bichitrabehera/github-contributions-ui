const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Full-stack Developer",
      quote:
        "This component saves me hours of work. It just works out of the box, and the documentation is crystal clear.",
      avatar: "AC",
    },
    {
      name: "Jordan Mitchell",
      role: "Designer & Developer",
      quote:
        "The theming system is so elegant. I was able to customize it to match my portfolio in minutes.",
      avatar: "JM",
    },
    {
      name: "Sam Patel",
      role: "Open Source Contributor",
      quote:
        "Zero dependencies means zero headaches. Love seeing well-engineered components like this.",
      avatar: "SP",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-black to-green-950/10 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by Developers
          </h2>
          <p className="text-gray-400 text-lg">
            See what others are saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/40 border border-green-900/30 rounded-lg hover:border-green-500/50 hover:bg-green-950/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-sm font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
