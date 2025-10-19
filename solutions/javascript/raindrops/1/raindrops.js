//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = input => {
  let res = ''
  if (input % 3 === 0) {res+= 'Pling'}
  if (input % 5 === 0) {res+= "Plang"}
  if (input % 7 === 0) {res+= "Plong"}

  return res || input.toString()
};
