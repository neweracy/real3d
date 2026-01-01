import React, { useState, useEffect } from "react";
import "./Drawer.css";
import bisko from "/vite.svg";

import { Link, animateScroll as scroll } from "react-scroll";

const Drawer = ({ isScrolled }) => {
  return (
    <div className="">
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Toggle Button */}
          <label
            htmlFor="my-drawer"
            className={`btn btn-circle btn-ghost transition-colors duration-300 ${
              isScrolled
                ? "text-surface-dark hover:bg-surface-muted"
                : "text-white hover:bg-white/10"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>

        {/* Drawer Side */}
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer"
            className="drawer-overlay backdrop-blur-sm bg-surface-dark/50"
          ></label>
          <div className="menu p-4 w-80 h-full bg-surface-light text-text-main flex flex-col justify-center space-y-8">
            {/* Close Button (Optional, but good UX) */}
            <div className="absolute top-4 right-4">
              <label
                htmlFor="my-drawer"
                className="btn btn-sm btn-circle btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </label>
            </div>

            {/* Logo in Drawer */}
            <div className="text-center mb-8">
              <span className="text-3xl font-black tracking-tighter uppercase text-surface-dark">
                Real<span className="text-primary">3D</span>
              </span>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-4 text-center">
              <li>
                <Link
                  activeClass="text-primary"
                  className="block text-2xl font-bold hover:text-primary transition-colors uppercase tracking-wide"
                  to="Hero"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-primary"
                  className="block text-2xl font-bold hover:text-primary transition-colors uppercase tracking-wide"
                  to="Slider"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-primary"
                  className="block text-2xl font-bold hover:text-primary transition-colors uppercase tracking-wide"
                  to="Visuals"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                >
                  Visuals
                </Link>
              </li>
            </ul>

            {/* Footer/Socials in Drawer */}
            <div className="text-center mt-12 text-text-muted text-sm">
              <p>&copy; 2026 Real3D</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
