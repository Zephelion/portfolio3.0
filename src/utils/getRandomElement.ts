export const getRandomElement = (arr: any[]): string => {
  // Calculate the total weight of all elements in the array
  const totalWeight = arr.reduce((sum, element) => sum + element.weight, 0);

  // Generate a random number between 0 and totalWeight
  let random = Math.floor(Math.random() * totalWeight);

  // Iterate over each element in the array
  for (const element of arr) {
    // If the random number is less than the current element's weight, return its text
    if (random < element.weight) {
      return element.text;
    }
    // Otherwise, subtract the current element's weight from the random number
    random -= element.weight;
  }

  // Fallback in case of rounding errors
  return arr[arr.length - 1].text;
};
