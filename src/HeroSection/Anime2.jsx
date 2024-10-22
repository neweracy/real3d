import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText2";
// import "./styles.css";

export default function Anime2() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [{ type: "heading1", text: "VISUALS" }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // Quick and dirt for the example
  return (
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate="visible"
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}
