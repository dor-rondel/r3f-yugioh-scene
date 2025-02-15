import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

import Scene from "./Scene"
import { OrbitControls, Sparkles, Stars } from "@react-three/drei"

const App = () => (
  <main>
    <Canvas camera={{ position: [0, 0, -2], fov: 65 }}>
      <color attach='background' args={[0xbbb]} />
      <group>
        <pointLight intensity={1} distance={100} color={0xffffff} />
        <ambientLight intensity={0.6} color='#dee2ff' />
      </group>
      <Suspense fallback={null}>
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
        <Scene />
      </Suspense>
      <OrbitControls
        enableZoom={true}
        autoRotate={true}
        autoRotateSpeed={-0.1}
        enablePan={true}
        zoomSpeed={0.15}
        dampingFactor={0.05}
      />
    </Canvas>
  </main>
)

export default App
