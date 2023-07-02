function countWords(input: string): number {
    const words = input.trim().split(/\s+/); 
    return words.length;
  }
  const inputString = "Bonjour, comment ça va ?";
const wordCount = countWords(inputString);
console.log(`Le nombre de mots dans la chaîne est : ${wordCount}`);