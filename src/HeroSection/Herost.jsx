// Import necessary modules and components
import React, { useState } from "react";
import "./Herost.css"; // Import CSS styles
import { motion } from "framer-motion"; // Import motion components from Framer Motion library
import bisko from "../assets/images/hero.jpeg"; // Import an image
import Anime from "./Anime"; // Import Anime component from "./Anime"
import Anime2 from "./Anime2"; // Import Anime2 component from "./Anime2"

// Define the Herost functional component
const Herost = () => {
  // Return the JSX content
  return (
    <div className="body">
      {/* Start of the section */}
      <section class="px-3  py-5  lg:py-10">
        {/* Grid container with two columns for layout */}
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-4">
          {/* Left column */}
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center overflow-hidden">
            {/* Motion-animated paragraph using Anime component */}
            <motion.p className="text-4xl font-bold md:text-7xl text-yellow-500 m-0">
              <Anime />
            </motion.p>
            {/* Motion-animated paragraph using Anime2 component */}
            <p className="text-4xl font-bold md:text-7xl m-0 text-black  ">
              <Anime2 />
            </p>

            <p className="text-sm md:text-lg  w-36 lg:w-96 md:w-56 mb-2 text-gray-600">
              Neweracy
            </p>
            {/* Button with motion animation */}
            <div className=" mt-2 grid items-center justify-center grid-cols-7 lg:grid-cols-7 md:grid-cols-7 gap-2  "></div>
          </div>
          {/* Right column */}
          <div className="order-3 lg:order-2 ">
            {/* Motion-animated image */}
            <motion.img
              className="h-80 w-80 object-cover  rounded-md lg:w-[500px] lg:h-[500px]  border-b-2 shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.9,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              src={bisko}
              alt=""
            />
          </div>
        </div>

        {/* Empty div */}
        <div className=""></div>
        <p className="text-sm md:text-lg self-center border-b-2  lg:mt-24 mt-14 text-gray-600"></p>
        <div className="lg:mt-28 mt-14 px-8 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          deserunt. Quisquam sunt, doloribus eligendi unde dignissimos eius ex
          voluptas doloremque enim vitae sapiente sint dolore mollitia quod
          illum dicta quia?ÍLorem ipsum dolor sit amet consectetur adipisicing
          elit. Maiores corrupti voluptate magnam, aliquid autem recusandae in
          id eligendi, soluta ipsa sint nesciunt, eius aut. Ipsam laborum nisi
          id deserunt labore.
        </div>
        <p className="text-sm md:text-lg self-center border-b-2   lg:mt-28 mt-14 lg:mb-6 text-gray-600"></p>
      </section>

      {/* End of section */}
    </div>
  );
};

// Export the Herost component as the default export
export default Herost;
