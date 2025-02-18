import { useGLTF } from "@react-three/drei"

import { MonsterZoneGLBMapping } from "../types/MonsterZoneGLBMapping"
import { GenericMeshProps } from "../types/GenericMeshProps"

const MonsterZone = ({ position, ...props }: GenericMeshProps) => {
  const { nodes } = useGLTF(
    "./meshes/monster_zone.glb"
  ) as MonsterZoneGLBMapping

  return (
    <group position={position} {...props}>
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
