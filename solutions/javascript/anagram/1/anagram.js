export const findAnagrams = (target, candidates) => {
  const normalize = (word) => word.toLowerCase().split('').sort().join('');
  const targetNorm = normalize(target);

  return candidates.filter((word) => {
    const wordNorm = normalize(word);
    return word.toLowerCase() !== target.toLowerCase() && wordNorm === targetNorm;
  });
};
