export const formatIndexWithZero = (index: number) => {
  return String(index + 1).padStart(2, "0");
};
