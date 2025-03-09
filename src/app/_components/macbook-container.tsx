import { useGLTF } from "@react-three/drei"

export function MacbookContainer() {
  let model = useGLTF("./mac.glb")
  console.log(model)
  return (
    <primitive object={model.scene} />
  )
}
