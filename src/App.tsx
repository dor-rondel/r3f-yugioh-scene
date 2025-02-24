import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"

import LoadingScene from "./LoadingScene"
import BoardScene from "./BoardScene"
import { Vector3 } from "three"

const App = () => {
  const [sceneLoaded, setSceneLoaded] = useState<boolean>(false)

  return (
    <main>
      <Canvas
        camera={{
          position: new Vector3(0, 0, -10),
          fov: 65,
        }}
      >
        <color attach='background' args={[sceneLoaded ? 0x65bfda : 0x000000]} />
        <Suspense fallback={<LoadingScene onComplete={setSceneLoaded} />}>
          <BoardScene />
        </Suspense>
      </Canvas>
    </main>
  )
}

export default App
