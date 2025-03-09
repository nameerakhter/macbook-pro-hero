import { useGLTF } from "@react-three/drei"

export function MacbookContainer() {
  let model = useGLTF("./mac.glb")
  console.log(model)
  return (
    <group position={[0, -10, 20]} >
      <primitive object={model.scene} />
    </group>
  )
}
