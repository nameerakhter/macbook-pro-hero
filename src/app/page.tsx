'use client'

import { Environment, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { MacbookContainer } from './_components/macbook-container'

const products = ['MacBook Pro', 'iPhone', 'iPad', 'Apple Watch', 'AirPods']

export default function Home() {
  return (
    <div className="font-(family-name:'Helvetica_Now_Display') h-screen w-full">
      <nav className="absolute top-0 left-0 w-full py-10">
        <ul className="flex justify-center space-x-4">
          {products.map((product) => (
            <li key={product} className="font-[400] text-white">
              {product}
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute top-40 left-1/2 flex -translate-x-1/2 flex-col items-center px-4 text-center md:px-0">
        <h3 className="masked text-7xl font-[700] tracking-tighter">
          Macbook pro
        </h3>
        <div>
          <p className="mx-auto mt-4 max-w-lg text-lg text-gray-600">
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
