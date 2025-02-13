import { ObjectMap } from "@react-three/fiber"
import { BufferGeometry, MeshStandardMaterial } from "three"
import { GLTF } from "three-stdlib"

export type MonsterZoneGLBMapping = GLTF &
  ObjectMap & {
    nodes: {
      mesh_0: {
        geometry: BufferGeometry
        material: MeshStandardMaterial
      }
    }
  }
