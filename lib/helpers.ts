export function capitalizeFirstLetter(word: string) {
  if (!word) return word; // Check if the word is empty or not
  return word.charAt(0).toUpperCase() + word.slice(1);
}
