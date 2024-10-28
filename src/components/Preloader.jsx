import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, Html } from "@react-three/drei";
import Earth from '../../public/Earth'

const Scene = () => {
  const boxRef = useRef();
  useFrame((state, delta) => {
    boxRef.current.rotation.y += 0.02;
  });

  return (
    <>
      <Sphere ref={boxRef} args={[0.4, 25, 18]} rotation={[0.5, 0, 0]}>
        <meshBasicMaterial color={"black"} wireframe />
      </Sphere>
     
    </>
  );
};

const App = () => {
  return (
    <>
      <Canvas camera={{ fov: 70, position: [0, 0, 3] }}>
        <OrbitControls />
        <Scene />
        <ambientLight />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      
    </>
  );
};

export default App;
