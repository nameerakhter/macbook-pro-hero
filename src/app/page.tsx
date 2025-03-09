"use client"

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MacbookContainer } from "./_components/macbook-container";

export default function Home() {
  return (
    <Canvas camera={{ fov: 20, position: [0, -10, 220] }}>
      <OrbitControls />
      <Environment files={[
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
      ]} />
      <MacbookContainer />
    </Canvas>
  );
}
