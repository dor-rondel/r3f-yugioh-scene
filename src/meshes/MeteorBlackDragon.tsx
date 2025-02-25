import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { Group } from "three"
import { useFrame } from "@react-three/fiber"

import { MeteorDragonGLBMapping } from "../types/MeteorDragonGLBMapping"
import { GenericMeshProps } from "../types/GenericMeshProps"

const MeteorBlackDragon = ({
  position,
  animate,
  ...props
}: GenericMeshProps) => {
  const { nodes, materials } = useGLTF(
    "./meshes/meteor_black_dragon.glb"
  ) as MeteorDragonGLBMapping

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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  )
}

useGLTF.preload("./meshes/meteor_black_dragon.glb")

export default MeteorBlackDragon
