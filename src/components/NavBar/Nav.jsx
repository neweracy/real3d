import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./Nav.css";
import Drawer from "./Drawer";

const Nav = () => {
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

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="NavBody">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div
        className={`navbar h-[12px] max-w-screen shadow-md ${
          navBg ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex-1">
          <a
            href="#"
            className={`btn btn-ghost ${
              navBg ? "text-yellow-600 " : "text-white"
            } normal-case text-xl`}
          >
            Real3D
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <Drawer />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
