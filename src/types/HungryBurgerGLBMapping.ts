import { Mesh, MeshStandardMaterial } from "three"
import { GLTF } from "three-stdlib"

export type HungryBurgerGLBMapping = GLTF & {
  nodes: {
    ["Object_2"]: Mesh
    ["Object_3"]: Mesh
    ["Object_4"]: Mesh
    ["Object_5"]: Mesh
    ["Object_6"]: Mesh
    ["Object_7"]: Mesh
    ["Object_8"]: Mesh
    ["Object_9"]: Mesh
    ["Object_10"]: Mesh
    ["Object_11"]: Mesh
  }
  materials: {
    ["material_0"]: MeshStandardMaterial
  }
}
