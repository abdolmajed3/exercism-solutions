//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const dnaToRna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

export const toRna = p => p.split('').map(l => dnaToRna[l]).join('')
