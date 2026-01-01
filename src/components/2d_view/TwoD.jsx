import React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Box, OrbitControls, Stage } from "@react-three/drei";
import { useViewportScroll, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bisko from "./2d_image.png";

// import Model from "./Model";

const TwoD = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-12 items-center">
      {/* Image Side */}
      <div className="lg:col-span-7 order-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-primary translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-4 -z-10" />
          <img
            src={bisko}
            alt="2D Blueprint"
            className="w-full h-auto object-cover border border-surface-dark/10 shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>

      {/* Content Side */}
      <div className="lg:col-span-5 order-2">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-surface-muted text-surface-dark flex items-center justify-center font-bold text-xl border border-surface-dark/10">
              2D
            </div>
            <h3 className="text-3xl font-bold text-surface-dark">
              Architectural Drafting
            </h3>
          </div>

          <p className="text-text-muted text-lg leading-relaxed">
            Every masterpiece begins with a line. Our high-precision 2D drafts
            serve as the foundational blueprint, ensuring structural accuracy
            and spatial logic before any 3D modeling begins.
          </p>

          <ul className="space-y-3 text-text-main font-medium">
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span> Floor Plan Analysis
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span> Structural Integrity Check
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span> Spatial Flow Optimization
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default TwoD;
