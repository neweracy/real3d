import React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Box, OrbitControls, Stage } from "@react-three/drei";
import { useViewportScroll, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TwoD from "../2d_view/TwoD";

// import Model from "./Model";

const ThreeD = () => {
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
      <div className="h-auto w-auto px-10 flex justify-center  text-center flex-col mt-14 mb-8 uppercase">
        <motion.span
          ref={ref}
          className="text-xl sm:text-xl lg:text-3xl md:text-2xl font-bold text-yellow-500 m-1"
          initial={{ opacity: 0, y: 20 }} // Initial style
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Animation based on inView status
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          Visuals
          <p className="text-sm md:text-lg self-center border-b-2   lg:mt-16 mt-8 lg:mb-6 text-gray-600"></p>
        </motion.span>
      </div>
      <section class="px-3  py-5  lg:py-10">
        <div className=" text-center mb-12 lg:mb-28 lg:px-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellat
          adipisci in fugiat, non hic harum officiis necessitatibus omnis
          dignissimos dolore vel. Quasi adipisci amet fugit! Nihil quibusdam
          aliquam molestiae? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Animi, corrupti. Corporis nemo tempore doloribus labore facilis,
          a vel libero, et laudantium explicabo expedita. Ab voluptatum saepe
          ratione assumenda quasi explicabo.
        </div>
        <div className="">
          <TwoD />
        </div>
        {/* Grid container with two columns for layout */}

        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-2">
          {/* Left column */}
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center overflow-hidden">
            {/* Motion-animated paragraph using Anime component */}

            {/* Motion-animated paragraph using Anime2 component */}
            <p className="text-xl font-bold md:text-xl m-0 text-gray-700  ">
              3D VISUAL
            </p>
            <p className="text-center mt-4 mb-6 lg:mb-0 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              unde, quo totam earum vitae soluta numquam officiis saepe eaque
              nam! Officia tempore iusto quas neque enim facere eius iure
              itaque?
            </p>

            {/* Button with motion animation */}
            <div className=" mt-2 grid items-center justify-center grid-cols-7 lg:grid-cols-7 md:grid-cols-7 gap-0.5  "></div>
          </div>
          {/* Right column */}
          <div className="order-3 lg:order-2  grid grid-cols-1 w-full  sm:w-full md:w-auto lg:w-full">
            {/* Motion-animated image */}
            <iframe
              src="https://embed-3dwarehouse.sketchup.com/embed/801817de-d266-4ba4-a858-ea11e1ce3119?token=iujfBmhzGhs=&binaryName=s21"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              allowfullscreen
              className=" h-96 w-full sm:w-full col-span-1  object-cover  rounded-xl  md:w-[700px] md:h-[600px] lg:w-full lg:h-[700px] xl:w-[800px] xl:h-[800px]  border-b-2 shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Empty div */}
        <div className=""></div>
      </section>
    </>
  );
};

export default ThreeD;
