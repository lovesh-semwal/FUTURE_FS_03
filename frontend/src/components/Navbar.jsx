
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6! py-4!">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <span className="text-2xl font-black tracking-tight text-gray-900">
            BEAST
          </span>
          <span className="text-2xl font-black tracking-tight text-orange-600">
            FEAST
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="font-medium text-gray-700 transition hover:text-orange-600"
          >
            Home
          </a>

          <a
            href="#about"
            className="font-medium text-gray-700 transition hover:text-orange-600"
          >
            About
          </a>

          <a
            href="#menu"
            className="font-medium text-gray-700 transition hover:text-orange-600"
          >
            Menu
          </a>

          <a
            href="#gallery"
            className="font-medium text-gray-700 transition hover:text-orange-600"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="font-medium text-gray-700 transition hover:text-orange-600"
          >
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#menu"
          className="hidden rounded-full bg-orange-600 px-5! py-2! text-sm font-semibold text-white transition hover:bg-orange-700 md:block"
        >
          Explore Menu
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-900 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-6! py-5! md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="#home"
              onClick={closeMenu}
              className="font-medium text-gray-700 transition hover:text-orange-600"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="font-medium text-gray-700 transition hover:text-orange-600"
            >
              About
            </a>

            <a
              href="#menu"
              onClick={closeMenu}
              className="font-medium text-gray-700 transition hover:text-orange-600"
            >
              Menu
            </a>

            <a
              href="#gallery"
              onClick={closeMenu}
              className="font-medium text-gray-700 transition hover:text-orange-600"
            >
              Gallery
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="font-medium text-gray-700 transition hover:text-orange-600"
            >
              Contact
            </a>

            <a
              href="#menu"
              onClick={closeMenu}
              className="w-fit rounded-full bg-orange-600 px-5! py-2! text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Explore Menu
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;