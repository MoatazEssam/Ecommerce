import React from "react";
import logo from "../assets/clothes-shop.png";
import { GoSearch } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40 relative">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl items-end flex gap-2"
            >
              <img src={logo} alt="logo" className="w-10 uppercase" />
              Fa
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative hidden group sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] hover:border-black group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1
                focus:outline-none focus:border-1 focus:border-primary"
              />
              <GoSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => alert("Order")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 flex items-center justify-center gap-3 group text-white px-4 py-1 rounded-full"
            >
              <span className="group-hover:block hidden transition-all duration-600">
                Order
              </span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darkmode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////// */}
      <div></div>
    </div>
  );
};

export default Navbar;
