import type Sailing from 'app/types/Sailing'

const getUniqueCruiselines = (sailings: Sailing[]): string[] => [
  ...new Set(
    sailings
      .filter((sailing) => !!sailing.ship?.line?.name) // disregard empty data
      .map((sailing) => sailing.ship.line.name)
  ),
]

export default getUniqueCruiselines
