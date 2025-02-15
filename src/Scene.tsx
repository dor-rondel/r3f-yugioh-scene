import { Text3D, useMatcapTexture } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

const Scene = () => {
  const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9")

  const { width } = useThree((state) => state.viewport)

  return (
    <Text3D
      position={[12, 0, 7]}
      scale={[-1, 2, 0.5]}
      size={width / 9}
      font='/font.json'
      curveSegments={24}
      bevelSegments={1}
      bevelEnabled
      bevelSize={0.08}
      bevelThickness={0.03}
      height={1}
      lineHeight={0.9}
      letterSpacing={0.3}
    >
      Yu-GI-OH! Scene
      <meshMatcapMaterial color='white' matcap={matcapTexture} />
    </Text3D>
  )
}

export default Scene
