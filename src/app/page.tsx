"use client"

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MacbookContainer } from "./_components/macbook-container";

export default function Home() {
  return (
    <Canvas>
      <OrbitControls />
      <MacbookContainer />
    </Canvas>
  );
}
