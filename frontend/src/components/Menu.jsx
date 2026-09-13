import {
  FaHamburger,
  FaIceCream,
  FaPizzaSlice,
  FaCoffee,
  FaUtensils,
  FaDrumstickBite,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Burgers",
    description: "Loaded burgers packed with flavour and delicious toppings.",
    icon: <FaHamburger />,
  },
  {
    name: "Momos",
    description: "Hot and delicious momos served with flavourful accompaniments.",
    icon: <FaUtensils />,
  },
  {
    name: "Waffles",
    description: "Sweet waffles perfect for satisfying your dessert cravings.",
    icon: <FaIceCream />,
  },
  {
    name: "Pasta",
    description: "Comforting pasta dishes made for a hearty meal.",
    icon: <FaPizzaSlice />,
  },
  {
    name: "Sandwiches",
    description: "Tasty and filling sandwiches for a quick bite.",
    icon: <FaDrumstickBite />,
  },
  {
    name: "Shakes & Beverages",
    description: "Refreshing drinks and shakes to complete your feast.",
    icon: <FaCoffee />,
  },
];

const Menu = () => {
  return (
    <section id="menu" className="bg-gray-50 px-6! py-20! sm:py-24!">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto! max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Menu
          </p>

          <h2 className="mt-3! text-4xl font-black text-gray-900 sm:text-5xl">
            Something for every craving.
          </h2>

          <p className="mt-5! leading-7 text-gray-600">
            From savoury favourites to sweet treats and refreshing beverages,
            discover some of the categories you can enjoy at BEAST FEAST.
          </p>
        </div>

        {/* Menu Cards */}
        <div className="mt-12! grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group rounded-3xl bg-white p-7! shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-6! text-2xl font-black text-gray-900">
                {item.name}
              </h3>

              <p className="mt-3! leading-7 text-gray-600">
                {item.description}
              </p>

              <a
                href="#contact"
                className="mt-6! inline-flex font-bold text-orange-600 transition hover:text-orange-700"
              >
                Explore →
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12! text-center">
          <a
            href="#contact"
            className="inline-flex rounded-full bg-orange-600 px-7! py-3! font-bold text-white transition hover:bg-orange-700"
          >
            Visit BEAST FEAST
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;