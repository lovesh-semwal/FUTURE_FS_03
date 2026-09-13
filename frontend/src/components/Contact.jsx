import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "917906355028";

  return (
    <section id="contact" className="bg-gray-50 px-6! py-20! sm:py-24!">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto! max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Visit Us
          </p>

          <h2 className="mt-3! text-4xl font-black text-gray-900 sm:text-5xl">
            Ready for a feast?
          </h2>

          <p className="mt-5! leading-7 text-gray-600">
            Find BEAST FEAST on Baghpat Road, Meerut and come hungry.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12! grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-3xl bg-gray-950 p-8! text-white sm:p-10!">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              BEAST FEAST
            </p>

            <h3 className="mt-3! text-3xl font-black">
              Come hungry. Leave happy.
            </h3>

            <p className="mt-5! leading-7 text-gray-400">
              Looking for burgers, waffles, momos, pasta, sandwiches, shakes
              or something delicious? Visit BEAST FEAST in Meerut.
            </p>

            {/* Address */}
            <div className="mt-8! flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-600">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="font-bold">Location</p>
                <p className="mt-1! text-sm leading-6 text-gray-400">
                  Shahkumbri Plaza, GA1,
                  <br />
                  Baghpat Road, near DPS,
                  <br />
                  Malyana, Meerut,
                  <br />
                  Uttar Pradesh 250002
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-6! flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-600">
                <FaPhone />
              </div>

              <div>
                <p className="font-bold">Phone</p>

                <a
                  href={`tel:+${phoneNumber}`}
                  className="mt-1! block text-sm text-gray-400 transition hover:text-orange-500"
                >
                  +91 79063 55028
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6! flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-600">
                <FaClock />
              </div>

              <div>
                <p className="font-bold">Opening Hours</p>
                <p className="mt-1! text-sm text-gray-400">
                  Daily: 11:00 AM – 9:00 PM
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8! flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:+${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6! py-3! font-bold text-white transition hover:bg-orange-700"
              >
                <FaPhone />
                Call Us
              </a>

              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6! py-3! font-bold text-white transition hover:bg-green-700"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <iframe
              title="BEAST FEAST Location"
              src="https://www.google.com/maps?q=BEAST%20FEAST%20Cafe%20Meerut&output=embed"
              className="h-[450px] w-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Directions CTA */}
        <div className="mt-8! text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=BEAST+FEAST+Cafe+Meerut"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-bold text-orange-600 transition hover:text-orange-700"
          >
            Get Directions
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;