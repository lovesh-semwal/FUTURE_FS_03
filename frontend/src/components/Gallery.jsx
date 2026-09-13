const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85",
    alt: "Loaded burger",
  },
  {
    src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1000&q=85",
    alt: "Pasta dish",
  },
  {
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85",
    alt: "Cafe interior",
  },
  {
    src: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=1000&q=85",
    alt: "Burger and fries",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85",
    alt: "Sweet dessert",
  },
  {
    src: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85",
    alt: "Fresh food",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-white px-6! py-20! sm:py-24!">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto! max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Food & Vibes
          </p>

          <h2 className="mt-3! text-4xl font-black text-gray-900 sm:text-5xl">
            Feast with your eyes.
          </h2>

          <p className="mt-5! leading-7 text-gray-600">
            Take a glimpse at the kind of food and atmosphere that makes a
            visit to BEAST FEAST worth it.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-12! grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group overflow-hidden rounded-2xl ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`w-full object-cover transition duration-500 group-hover:scale-110 ${
                  index === 0
                    ? "h-full min-h-80 md:min-h-[520px]"
                    : "h-64"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;