import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import DarkMode from "./Components/DarkMode";
import Landing from "./Components/Landing/Landing";
import Products from "./Components/products/Products";
import Aos from "aos";
import "aos/dist/aos.css";
import TopRated from "./Components/TopRated/TopRated";
import Banner from "./Components/Banner/Banner";
import Subscribe from "./Components/Subscribe/Subscribe";
import Rates from "./Components/Rates/Rates";
import Footer from "./Components/Footer/Footer";
import Popup from "./Components/Popup/Popup";

const App = () => {
  const [Order, setOrder] = useState(false);
  const handleOrder = () => {
    setOrder(!Order);
  };
  useEffect(() => {
    Aos.init({
      offset: 100, // Offset (in px) from the original trigger point
      duration: 800, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function for animations
      delay: 100,
    });
  }, []);

  return (
    <div className="dark:bg-gray-900 bg-white w-fit dark:text-white duration-200">
      <Navbar handleOrder={handleOrder} />
      <Landing handleOrder={handleOrder} />
      <Products />
      <TopRated handleOrder={handleOrder} />
      <Banner />
      <Subscribe />
      <Rates />
      <Footer />
      <Popup Order={Order} setOrder={setOrder}></Popup>
    </div>
  );
};

export default App;
