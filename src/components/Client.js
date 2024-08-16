function Client() {
  return (
    // <!-- START: CLIENTS -->
    <section className="bg-gray-50 py-16 px-6" id="clients">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Mitra Kami yang Terpercaya
        </h3>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            { logo: './images/content/logo-adobe.svg', alt: 'Adobe' },
            { logo: './images/content/logo-ikea.svg', alt: 'IKEA' },
            { logo: './images/content/logo-hermanmiller.svg', alt: 'Herman Miller' },
            { logo: './images/content/logo-miele.svg', alt: 'Miele' },
          ].map((item, index) => (
            <div
              key={index}
              className="w-40 h-20 flex items-center justify-center bg-white shadow-lg rounded-lg border border-gray-100 transition-transform transform hover:scale-110 hover:bg-gray-100"
            >
              <img src={item.logo} alt={item.alt} className="w-32 h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- END: CLIENTS -->
  );
}

export default Client;