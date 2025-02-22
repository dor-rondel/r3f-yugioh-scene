import { Sparkles, Stars, useProgress } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { Vector3 } from "three"

import MilleniumPuzzle from "./meshes/MilleniumPuzzle"
import Text from "./meshes/Text"

type LoadingSceneProps = {
  onComplete: (completed: boolean) => void
}

const LoadingScene = ({ onComplete }: LoadingSceneProps) => {
  const { progress } = useProgress()
  const { width } = useThree((state) => state.viewport)

  useEffect(() => {
    if (progress >= 100) {
      onComplete(true)
    }
  }, [progress])

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

        <Text
          position={new Vector3(15, 3, 7)}
          scale={new Vector3(-0.5, 0.5, 0.5)}
          size={width / 9}
        >
          Loading Scene: {progress.toFixed(2)}%
        </Text>
        <MilleniumPuzzle position={new Vector3(0, -2, 0)} />
      </group>
    </group>
  )
}

export default LoadingScene
