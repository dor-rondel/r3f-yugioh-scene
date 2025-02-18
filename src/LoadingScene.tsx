import {
  Sparkles,
  Stars,
  Text3D,
  useMatcapTexture,
  useProgress,
} from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { Vector3 } from "three"

import MilleniumPuzzle from "./meshes/MilleniumPuzzle"

const LoadingScene = () => {
  const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9")
  const { progress } = useProgress()

  const { width } = useThree((state) => state.viewport)

  const isDevelopment = window.location.origin.includes("localhost")
  const fontUrlPath = isDevelopment ? "/" : "/r3f-yugioh-scene/"

  return (
    <group>
      <Stars
        radius={100}
        depth={100}
        count={4000}
        factor={4}
        saturation={0}
        fade
        speed={0.2}
      />
      <Sparkles
        count={300}
        size={3}
        speed={0.02}
        opacity={1}
        scale={10}
        color='#fff3b0'
      />
      <group>
        <ambientLight color={0xfff} intensity={100} />
        <directionalLight position={[0, 5, 5]} intensity={1} castShadow />

        <pointLight
          position={[0, -5, 0]}
          intensity={2}
          castShadow
          color='white'
        />

        <pointLight position={[5, 5, 5]} intensity={1} color='white' />

        <Text3D
          position={[15, 3, 7]}
          scale={[-0.5, 0.5, 0.5]}
          size={width / 9}
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
          Loading Scene: {progress.toFixed(2)}%
          <meshMatcapMaterial color='white' matcap={matcapTexture} />
        </Text3D>
        <MilleniumPuzzle position={new Vector3(0, -2, 0)} />
      </group>
    </group>
  )
}

export default LoadingScene
