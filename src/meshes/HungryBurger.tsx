import { useGLTF } from "@react-three/drei"
import { Group } from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

import { HungryBurgerGLBMapping } from "../types/HungryBurgerGLBMapping"
import { GenericMeshProps } from "../types/GenericMeshProps"

const HungryBurger = ({ position, animate, ...props }: GenericMeshProps) => {
  const { nodes, materials } = useGLTF(
    "./meshes/hungry_burger.glb"
  ) as HungryBurgerGLBMapping

  const groupRef = useRef<Group>(null)

  useFrame(() => {
    if (groupRef.current && animate) {
      groupRef.current.position.z += 0.5
    }
  })

  return (
    <group dispose={null} position={position} ref={groupRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  )
}

useGLTF.preload("./meshes/hungry_burger.glb")

export default HungryBurger
