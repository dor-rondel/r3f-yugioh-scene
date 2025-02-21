import { useGLTF } from "@react-three/drei"

import { LinkuribohGLBMapping } from "../types/LinkuribohGLBMapping"
import { GenericMeshProps } from "../types/GenericMeshProps"

const Linkuriboh = ({ position, ...props }: GenericMeshProps) => {
  const { nodes, materials } = useGLTF(
    "./meshes/linkuriboh.glb"
  ) as LinkuribohGLBMapping
  return (
    <group dispose={null} position={position} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.292}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.base_black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["real_white.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.light_blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.base_black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.light_blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.base_black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.light_blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials.white_emmision}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.material}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("./meshes/linkuriboh.glb")

export default Linkuriboh
