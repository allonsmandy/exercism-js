const alphabet = 'abcdefghijklmnopqrstuvwxyz';
export const isPangram = sentence => {
  return [...alphabet].every(letter => sentence.toLowerCase().includes(letter))
};
