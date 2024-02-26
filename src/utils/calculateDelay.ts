export const calculateDelay: (number: number) => string = (index) => {
  // Cycle index every 10 items (0-9, then back to 0)
  const cycleIndex = index % 10;
  // Calculate delay based on cycled index
  const delay = cycleIndex * 0.08; // Adjust the multiplier as needed
  return `${delay}s`;
};
