// Checks if x lies between min and max
// return true if in range, otherwise false
export const inRange = (x: number, min: number, max: number) => {
  return (x - min) * (x - max) <= 0;
};
