import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./Nav.css";
import Drawer from "./Drawer";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add subtle background on scroll
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
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
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <div
        className={`navbar px-6 md:px-12 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-surface-light/95 backdrop-blur-sm shadow-sm py-2"
            : "bg-transparent py-6"
        }`}
        style={{ backfaceVisibility: "hidden", WebkitFontSmoothing: "antialiased" }}
      >
        <div className="flex-1">
          <a
            href="#"
            className={`text-2xl font-black tracking-tighter uppercase transition-colors duration-300 ${
              isScrolled ? "text-surface-dark" : "text-white"
            }`}
          >
            Real<span className="text-primary">3D</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Drawer isScrolled={isScrolled} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
