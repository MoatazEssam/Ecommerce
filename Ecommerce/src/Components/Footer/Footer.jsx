import React from "react";
import Img from "../../assets/footer-pattern.jpg";
import logo from "../../assets/clothes-shop.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Img})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "99%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
function Footer() {
  return (
    <div className=" bg-white   dark:bg-gray-900">
      <div
        className="text-white bg-white dark:bg-gray-900  mx-auto"
        style={BannerImg}
      >
        <div className="container">
          <div
            data-aos="zoom-in"
            className="grid grid-cols-1 md:grid-cols-3 pt-5 pb-44"
          >
            <div className="py-8 px-4">
              <h1 className="text-xl sm:text-left text-justify mb-3 flex items-center gap-3 sm:text-3xl font-bold">
                <img src={logo} alt="" className="max-w-[50px]" />
                Fa Fashon
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati aliquid, consequuntur corrupti error neque voluptates
                labore necessitatibus voluptas quidem magni facere atque laborum
                velit nam nisi voluptatum ex debitis nemo!
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl sm:text-3xl text-justify sm:text-left font-bold mb-3">
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((data) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={data.title}
                      >
                        <a href={data.link}>{data.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl  hover:text-primary hover:translate-x-1 duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl  hover:text-primary hover:translate-x-1 duration-300" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl  hover:text-primary hover:translate-x-1 duration-300" />
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Cairo , Egypt</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMobileAlt />
                    <p>+201148956841</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
