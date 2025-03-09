"use client"

import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MacbookContainer } from "./_components/macbook-container";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className=" absolute top-40 left-1/2 -translate-x-1/2 flex flex-col items-center font-(family-name:'Helvetica_Now_Display')">
        <h3 className="masked text-7xl tracking-tighter font-[700]">Macbook pro</h3>
        <div>
          <p className="text-lg text-gray-600 mt-4">
            Experience the unparalleled performance and stunning display of the
            latest MacBook Pro. Power your creativity with the M3 chip and immerse
            yourself in a world of limitless possibilities.
          </p>
        </div>
      </div>
      <Canvas camera={{ fov: 20, position: [0, -10, 220] }}>
        <Environment files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
        ]} />
        <ScrollControls pages={3}>
          <MacbookContainer />
        </ScrollControls >
      </Canvas>
    </div>
  );
}
