import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Herost from "./HeroSection/Herost";
import firstPict from "./assets/images/Enscape_2024-10-18-05-31-23.png";
import Anime from "./HeroSection/Anime";
import { motion } from "framer-motion"; // Import motion components from Framer Motion library
import Anime2 from "./HeroSection/Anime2"; // Import Anime2 component from "./Anime2"
import Nav from "./components/NavBar/Nav";
import Slider from "./AboutSection/Slider";
import ThreeD from "./components/3d_view/ThreeD.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div className="bg-white">
      <section id="NavBar" className="fixed w-full z-10 top-0">
        <Nav />
      </section>
      <div className="hero min-h-screen">
        <img
          src={firstPict}
          alt="First"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className=" text-5xl text-white font-bold">
              <Anime />
            </h1>
            <h1 className="mb-5 text-5xl text-white font-bold">
              <Anime2 />
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link
              activeClass="active"
              to="Hero"
              spy={true}
              smooth={true}
              offset={-10} // Adjust the offset if needed to account for your fixed header
              duration={400}
            >
              <div className="border p-4 w-auto rounded-3xl mt-5 text-xl text-white hover:bg-white hover:text-black hover:font-semibold focus:bg-white transition-all ease-in hover:bg-center">
                Get Started
              </div>
            </Link>
          </div>
        </div>
      </div>
      <section id="Hero">
        <Herost />
      </section>
      <div className="flex items-center justify-center h-full w-full"></div>

      <section id="Slider">
        <Slider />
      </section>

      <div id="Visuals">
        <ThreeD />
      </div>
      <div className=""></div>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
