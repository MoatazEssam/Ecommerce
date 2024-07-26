import React from "react";
import logo from "../assets/clothes-shop.png";

const Navbar = () => {
  return (
    <div>
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="logo" className="w-10 uppercase" />
              Fa
            </a>
          </div>
          <div>
            <div>
              <input
                type="text"
                placeholder="search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1
                focus:outline-none focus:border-1 focus:border-primary"
              />
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
