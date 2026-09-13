
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gray-950 pt-24!"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1800&q=85')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6! py-20!">
        <div className="max-w-3xl">
          <div className="mb-6! inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-4! py-2! text-sm font-semibold text-orange-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Fresh • Loaded • Delicious
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Big Cravings.
            <span className="block text-orange-500">
              Bigger Feast.
            </span>
          </h1>

          <p className="mt-6! max-w-2xl text-lg leading-8 text-gray-200 sm:text-xl">
            Welcome to BEAST FEAST — your local destination for burgers,
            waffles, momos, shakes and all your favourite comfort food.
          </p>

          {/* Buttons */}
          <div className="mt-8! flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7! py-3! font-bold text-white transition hover:bg-orange-700"
            >
              Explore Our Menu
              <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7! py-3! font-bold text-white backdrop-blur transition hover:bg-white hover:text-gray-900"
            >
              <FaMapMarkerAlt />
              Find Us
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-12! grid max-w-xl grid-cols-3 gap-6 border-t border-white/20 pt-6!">
            <div>
              <p className="text-2xl font-black text-white">4.9★</p>
              <p className="mt-1! text-sm text-gray-300">Customer Rating</p>
            </div>

            <div>
              <p className="text-2xl font-black text-white">Fresh</p>
              <p className="mt-1! text-sm text-gray-300">Made to Order</p>
            </div>

            <div>
              <p className="text-2xl font-black text-white">Local</p>
              <p className="mt-1! text-sm text-gray-300">Meerut Favourite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;