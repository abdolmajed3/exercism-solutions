// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totlaBirds = 0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    totlaBirds += birdsPerDay[index]
  }
  return totlaBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let totalBirds = 0
  
  const startIndex = (week - 1) *7;
  for (let index = startIndex; index < startIndex + 7; index++) {
    totalBirds += birdsPerDay[index]
  }
  return totalBirds
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  let totalBirds = birdsPerDay;
  for (let index = 0; index < totalBirds.length; index += 2) {
    totalBirds[index] += 1;
  }
  return totalBirds
}
