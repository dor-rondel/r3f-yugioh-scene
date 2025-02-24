import { Euler, Vector3 } from "three"
import { useThree } from "@react-three/fiber"
import { useEffect, useState } from "react"

import BlackDragonsChick from "./meshes/BlackDragonsChick"
import HungryBurger from "./meshes/HungryBurger"
import Gaia from "./meshes/Gaia"
import Linkuriboh from "./meshes/Linkuriboh"
import MeteorBlackDragon from "./meshes/MeteorBlackDragon"
import MonsterZone from "./meshes/MonsterZone"
import RocketWarrior from "./meshes/RocketWarrior"
import Text from "./meshes/Text"
import { OrbitControls } from "@react-three/drei"
import MilleniumPuzzle from "./meshes/MilleniumPuzzle"
import { handleDuelStateChange } from "./util/attack"

const BoardScene = () => {
  const { camera } = useThree()
  const { width } = useThree((state) => state.viewport)

  const [sceneInitiated, setSceneInitiated] = useState<boolean>(false)
  const [isAttacking, setIsAttacking] = useState<boolean>(false)
  const [animationState, setAnimationState] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const [duelState, setDuelState] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    true,
    true,
  ])

  const duelEnded =
    !(duelState[0] || duelState[1] || duelState[2]) ||
    !(duelState[3] || duelState[4] || duelState[5])

  useEffect(() => {
    if (!duelEnded) camera.position.set(-140, 40, -100)

    if (duelEnded) {
      camera.position.set(0, 0, -10)
      camera.rotation.set(0, 3.14, 0)
    }
  }, [duelEnded])

  const handleClick = (index: number) => {
    if (isAttacking) return
    setIsAttacking(true)
    if (!sceneInitiated) {
      setSceneInitiated(true)
    }

    const newState = [...animationState]
    newState[index] = true
    setAnimationState(newState)

    setTimeout(() => {
      setAnimationState([false, false, false, false, false, false])
      setIsAttacking(false)
      setDuelState(handleDuelStateChange(index, duelState))
    }, 6000)
  }

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
      {!sceneInitiated && (
        <Text
          position={new Vector3(100, 40, -30)}
          scale={new Vector3(-0.5, 0.5, 0.5)}
          size={width / 1.35}
          rotation={new Euler(0, 1000, 0)}
          onClick={() => setSceneInitiated(true)}
        >
          Click on a Monster to Attack
        </Text>
      )}
      {!duelEnded && (
        <group>
          <MonsterZone position={new Vector3(0, -100, 300)} />
          <MonsterZone
            position={new Vector3(300, -100, 0)}
            rotation={new Euler(0, 600, 0)}
          />
          {duelState[0] && (
            <BlackDragonsChick
              position={new Vector3(150, -55, 250)}
              scale={new Vector3(20, 20, 20)}
              rotation={new Euler(0, 15, 0)}
              onClick={() => handleClick(0)}
              animate={animationState[0]}
            />
          )}
          {duelState[1] && (
            <Gaia
              position={new Vector3(250, -55, 250)}
              scale={new Vector3(5, 5, 5)}
              animate={animationState[1]}
              onClick={() => handleClick(1)}
            />
          )}
          {duelState[2] && (
            <RocketWarrior
              position={new Vector3(30, -55, 250)}
              scale={new Vector3(15, 15, 15)}
              rotation={new Euler(0, 9.5, 0)}
              onClick={() => handleClick(2)}
              animate={animationState[2]}
            />
          )}
          {duelState[3] && (
            <HungryBurger
              position={new Vector3(45, -60, 30)}
              scale={new Vector3(10, 10, 10)}
              animate={animationState[3]}
              onClick={() => handleClick(3)}
            />
          )}
          {duelState[4] && (
            <Linkuriboh
              position={new Vector3(150, -60, 30)}
              scale={new Vector3(15, 15, 15)}
              onClick={() => handleClick(4)}
              animate={animationState[4]}
            />
          )}
          {duelState[5] && (
            <MeteorBlackDragon
              position={new Vector3(250, -40, 30)}
              scale={new Vector3(15, 15, 15)}
              rotation={new Euler(0, 9.5, 0)}
              animate={animationState[5]}
              onClick={() => handleClick(5)}
            />
          )}
        </group>
      )}
      {duelEnded && (
        <group>
          <Text
            position={new Vector3(15, 3, 7)}
            scale={new Vector3(-0.5, 0.5, 0.5)}
            size={width / 9}
          >
            Thank you for dueling
          </Text>
          <MilleniumPuzzle position={new Vector3(0, -2, 0)} />
        </group>
      )}
      {!duelEnded && (
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          zoomSpeed={0.15}
          dampingFactor={0.05}
          autoRotate={true}
          autoRotateSpeed={-0.1}
        />
      )}
    </group>
  )
}

export default BoardScene
