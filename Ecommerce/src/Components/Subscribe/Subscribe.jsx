import React from "react";
import Img from "../../assets/orange-pattern.jpg";
function Subscribe() {
  const Bannerimg = {
    backgroundImage: `url(${Img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-white">Subscribe</div>
  );
}

export default Subscribe;
