import { Mesh, MeshStandardMaterial } from "three"
import { GLTF } from "three-stdlib"

export type LinkuribohGLBMapping = GLTF & {
  nodes: {
    ["Object_4"]: Mesh
    ["Object_5"]: Mesh
    ["Object_6"]: Mesh
    ["Object_7"]: Mesh
    ["Object_8"]: Mesh
    ["Object_10"]: Mesh
    ["Object_11"]: Mesh
    ["Object_13"]: Mesh
    ["Object_15"]: Mesh
    ["Object_17"]: Mesh
    ["Object_19"]: Mesh
    ["Object_20"]: Mesh
  }
  materials: {
    ["base_black"]: MeshStandardMaterial
    ["real_white.001"]: MeshStandardMaterial
    material: MeshStandardMaterial
    green: MeshStandardMaterial
    light_blue: MeshStandardMaterial
    white: MeshStandardMaterial
    white_emmision: MeshStandardMaterial
  }
}
