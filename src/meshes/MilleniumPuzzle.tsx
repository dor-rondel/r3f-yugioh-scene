import { useGLTF } from "@react-three/drei"

import { MilleniumPuzzleGLBMapping } from "../types/MilleniumPuzzleGLBMapping"

const MilleniumPuzzle = () => {
  const { nodes, materials } = useGLTF(
    "./meshes/millennium_puzzle.glb"
  ) as MilleniumPuzzleGLBMapping
  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pyramid_gold_0.geometry}
              material={materials.gold}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Eye_gold_0.geometry}
              material={materials.gold}
              position={[1.648, -0.017, -0.023]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Torus001_gold_0.geometry}
              material={materials.gold}
              position={[-0.026, -0.017, 1.443]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("./meshes/millennium_puzzle.glb")

export default MilleniumPuzzle
