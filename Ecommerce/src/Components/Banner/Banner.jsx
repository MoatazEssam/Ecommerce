import React from "react";
import Img from "../../assets/women4.jpg";
import { FaGrinStars } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

function Banner() {
  return (
    <div className="items-center 12 dark:bg-gray-900 flex justify-center py-12 sm:py-0 min-h-[550px] ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <div data-aos="zoom-out">
            <img
              src={Img}
              alt=""
              className="w-full object-cover max-w-[400px] h-[350px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold  dark:text-white">
              Sale Upto 50%
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              autem, non facere quasi vero nostrum recusandae laboriosam ullam
              illum odit, consequatur sapiente, eius quidem laborum accusantium?
              Commodi suscipit maxime at?
            </p>
            <div className="flex flex-col gap-4">
              <div
                data-aos="fade-up"
                className="flex items-center gap-4 dark:text-white "
              >
                <FaGrinStars className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-200 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-4   dark:text-white"
              >
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-200 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-4  dark:text-white "
              >
                <MdPayment className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200 dark:bg-green-400" />
                <p>Easy Payment</p>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-4  dark:text-white "
              >
                <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-200 dark:bg-yellow-400" />
                <p>More Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
