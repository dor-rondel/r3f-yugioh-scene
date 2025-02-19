import { Euler, Vector3 } from "three"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"

import BlackDragonsChick from "./meshes/BlackDragonsChick"
import HungryBurger from "./meshes/HungryBurger"
import Gaia from "./meshes/Gaia"
import Linkuriboh from "./meshes/Linkuriboh"
import MeteorBlackDragon from "./meshes/MeteorBlackDragon"
import MonsterZone from "./meshes/MonsterZone"
import RocketWarrior from "./meshes/RocketWarrior"

const BoardScene = () => {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(-140, 40, -100)
  }, [])

  return (
    <group>
      <group>
        <ambientLight color={0xfff} intensity={100} />
        <directionalLight position={[0, 5, 5]} intensity={1} castShadow />

        <pointLight
          position={[0, -5, 0]}
          intensity={2}
          castShadow
          color='white'
        />

        <pointLight position={[5, 5, 5]} intensity={1} color='white' />
      </group>
      <group>
        <MonsterZone position={new Vector3(0, -50, 300)} />
        <MonsterZone
          position={new Vector3(300, -50, 0)}
          rotation={new Euler(0, 600, 0)}
        />
        <BlackDragonsChick
          position={new Vector3(150, -5, 250)}
          scale={new Vector3(20, 20, 20)}
          rotation={new Euler(0, 15, 0)}
        />
        <Gaia
          position={new Vector3(250, -5, 250)}
          scale={new Vector3(5, 5, 5)}
        />
        <RocketWarrior
          position={new Vector3(30, -5, 250)}
          scale={new Vector3(15, 15, 15)}
          rotation={new Euler(0, 9.5, 0)}
        />

        <HungryBurger
          position={new Vector3(45, -10, 30)}
          scale={new Vector3(10, 10, 10)}
        />
        <Linkuriboh
          position={new Vector3(150, -10, 30)}
          scale={new Vector3(15, 15, 15)}
        />
        <MeteorBlackDragon
          position={new Vector3(250, 10, 30)}
          scale={new Vector3(15, 15, 15)}
          rotation={new Euler(0, 9.5, 0)}
        />
      </group>
    </group>
  )
}

export default BoardScene
