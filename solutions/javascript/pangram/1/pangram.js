//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (text) => {
  const LowerText = text.toLowerCase()
  return [...'abcdefghijklmnopqrstuvwxyz'].every(alphabet => LowerText.includes(alphabet))
};
