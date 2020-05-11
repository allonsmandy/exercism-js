const dnaToRna = { G: "C", C: "G", T: "A", A: "U" }
export const toRna = dna => {
  return !dna.length ? "" : dna.split('').map(letter => dnaToRna[letter]).join('')
};