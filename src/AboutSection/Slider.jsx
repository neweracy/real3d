import React from "react";
import { useViewportScroll, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Slider.css";
import slider1 from "../assets/images/Enscape_2024-10-18-05-28-12.png";
import slider2 from "../assets/images/Enscape_2024-10-18-05-32-47.png";
import slider3 from "../assets/images/Enscape_2024-10-18-05-33-57.png";
import divider from "../assets/images/divider.png";
import h from './pattern-png-transparent-4.png'

const Slider = () => {
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

  return (
    <div
      className=" bg-slate-100 bg-fixed bg-cover bg-no-repeat flex h-auto justify-center items-center w-full"
      style={{ backgroundImage: `url(${h})` }}
    >
      <div className="body">
        
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="">
            <div className="carousel carousel-center max-w-md  py-4 my-4 space-x-4 bg-trueGray-800 rounded-box">
              <div className="carousel-item">
                <img
                  src={slider1}
                  className="rounded-box object-cover h-80 w-70 lg:w-[400px] lg:h-[450px] max-sm:w-[250px] max-sm:h-[300px] md:w-[200px] md:h-[300px]"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={slider3}
                  className="rounded-box h-80 w-70 object-cover lg:w-[400px] lg:h-[450px] max-sm:w-[250px] max-sm:h-[300px] md:w-[200px] md:h-[300px]"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={slider2}
                  className="rounded-box h-80 w-70 object-cover lg:w-[400px] lg:h-[450px] max-sm:w-[250px] max-sm:h-[300px] md:w-[200px] md:h-[300px]"
                />
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center text-center">
            <h1 className=" pr-5 text-black ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident quisquam dicta dolor! Voluptatum voluptatibus harum iure
              ea temporibus delectus nostrum illo hic qui! Vitae voluptate
              molestiae illum iusto sequi reprehenderit?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
