export const splitContentIntoLines = (content: string, maxLength: number) => {
  const words = content.split(/\s+/); // Split content into words
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    if ((currentLine + word).length <= maxLength) {
      // If adding the word doesn't exceed the maxLength, add it to the current line
      currentLine += (currentLine.length > 0 ? " " : "") + word;
    } else {
      // If adding the word exceeds maxLength, push the current line to lines and start a new one
      lines.push(currentLine);
      currentLine = word; // Start new line with the current word
    }
  });

  // Add the last line if it's not empty
  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
};
