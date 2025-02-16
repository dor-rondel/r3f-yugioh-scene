import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"

import LoadingScene from "./LoadingScene"

const App = () => (
  <main>
    <Canvas camera={{ position: [0, 0, -10], fov: 65 }}>
      <color attach='background' args={[0xfff]} />
      <Suspense fallback={null}>
        <LoadingScene />
      </Suspense>
      {/* <OrbitControls
        enableZoom={true}
        autoRotate={true}
        autoRotateSpeed={-0.1}
        enablePan={true}
        zoomSpeed={0.15}
        dampingFactor={0.05}
      /> */}
    </Canvas>
  </main>
)

export default App
