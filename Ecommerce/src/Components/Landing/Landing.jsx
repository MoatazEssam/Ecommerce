import React from "react";
import img1 from "../../assets/modern-big-sale-banner-concept.png";
import img2 from "../../assets/young-woman-talking-with-telephone-while-holding-shopping-bags-cup-white-background-high-quality-photo.png";
import img3 from "../../assets/young-woman-talking-with-telephone-while-holding-shopping-bags-cup-white-background-high-quality-photo.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Landing({ handleOrder }) {
  const images = [
    {
      id: 1,
      img: img1,
      title: "Big Sale",
      des: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos minus corrupti deleniti consequuntur id, rem dolor incidunt recusandae accusamus impedit modi dolorem. Doloribus, quam! Reprehenderit repellat quae sequi adipisci eius.",
    },
    {
      id: 2,
      img: img2,
      title: "Women Clothes",
      des: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos minus corrupti deleniti consequuntur id, rem dolor incidunt recusandae accusamus impedit modi dolorem. Doloribus, quam! Reprehenderit repellat quae sequi adipisci eius.",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000, // Corrected typo here
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div
      className="overflow-hidden relative min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center
     dark:bg-gray-900  dark:text-white duration-200"
    >
      {/* BACKground */}
      <div className="w-[700px] h-[700px] absolute bg-primary/40  -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {images.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 px-2">
                <div className="flex flex-col justify-center gap-4 pt-5 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
                    {data.title}
                  </h1>
                  <p className="text-sm">{data.des}</p>
                  <div className="">
                    <button
                      onClick={handleOrder}
                      className=" bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 my-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2 z-10">
                  <div>
                    <img
                      className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] sm:scale-105 lg:scale-120 mx-auto object-contain 
                        "
                      src={data.img}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Landing;
