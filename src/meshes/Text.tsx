import { Text3D, useMatcapTexture } from "@react-three/drei"
import { Euler, Vector3 } from "three"

type TextProps = {
  size: number
  children: React.ReactNode
  position: Vector3
  scale: Vector3
  rotation?: Euler
}

const Text = ({ size, position, scale, rotation, children }: TextProps) => {
  const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9")
  const isDevelopment = window.location.origin.includes("localhost")
  const fontUrlPath = isDevelopment ? "/" : "/r3f-yugioh-scene/"

  return (
    <Text3D
      position={position}
      scale={scale}
      size={size}
      rotation={rotation}
      font={`${fontUrlPath}font.json`}
      curveSegments={24}
      bevelSegments={1}
      bevelEnabled
      bevelSize={0.08}
      bevelThickness={0.03}
      height={1}
      lineHeight={0.9}
      letterSpacing={0.3}
    >
      {children}
      <meshMatcapMaterial color='white' matcap={matcapTexture} />
    </Text3D>
  )
}

export default Text
