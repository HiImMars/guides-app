import React, { useRef, useState } from "react";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Knight from "../../../public/Knight";
import * as THREE from "three";

const RotatingWarrior = () => {
  const warriorRef = useRef<THREE.Group>(null);
  const [direction, setDirection] = useState(1);
  const [elapsedTime, setElapsedTime] = useState(0);

  useFrame((state, delta) => {
    if (warriorRef.current) {
      console.log(state);
      warriorRef.current.rotation.y += direction * delta * 0.05; // Adjust the speed as needed
      setElapsedTime((prevTime) => prevTime + delta);
      if (elapsedTime >= 10) {
        setDirection((prevDirection) => -prevDirection);
        setElapsedTime(0);
      }
    }
  });

  return (
    <Knight
      ref={warriorRef}
      scale={[0.015, 0.015, 0.015]}
      rotation={[0, -Math.PI / 10, 0]}
    />
  );
};

const Object: React.FC = () => {
  return (
    <>
      <Canvas className="hidden md:block">
        <ambientLight intensity={2} />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
          // autoRotate
          // autoRotateSpeed={0.8}
          makeDefault
          minPolarAngle={Math.PI / 2.32}
          maxPolarAngle={Math.PI / 2.32}
          minAzimuthAngle={-Math.PI / 5}
          maxAzimuthAngle={Math.PI / 4}
        />
        <Suspense fallback={null}>
          <RotatingWarrior />
        </Suspense>
        <Environment preset="sunset" />
        <ContactShadows
          position={[0, -0.1, 0]}
          opacity={0.8}
          scale={150}
          blur={0.3}
          far={10}
          resolution={256}
          color="#000"
        />
      </Canvas>
    </>
  );
};

export default Object;
