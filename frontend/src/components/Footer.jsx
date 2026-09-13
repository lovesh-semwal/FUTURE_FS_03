
import {
  FaInstagram,
  FaFacebookF,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black px-6! pb-8! pt-16! text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black">
              BEAST <span className="text-orange-500">FEAST</span>
            </h3>

            <p className="mt-4! max-w-sm leading-7 text-gray-400">
              Burgers, waffles, momos, pasta, shakes and more — made for
              satisfying your biggest food cravings.
            </p>

            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold">Quick Links</h4>

            <div className="mt-5! flex flex-col gap-3">
              <a
                href="#home"
                className="text-gray-400 transition hover:text-orange-500"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-400 transition hover:text-orange-500"
              >
                About
              </a>

              <a
                href="#menu"
                className="text-gray-400 transition hover:text-orange-500"
              >
                Menu
              </a>

              <a
                href="#gallery"
                className="text-gray-400 transition hover:text-orange-500"
              >
                Gallery
              </a>

              <a
                href="#contact"
                className="text-gray-400 transition hover:text-orange-500"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold">Opening Hours</h4>

            <div className="mt-5! space-y-3 text-gray-400">
              <div className="flex justify-between gap-4">
                <span>Monday – Friday</span>
                <span>12:00 – 22:00</span>
              </div>

              <div className="flex justify-between gap-4">
                <span>Saturday</span>
                <span>12:00 – 22:00</span>
              </div>

              <div className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>12:00 – 22:00</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold">Contact</h4>

            <div className="mt-5! space-y-5">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1! shrink-0 text-orange-500" />

                <p className="text-sm leading-6 text-gray-400">
                  Shahkumbri Plaza, GA1,
                  <br />
                  Baghpat Road, near DPS,
                  <br />
                  Malyana, Meerut,
                  <br />
                  Uttar Pradesh 250002
                </p>
              </div>

              <a
                href="tel:+917906355028"
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-orange-500"
              >
                <FaPhone className="text-orange-500" />
                +91 79063 55028
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12! border-t border-white/10 pt-6! text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BEAST FEAST. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;