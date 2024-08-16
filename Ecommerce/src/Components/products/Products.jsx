import React from "react";
import Img1 from "../../assets/women.png";
import Img2 from "../../assets/women2.jpg";
import Img3 from "../../assets/women3.jpg";
import Img4 from "../../assets/women4.jpg";
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ProductCard Component
function ProductCard({ img, title, color, rating, aosDelay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="space-y-3 p-4 justify-center items-center"
    >
      <img
        src={img}
        alt={title}
        className="h-[220px] w-[220px] object-cover rounded-md"
      />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{color}</p>
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}

// Products Component
function Products() {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Women Western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img2,
      title: "Fashion T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
  ];

  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 dark:bg-gray-900 dark:text-white duration-200">
      <div className="px-12 ">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1
            data-aos="fade-up"
            className="text-primary text-3xl mb-5 md:text-5xl font-bold"
          >
            Top Selling Products
          </h1>
        </div>
        <Slider {...sliderSettings}>
          {ProductsData.map((data) => (
            <ProductCard
              key={data.id}
              img={data.img}
              title={data.title}
              color={data.color}
              rating={data.rating}
              aosDelay={data.aosDelay}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Products;
