import React, { useEffect, useState } from 'react';
import ArrivedItem from './ArrivedItem';

function Arrived() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=6');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchItems();
  }, []);

  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="flex justify-center text-center mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Produk Terbaru <br className="" />untuk Anda
          </h3>
        </div>
      </div>
      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto">
          <div className="flex -mx-4 flex-row relative">
            {items && items.map((item) => (
              <ArrivedItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Arrived;
