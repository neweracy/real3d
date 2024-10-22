import React, { useState, useEffect } from "react";
import "./Drawer.css";
import bisko from "/vite.svg";

import { Link, animateScroll as scroll } from "react-scroll";

const Drawer = () => {
  const [navBg, setNavBg] = useState(false);

  // Handle scroll event to toggle background
  const handleScroll = () => {
    const heroHeight = window.innerHeight; // Set this to the height of the screen
    if (window.scrollY >= heroHeight) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className="drawer pl-0 m-0">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className={` ${
              navBg ? "bg-yellow-500 " : "bg-white"
            } rounded-full p-1 drawer-button swap swap-flip`}
          >
            <svg
              className={` swap-off fill-current ${
                navBg ? "text-white " : "text-black"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu -inset-x-4 lg:w-96 sm:w-64  h-full  bg-white text-gray-700 DBody ">
            {/* Sidebar content here */}
            <li>
              <div className="flex w-auto h-auto justify-center items-center m-5">
                <div className=" avatar">
                  <div className="w-24 rounded-full">
                    <img src={bisko} alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                activeClass="active"
                className="mt-6 mb-4 font-semibold text-xl text-yellow-600"
                to="Hero"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset if needed to account for your fixed header
                duration={400}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className=" mb-4 font-semibold text-xl text-yellow-600"
                to="Slider"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset if needed to account for your fixed header
                duration={400}
              >
                SLIDER
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className=" font-semibold text-xl text-yellow-600"
                to="Visuals"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset if needed to account for your fixed header
                duration={400}
              >
                VISUALS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
