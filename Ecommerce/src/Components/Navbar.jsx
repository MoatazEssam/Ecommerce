import React from "react";
import logo from "../assets/clothes-shop.png";
import { GoSearch } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#",
    },
    {
      id: 3,
      name: "Kids",
      link: "/#",
    },
    {
      id: 4,
      name: "Mens",
      link: "/#",
    },
    {
      id: 3,
      name: "Womens",
      link: "/#",
    },
  ];
  const dropdownmenu = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "best sellers",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
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
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 duration-200 transition-all hover:text-primary"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a className="flex  items-center gap-[2px] py-2" href="/#">
              Trending Items
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute hideen z-[100] shadow-lg hidden w-[200px] rounded-md bg-white p-2 text-black group-hover:block">
              <ul>
                {dropdownmenu.map((data) => (
                  <li
                    className="hover:text-primary transition-all duration-200"
                    key={data.id}
                  >
                    <a
                      href={data.link}
                      className="inline-block p-2 w-full rounded-md hover:bg-primary/40"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
