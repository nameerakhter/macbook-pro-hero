'use client'

import { Environment, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { MacbookContainer } from './_components/macbook-container'

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="font-(family-name:'Helvetica_Now_Display') absolute top-40 left-1/2 flex -translate-x-1/2 flex-col items-center">
        <h3 className="masked text-7xl font-[700] tracking-tighter">
          Macbook pro
        </h3>
        <div>
          <p className="mt-4 text-lg text-gray-600">
            Experience the unparalleled performance and stunning display of the
            latest MacBook Pro. Power your creativity with the M3 chip and
            immerse yourself in a world of limitless possibilities.
          </p>
        </div>
      </div>
      <Canvas camera={{ fov: 20, position: [0, -10, 220] }}>
        <Environment
          files={[
            'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr',
          ]}
        />
        <ScrollControls pages={3}>
          <MacbookContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}
