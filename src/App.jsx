import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Herost from "./HeroSection/Herost";
import firstPict from "./assets/images/house6.png";
import Anime from "./HeroSection/Anime";
import { motion } from "framer-motion"; // Import motion components from Framer Motion library
import Anime2 from "./HeroSection/Anime2"; // Import Anime2 component from "./Anime2"
import Nav from "./components/NavBar/Nav";
import Slider from "./AboutSection/Slider";
import ThreeD from "./components/3d_view/ThreeD.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Link, animateScroll as scroll } from "react-scroll";
import Pre from "./components/Preloader.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 6000);
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <div className="bg-white">
          <section id="NavBar" className="fixed w-full z-10 top-0">
            <Nav />
          </section>
          <div className="relative min-h-screen w-full overflow-hidden bg-surface-dark flex items-center justify-center">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
              <img
                src={firstPict}
                alt="Architectural Detail"
                className="w-full h-full object-cover opacity-40 grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/80 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-20">
              {/* Typography & Brand */}
              <div className="lg:col-span-8 flex flex-col items-start space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center space-x-4"
                >
                  <div className="h-[2px] w-12 bg-primary-light" />
                  <span className="text-primary-light font-mono tracking-widest text-sm uppercase">
                    Architectural Visualization
                  </span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter">
                  <span className="block overflow-hidden">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="block"
                    >
                      REALITY
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-white/80">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="block"
                    >
                      REDEFINED
                    </motion.span>
                  </span>
                </h1>
              </div>

              {/* Call to Action & Context */}
              <div className="lg:col-span-4 flex flex-col justify-end space-y-8 border-l border-white/10 pl-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-gray-400 text-lg leading-relaxed max-w-sm"
                >
                  Experience spaces before they exist. We bridge the gap between
                  imagination and reality with hyper-realistic 3D rendering.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link
                    activeClass="active"
                    to="Hero"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={800}
                    className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-surface-dark transition-all duration-300 bg-primary-light rounded-none hover:bg-white focus:outline-none focus:ring focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-surface-dark"
                  >
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                    <span className="relative flex items-center gap-3">
                      EXPLORE PROJECTS
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </motion.div>
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
      ) : (
        <div className=" h-screen w-screen bg-white flex justify-center items-center flex-col">
          <div className="text-black text-center p-10">
            <p className="">
              Play around with the ball <span className="text-xl">🌚😳😳</span>
            </p>
          </div>
          <Pre />
        </div>
      )}
    </div>
  );
}

export default App;
