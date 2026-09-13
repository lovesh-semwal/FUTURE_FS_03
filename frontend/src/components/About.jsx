import { FaHeart, FaLeaf, FaUtensils } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaUtensils />,
      title: "Loaded Flavours",
      text: "From juicy burgers to delicious waffles, explore a menu made for serious food cravings.",
    },
    {
      icon: <FaLeaf />,
      title: "Quality Ingredients",
      text: "Enjoy carefully prepared food with flavours and combinations made to satisfy every bite.",
    },
    {
      icon: <FaHeart />,
      title: "Made for Food Lovers",
      text: "A casual local spot where friends and family can come together over great food.",
    },
  ];

  return (
    <section id="about" className="bg-white px-6! py-20! sm:py-24!">
      <div className="mx-auto max-w-7xl">
        {/* Main About */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
              alt="Restaurant dining area"
              className="h-80 w-full object-cover transition duration-500 hover:scale-105 sm:h-96"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3! text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              About BEAST FEAST
            </p>

            <h2 className="text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
              Your cravings deserve a
              <span className="block text-orange-600">
                proper feast.
              </span>
            </h2>

            <p className="mt-6! text-lg leading-8 text-gray-600">
              BEAST FEAST is a local food destination in Meerut serving a
              variety of burgers, waffles, momos, pasta, sandwiches, fries,
              shakes and more.
            </p>

            <p className="mt-4! leading-7 text-gray-600">
              Whether you're catching up with friends, grabbing a quick bite,
              or simply looking for something delicious, BEAST FEAST brings
              together plenty of options for every kind of craving.
            </p>

            <a
              href="#menu"
              className="mt-8! inline-flex rounded-full bg-gray-900 px-6! py-3! font-bold text-white transition hover:bg-orange-600"
            >
              Explore Our Food
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20!">
          <div className="mx-auto! max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Why BEAST FEAST
            </p>

            <h3 className="mt-3! text-3xl font-black text-gray-900 sm:text-4xl">
              Made for big food moments.
            </h3>
          </div>

          <div className="mt-10! grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-7! transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-600">
                  {feature.icon}
                </div>

                <h4 className="mt-5! text-xl font-bold text-gray-900">
                  {feature.title}
                </h4>

                <p className="mt-3! leading-7 text-gray-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;