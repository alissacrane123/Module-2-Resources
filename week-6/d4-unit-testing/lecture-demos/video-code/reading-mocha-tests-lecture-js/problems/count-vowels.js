function countVowels(word) {
  if (typeof word !== "string") {
    throw new TypeError("This function only accepts string arguments");
  }

  let numVowels = 0;

  const vowels = "aeiou";

  word.split("").forEach(letter => {
    const lowerCaseLetter = letter.toLowerCase();
    if (vowels.includes(lowerCaseLetter)) {
      numVowels += 1;
    }
  });

  return numVowels;
}

module.exports = countVowels;
