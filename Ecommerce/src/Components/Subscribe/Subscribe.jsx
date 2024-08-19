import React from "react";
import Img from "../../assets/orange-pattern.jpg";
import { FaPaperPlane } from "react-icons/fa";
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
    <div className=" bg-gray-100 dark:bg-gray-900">
      <div className=" text-white" style={Bannerimg} data-aos="fade">
        <div data-aos="fade-up" className="container backdrop-blur-sm py-10">
          <div className="flex flex-col space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl  text-center sm:text-left sm:text-4xl font-semibold">
              Get Notified About New Products
            </h1>
            <input
              type="text"
              data-aos="fade-up"
              placeholder="Enter Your Email "
              className="w-full p-3 rounded-2xl"
            />
            <div className="flex flex-row justify-center">
              <button className=" w-fit flex justify-center font-semibold text-xl items-center bg-gradient-to-r from-green-400 to-violet-400 hover:scale-105 duration-200 text-white py-2 my-2 px-4 rounded-full">
                <FaPaperPlane className="text-xl mx-2" />
                Notify me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
