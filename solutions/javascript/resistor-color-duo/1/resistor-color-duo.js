//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([...colors]) => {
  const colorCodes = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
  return colorCodes.indexOf(colors[0]) * 10 + colorCodes.indexOf(colors[1])
};
