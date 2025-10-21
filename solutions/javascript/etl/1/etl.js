//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  const newScores = {}
    for (let score in old) {
      for (let charachter of old[score]) {
        newScores[charachter.toLowerCase()] = Number(score)
      }
    }
  return newScores
};
