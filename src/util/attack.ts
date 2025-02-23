const handleChickAttack = (duelState: boolean[]) => {
  const newState = [...duelState]
  if (duelState[4]) {
    newState[4] = false
    return newState
  }

  if (duelState[3]) {
    newState[3] = false
    return newState
  }

  if (duelState[5]) {
    newState[5] = false
    return newState
  }

  return newState
}

const handleGaiaAttack = (duelState: boolean[]) => {
  const newState = [...duelState]
  if (duelState[5]) {
    newState[5] = false
    return newState
  }

  if (duelState[3]) {
    newState[3] = false
    return newState
  }

  if (duelState[4]) {
    newState[4] = false
    return newState
  }

  return newState
}

const handleRocketWarriorAttack = (duelState: boolean[]) => {
  const newState = [...duelState]
  if (duelState[3]) {
    newState[3] = false
    return newState
  }

  if (duelState[5]) {
    newState[5] = false
    return newState
  }

  if (duelState[4]) {
    newState[4] = false
    return newState
  }

  return newState
}

const handleHungryBurgerAttack = (duelState: boolean[]) => {
  const newState = [...duelState]
  if (duelState[2]) {
    newState[2] = false
    return newState
  }

  if (duelState[1]) {
    newState[1] = false
    return newState
  }

  if (duelState[0]) {
    newState[0] = false
    return newState
  }

  return newState
}

const handleMeteorDragonAttack = (duelState: boolean[]) => {
  const newState = [...duelState]
  if (duelState[1]) {
    newState[1] = false
    return newState
  }

  if (duelState[2]) {
    newState[2] = false
    return newState
  }

  if (duelState[0]) {
    newState[0] = false
    return newState
  }

  return newState
}

const handleLinkuribohAttack = (duelState: boolean[]) => {
  const newState = [...duelState]
  if (duelState[0]) {
    newState[0] = false
    return newState
  }

  if (duelState[1]) {
    newState[1] = false
    return newState
  }

  if (duelState[2]) {
    newState[2] = false
    return newState
  }

  return newState
}

export const handleDuelStateChange = (
  index: number,
  duelState: boolean[]
): boolean[] => {
  let newState = duelState

  if (index === 0) {
    newState = handleChickAttack(duelState)
  }

  if (index === 1) {
    newState = handleGaiaAttack(duelState)
  }

  if (index === 2) {
    newState = handleRocketWarriorAttack(duelState)
  }

  if (index === 3) {
    newState = handleHungryBurgerAttack(duelState)
  }

  if (index === 4) {
    newState = handleLinkuribohAttack(duelState)
  }

  if (index === 5) {
    newState = handleMeteorDragonAttack(duelState)
  }

  return newState
}
