import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Warrior from "../../../public/Warrior";

const Object: React.FC = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={2} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Warrior scale={[3, 3, 3]} />
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
