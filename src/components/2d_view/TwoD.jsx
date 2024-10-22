import React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Box, OrbitControls, Stage } from "@react-three/drei";
import { useViewportScroll, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bisko from "./top.png";

// import Model from "./Model";

const TwoD = () => {
  const { scrollY } = useViewportScroll();
  const sectionRefs = Array.from({ length: 2 }, () => React.useRef(null)); // Array of refs for sections
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });
  const controlsArray = sectionRefs.map(() => useAnimation()); // Array of animation controls

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  };

  React.useEffect(() => {
    const handleScroll = () => {
      controlsArray.forEach((controls, index) => {
        const sectionRef = sectionRefs[index].current;
        if (sectionRef && isElementInViewport(sectionRef)) {
          controls.start({ scale: 1.1 });
        } else {
          controls.start({ scale: 1 });
        }
      });
    };

    scrollY.onChange(() => handleScroll());

    return () => {
      scrollY.onChange(() => {});
    };
  }, [controlsArray, scrollY]);

  const widths = window.innerWidth;
  return (
    <>
      <section class="px-3  py-5  lg:py-10">
        {/* Grid container with two columns for layout */}

        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-2">
          {/* Left column */}
          <div className="order-2 lg:order-2 flex flex-col justify-center items-center overflow-hidden">
            {/* Motion-animated paragraph using Anime component */}

            {/* Motion-animated paragraph using Anime2 component */}
            <p className="text-xl font-bold md:text-xl m-0 text-gray-700  ">
              2D VISUAL
            </p>
            <p className="text-center mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              unde, quo totam earum vitae soluta numquam officiis saepe eaque
             
            </p>

            {/* Button with motion animation */}
            <div className=" mt-2 grid items-center justify-center grid-cols-7 lg:grid-cols-7 md:grid-cols-7 gap-0.5  "></div>
          </div>
          {/* Right column */}
          <div className="order-3 lg:order-1  grid grid-cols-1 w-full  sm:w-full md:w-auto lg:w-full">
            {/* Motion-animated image */}
            <img
              className=" h-96 w-full sm:w-full col-span-1  object-cover    md:w-[700px] md:h-[600px] lg:w-full lg:h-[700px] xl:w-[800px] xl:h-[800px]  "
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
      </section>
    </>
  );
};

export default TwoD;
