const features = [
  {
    icon: "fas fa-users",
    title: "Unifying Communities",
    description:
      "Communion bridges diverse religious communities, becoming the social glue for faiths...",
  },
  {
    icon: "fas fa-bolt",
    title: "Innovative and Fun",
    description:
      "Experience faith in a fresh way through our interactive features also the other Innovative and Fun activities...",
  },
  {
    icon: "fas fa-chart-line",
    title: "Promoting Unity",
    description:
      "We foster understanding and harmony between different faith...",
  },
];

export default function CommunionSection() {
  return (
    <div className="bg-black/90 text-white my-16 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">Why Communion Rocks!</h2>
          <p className="mt-4 text-lg">
            Communion is not just another platform—it’s a vibrant space that
            unites diverse faiths, beliefs, and traditions. By promoting
            collaboration and connection, we’re fostering a world where
            differences become strengths and unity becomes the norm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="bg-white/5 p-8 rounded-xl text-center hover:bg-white/10 duration-200 "
            >
              <div className="text-4xl mb-6 text-gray-400">
                <i className={icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
              <p className="text-gray-300 mb-6">{description}</p>
              <a
                href="#"
                className="text-white/90 font-semibold hover:text-white"
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
