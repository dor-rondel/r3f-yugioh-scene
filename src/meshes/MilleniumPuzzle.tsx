import { useGLTF } from "@react-three/drei"
import { Group, Vector3 } from "three"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

import { MilleniumPuzzleGLBMapping } from "../types/MilleniumPuzzleGLBMapping"

type MilleniumPuzzleProps = {
  position: Vector3
}

const MilleniumPuzzle = ({ position }: MilleniumPuzzleProps) => {
  const { nodes, materials } = useGLTF(
    "./meshes/millennium_puzzle.glb"
  ) as MilleniumPuzzleGLBMapping

  const groupRef = useRef<Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.03
    }
  })

  return (
    <group dispose={null} position={position} ref={groupRef}>
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
