import {
  FaStar,
  FaUtensils,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaStar />,
    title: "Highly Rated",
    text: "BEAST FEAST has built a strong reputation among local customers in Meerut.",
  },
  {
    icon: <FaUtensils />,
    title: "Plenty of Choices",
    text: "Choose from burgers, momos, waffles, pasta, sandwiches, shakes and more.",
  },
  {
    icon: <FaHeart />,
    title: "Local Favourite",
    text: "A casual food destination for friends, families and food lovers.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-950 px-6! py-20! sm:py-24!">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto! max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Why BEAST FEAST
          </p>

          <h2 className="mt-3! text-4xl font-black text-white sm:text-5xl">
            More than just a meal.
          </h2>

          <p className="mt-5! leading-7 text-gray-400">
            Great food, plenty of choices and a place to enjoy your time with
            the people who matter.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-12! grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8! text-center backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mx-auto! flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-xl text-white">
                {item.icon}
              </div>

              <h3 className="mt-6! text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3! leading-7 text-gray-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Rating */}
        <div className="mt-12! flex flex-col items-center justify-center">
          <div className="flex gap-1 text-xl text-orange-500">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} />
            ))}
          </div>

          <p className="mt-3! text-lg font-bold text-white">
            4.9 / 5 customer rating
          </p>

          <div className="mt-3! flex items-center gap-2 text-sm text-gray-400">
            <FaMapMarkerAlt />
            <span>Meerut, Uttar Pradesh</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;