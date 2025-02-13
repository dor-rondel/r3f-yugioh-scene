import { Mesh, MeshStandardMaterial } from "three"
import { GLTF } from "three-stdlib"

export type MilleniumPuzzleGLBMapping = GLTF & {
  nodes: {
    pyramid_gold_0: Mesh
    Eye_gold_0: Mesh
    Torus001_gold_0: Mesh
  }
  materials: {
    gold: MeshStandardMaterial
  }
}
