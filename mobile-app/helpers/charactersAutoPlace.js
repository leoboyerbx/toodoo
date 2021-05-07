import { cloneDeep } from 'lodash'

export default function (characters) {
  const rawCharacters = cloneDeep(characters)
  const positions = {}
  rawCharacters.forEach((character) => {
    if (positions[`${character.position.x}:${character.position.y}`]) {
      positions[`${character.position.x}:${character.position.y}`].push(
        character
      )
    } else {
      positions[`${character.position.x}:${character.position.y}`] = [character]
    }
  })
  const resultCharacters = []
  Object.values(positions).forEach((position) => {
    switch (position.length) {
      case 1:
        resultCharacters.push(position[0])
        break
      case 2:
        position[0].position.x += 0.2
        position[1].position.x -= 0.7
        position.forEach((character) => resultCharacters.push(character))
        break
      case 3:
        position[0].position.x += 0.2
        position[1].position.x -= 0.7
        position[2].position.x -= 0.27
        position[2].position.y -= 6
        position.forEach((character) => resultCharacters.push(character))
        break
      case 4:
        position[0].position.x += 0.2
        position[1].position.x -= 0.7
        position[2].position.x -= 0.27
        position[2].position.y -= 6
        position[3].position.x -= 0.27
        position[3].position.y += 5
        position.forEach((character) => resultCharacters.push(character))
        break
      case 5:
        position[0].position.x += 0.2
        position[1].position.x -= 0.7
        position[2].position.x -= 0.6
        position[2].position.y -= 6
        position[3].position.x -= 0.27
        position[3].position.y += 5
        position[4].position.x -= 0.05
        position[4].position.y -= 6
        position.forEach((character) => resultCharacters.push(character))
        break
      case 6:
        position[0].position.x += 0.2
        position[1].position.x -= 0.7
        position[2].position.x -= 0.6
        position[2].position.y -= 6
        position[3].position.x -= 0.05
        position[3].position.y += 5
        position[4].position.x -= 0.05
        position[4].position.y -= 6
        position[5].position.x -= 0.6
        position[5].position.y += 5
        position.forEach((character) => resultCharacters.push(character))
        break
    }
  })
  return resultCharacters
}
