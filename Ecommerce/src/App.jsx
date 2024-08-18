import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import DarkMode from "./Components/DarkMode";
import Landing from "./Components/Landing/Landing";
import Products from "./Components/products/Products";
import Aos from "aos";
import "aos/dist/aos.css";
import TopRated from "./Components/TopRated/TopRated";
import Banner from "./Components/Banner/Banner";
import Subscribe from "./Components/Subscribe/Subscribe";

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100, // Offset (in px) from the original trigger point
      duration: 800, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function for animations
      delay: 100,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Landing />
      <Products />
      <TopRated />
      <Banner />
      <Subscribe />
    </div>
  );
};

export default App;
