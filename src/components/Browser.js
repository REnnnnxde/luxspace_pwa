function Browse() {
  return (
    // <!-- START: BROWSE THE ROOM -->
    <section className="bg-gray-50 py-16 px-6" id="browse-the-room">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold text-gray-900 leading-snug">
            Temukan Koleksi <br className="hidden md:block" />
            Pilihan Kami yang <span className="text-pink-600">Eksklusif</span> untuk Anda
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="./images/content/image-catalog-1.png"
                alt="Living Room"
                className="w-full h-56 object-cover object-center transition-transform transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div>
                  <h5 className="text-xl font-semibold mb-2">Living Room</h5>
                  <span className="text-sm">18.309 items</span>
                </div>
              </div>
            </div>
            <a href="/" className="absolute inset-0"></a>
          </div>
          <div className="relative group">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="./images/content/image-catalog-3.png"
                alt="Decoration"
                className="w-full h-56 object-cover object-center transition-transform transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div>
                  <h5 className="text-xl font-semibold mb-2">Decoration</h5>
                  <span className="text-sm">77.392 items</span>
                </div>
              </div>
            </div>
            <a href="/" className="absolute inset-0"></a>
          </div>
          <div className="relative group">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="./images/content/image-catalog-4.png"
                alt="Living Room"
                className="w-full h-56 object-cover object-center transition-transform transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div>
                  <h5 className="text-xl font-semibold mb-2">Living Room</h5>
                  <span className="text-sm">22.094 items</span>
                </div>
              </div>
            </div>
            <a href="/" className="absolute inset-0"></a>
          </div>
          <div className="relative group">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="./images/content/image-catalog-2.png"
                alt="Children Room"
                className="w-full h-56 object-cover object-center transition-transform transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div>
                  <h5 className="text-xl font-semibold mb-2">Children Room</h5>
                  <span className="text-sm">837 items</span>
                </div>
              </div>
            </div>
            <a href="/" className="absolute inset-0"></a>
          </div>
        </div>
      </div>
    </section>
    // <!-- END: BROWSE THE ROOM -->
  );
}

export default Browse;
