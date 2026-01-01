import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Stage,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TwoD from "../2d_view/TwoD";
import House from "../../../public/House";

const ThreeD = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className="bg-surface-light text-text-main py-20 lg:py-32 overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Process & Output
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-surface-dark mb-6">
            VISUALIZATION{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              WORKFLOW
            </span>
          </h2>
          <div className="h-1 w-24 bg-primary mb-8" />
          <p className="max-w-2xl text-lg text-text-muted leading-relaxed">
            From precise 2D drafting to hyper-realistic 3D rendering. We
            transform conceptual blueprints into immersive spatial experiences.
          </p>
        </motion.div>
      </div>

      {/* 2D Section Integration */}
      <div className="container mx-auto px-6 md:px-12 mb-24">
        <TwoD />
      </div>

      {/* 3D Interactive Section */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* 3D Context & Instructions */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-surface-dark text-white flex items-center justify-center font-bold text-xl">
                  3D
                </div>
                <h3 className="text-3xl font-bold text-surface-dark">
                  Interactive Model
                </h3>
              </div>

              <p className="text-text-muted text-lg leading-relaxed">
                Experience the spatial volume and architectural details in
                real-time. Rotate, zoom, and explore the structure from every
                angle to understand the design intent.
              </p>

              <div className="bg-surface-muted p-6 border-l-4 border-primary">
                <h4 className="font-bold text-surface-dark mb-2 uppercase text-sm tracking-wide">
                  How to Interact
                </h4>
                <ul className="space-y-2 text-sm text-text-muted font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" /> Left
                    Click + Drag to Rotate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" /> Scroll
                    to Zoom In/Out
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" /> Right
                    Click to Pan
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* 3D Canvas Viewport */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-square lg:aspect-[4/3] bg-surface-muted rounded-sm overflow-hidden shadow-2xl border border-surface-dark/10 group flex flex-col"
              onMouseEnter={() => setIsInteracting(true)}
              onMouseLeave={() => setIsInteracting(false)}
            >
              {/* Header Bar */}
              <div className="h-10 bg-surface-light border-b border-surface-dark/5 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                  Model_View_01.obj
                </div>
                <div className="w-4" /> {/* Spacer */}
              </div>

              {/* Interaction Hint Overlay */}
              <div
                className={`absolute inset-0 top-10 z-10 pointer-events-none flex items-center justify-center transition-all duration-500 ${
                  isInteracting
                    ? "opacity-0 scale-110"
                    : "opacity-100 scale-100"
                }`}
              >
                <div className="bg-surface-dark/90 backdrop-blur-md text-white px-8 py-4 rounded-full font-mono text-sm tracking-widest uppercase flex items-center gap-4 shadow-xl border border-white/10">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  Click to Interact
                </div>
              </div>

              {/* Canvas Container */}
              <div className="flex-1 relative bg-gradient-to-b from-surface-muted to-white">
                <Canvas
                  camera={{ position: [8, 6, 8], fov: 45 }}
                  shadows
                  dpr={[1, 2]}
                >
                  <Suspense fallback={null}>
                    <Environment preset="city" />
                    <ambientLight intensity={0.6} />
                    <spotLight
                      position={[10, 15, 10]}
                      angle={0.2}
                      penumbra={1}
                      shadow-mapSize={2048}
                      castShadow
                      intensity={1.5}
                    />
                    <ContactShadows
                      resolution={1024}
                      scale={20}
                      blur={2}
                      opacity={0.25}
                      far={10}
                      color="#000000"
                    />

                    <Stage
                      environment="city"
                      intensity={0.5}
                      contactShadow={false}
                    >
                      <House />
                    </Stage>

                    <OrbitControls
                      autoRotate={!isInteracting}
                      autoRotateSpeed={0.8}
                      enableZoom={true}
                      makeDefault
                      minPolarAngle={0}
                      maxPolarAngle={Math.PI / 2.1}
                    />
                  </Suspense>
                </Canvas>
              </div>

              {/* Bottom Toolbar */}
              <div className="h-12 bg-surface-light border-t border-surface-dark/5 flex items-center justify-between px-6 text-text-muted">
                <div className="flex items-center gap-6 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span>ROTATE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    <span>ZOOM</span>
                  </div>
                </div>
                <div className="text-xs font-bold text-primary">
                  LIVE RENDER
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeD;
