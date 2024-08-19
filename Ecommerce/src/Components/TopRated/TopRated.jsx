import React from "react";
import Img1 from "../../assets/shirt.png";
import Img2 from "../../assets/shirt2.png";
import Img3 from "../../assets/shirt3.png";
import { FaStar } from "react-icons/fa6";

function TopRated({ handleOrder }) {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Img2,
      title: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Img3,
      title: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="  py-12  dark:bg-gray-900  dark:text-white duration-200">
      <div className="container">
        <div className="text-center mb-24 max-w-[600px] mx-auto">
          <h1
            data-aos="fade-up"
            className="text-primary text-3xl mb-9 md:text-5xl font-bold"
          >
            Top Rating Products
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-20 place-items-center">
          {ProductsData.map((product) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-gray-100 mt-10 dark:bg-gray-900 hover:bg-black/80 dark:hover:bg-primary hover:text-white
              relative shadow-xl duration-500 group max-w-[300px] "
              key={product.id}
            >
              <div className="h-[100px]">
                <img
                  src={product.img}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-110 duration-500
                  drop-shadow-md"
                />
              </div>
              <div className="p-5 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                <h1 className="font-bold text-xl">{product.title}</h1>
                <p
                  className="text-sm text-gray-400
                group-hover:text-white duration-300 line-clamp-4"
                >
                  {product.description}
                </p>
                <button
                  onClick={() => handleOrder()}
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4
                group-hover:bg-white group-hover:text-primary"
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopRated;
