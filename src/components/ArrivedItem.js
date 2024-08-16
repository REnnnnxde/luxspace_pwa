function numberFormat(price){
    const currency = Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    })
  
    return currency.format(price)
  }
  
  function ArrivedItem({ item }) {
    return (
      <div className="px-4 relative card group hover:shadow-lg hover:scale-105 transition duration-200 ease-in-out">
        <div
          className="rounded-xl overflow-hidden card-shadow relative"
          style={{ width: "287px", height: "287px" }}  // Mengubah tinggi gambar agar persegi
        >
          <div
            className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center w-full h-full bg-black bg-opacity-35"
          >
            <div
              className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            >
              {/* Icon SVG */}
            </div>
          </div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="mt-2">  {/* Menambahkan margin-top untuk jarak antara gambar dan teks */}
          <span className="text-gray-500 text-sm">{numberFormat(item.price)}</span> 
          <h5 className="text-md font-semibold mt-2">{item.title}</h5> 
          <a href="/details" className="stretched-link">
            {/* Fake children */}
          </a>
        </div>
      </div>
    );
  }
  
  export default ArrivedItem;