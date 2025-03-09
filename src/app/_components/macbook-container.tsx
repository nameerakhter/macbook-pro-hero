import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'

type GLTFResult = GLTF & {
  nodes: {
    screen: THREE.Mesh
    matte: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function MacbookContainer() {
  //@ts-ignore
  let model = useGLTF('./mac.glb') as GLTF as GLTFResult
  let texture = useTexture('./red.jpg')
  let meshes: { [name: string]: THREE.Object3D } = {}
  model.scene.traverse((e: THREE.Object3D) => {
    meshes[e.name] = e
  })

  const screen = meshes['screen'] as THREE.Mesh
  const matte = meshes['matte'] as THREE.Mesh

  screen.rotation.x = THREE.MathUtils.degToRad(180)
  if (matte && matte.material instanceof THREE.MeshStandardMaterial) {
    matte.material.map = texture
    matte.material.emissiveIntensity = 0
    matte.material.metalness = 0
    matte.material.roughness = 1
  }
  let data = useScroll()
  useFrame(() => {
    screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90)
  })
  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  )
}
