import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browser from './components/Browser';
import Arrived from './components/Arrived';
import Client from './components/Client';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    (async function() {
      try {
        const res = await fetch("https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc", {
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
            "x-api-key" : process.env.REACT_APP_API_KEY
          }
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const { nodes } = await res.json();
        setItems(nodes);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Browser />
      <Arrived items={items} />
      <Client />
      <Aside />
      <Footer />
    </>
  );
}

export default App;
