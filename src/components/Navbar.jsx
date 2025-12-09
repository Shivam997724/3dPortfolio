import React, { useState } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constents";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`${styles.paddingX}  w-full flex items-center py-5! fixed top-0 z-20 bg-primary  `}
    >
      <div className="w-full flex justify-between items-center mx-auto! max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {" "}
          <img src={logo} className="w-9 h-9 object-contain" />
          <p className="text-lg text-white font-bold cursor-pointer flex">
            Shivam <span className="sm:block hidden"> | 3d Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>{" "}
            </li>
          ))}
        </ul>

        <div className="flex flex-1 sm:hidden justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt=""
            className="w-28px h-28px object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white font-poppins text-[16px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
