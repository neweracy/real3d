import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Float, Stars } from "@react-three/drei";
import { Physics, useSphere, useBox } from "@react-three/cannon";
import * as THREE from "three";

// Invisible walls to keep balls in frame
const Walls = () => {
  useBox(() => ({ position: [0, -4, 0], args: [20, 1, 20], type: "Static" })); // Floor
  useBox(() => ({ position: [0, 4, 0], args: [20, 1, 20], type: "Static" })); // Ceiling
  useBox(() => ({ position: [-6, 0, 0], args: [1, 20, 20], type: "Static" })); // Left
  useBox(() => ({ position: [6, 0, 0], args: [1, 20, 20], type: "Static" })); // Right
  useBox(() => ({ position: [0, 0, -5], args: [20, 20, 1], type: "Static" })); // Back
  useBox(() => ({
    position: [0, 0, 5],
    args: [20, 20, 1],
    type: "Static",
    isTrigger: true,
  })); // Front (transparent)
  return null;
};

const InteractiveSphere = ({ position, color }) => {
  const [hovered, setHover] = useState(false);

  // Physics body
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position,
    args: [0.6],
    linearDamping: 0.5,
    angularDamping: 0.5,
  }));

  const handleClick = () => {
    // Apply a random impulse on click
    api.applyImpulse(
      [
        (Math.random() - 0.5) * 10,
        (Math.random() + 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ],
      [0, 0, 0]
    );
    api.angularVelocity.set(Math.random(), Math.random(), Math.random());
  };

  return (
    <mesh
      ref={ref}
      onClick={handleClick}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      castShadow
      receiveShadow
    >
      <icosahedronGeometry args={[0.6, 1]} />
      <meshStandardMaterial
        color={hovered ? "#EAB308" : color}
        wireframe={!hovered}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

const LoadingText = () => {
  const textRef = useRef();

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.elapsedTime) * 0.1 - 2;
    }
  });

  return (
    <Text
      ref={textRef}
      position={[0, -2, 0]}
      fontSize={0.4}
      color="#1F2937"
      font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
      anchorX="center"
      anchorY="middle"
    >
      CLICK TO LAUNCH
    </Text>
  );
};

const Scene = () => {
  // Generate random positions for spheres
  const spheres = useMemo(() => {
    return new Array(8).fill().map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 4,
        (Math.random() + 0.5) * 2,
        (Math.random() - 0.5) * 2,
      ],
      color: i % 2 === 0 ? "#1F2937" : "#CA8A04", // Theme colors
    }));
  }, []);

  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <Physics gravity={[0, -5, 0]}>
        <Walls />
        {spheres.map((props, i) => (
          <InteractiveSphere key={i} {...props} />
        ))}
      </Physics>

      <LoadingText />
    </>
  );
};

const Preloader = () => {
  return (
    <div className="w-full h-full bg-white">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} shadows>
        <Scene />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Preloader;
