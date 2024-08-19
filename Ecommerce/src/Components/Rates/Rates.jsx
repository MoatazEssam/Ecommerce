import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

function Rates() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10   dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1
            data-aos="fade-up"
            className="text-primary text-3xl mb-2 md:text-5xl font-bold"
          >
            Ratings
          </h1>
          <p
            data-aos="fade-up"
            className="text-gray-500 text-xl  md:text-3xl font-semibold"
          >
            What Our Customers Say
          </p>
          <p data-aos="fade-up" className="text-gray-400 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            nobis! Ipsa, doloribus rem quam pariatur facere atque quod dolorem
            odio, eligendi quos expedita culpa inventore laboriosam rerum fugiat
            sit error?
          </p>
        </div>
        <div>
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div className="my-6 shadow-2xl" key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-2  rounded-xl dark:bg-gray-800 bg-primary/20 relative">
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full h-20 w-20"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                      <div className="space-y-3">
                        <p className="text-gray-400 text-xs">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/80 dark:text-white">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rates;
