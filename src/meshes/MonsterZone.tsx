import { useGLTF } from "@react-three/drei"

import { MonsterZoneGLBMapping } from "../types/MonsterZoneGLBMapping"

const MonsterZone = () => {
  const { nodes } = useGLTF(
    "./meshes/monster_zone.glb"
  ) as MonsterZoneGLBMapping

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload("./meshes/monster_zone.glb")

export default MonsterZone
