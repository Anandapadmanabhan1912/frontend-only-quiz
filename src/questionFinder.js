import capitalsData from "./capital.json";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getQuestionData() {
  const data = capitalsData;
  const selectedEntryIndex = getRandomInt(data.length);
  const selectedEntry = data[selectedEntryIndex];

  const remainingEntries = data.filter(
    (_, index) => index !== selectedEntryIndex
  );
  const options = [selectedEntry.country];

  while (options.length < 4) {
    const randomIndex = getRandomInt(remainingEntries.length);
    const randomEntry = remainingEntries.splice(randomIndex, 1)[0];
    options.push(randomEntry.country);
  }

  // Shuffle options to avoid having the correct answer always in the same position
  options.sort(() => Math.random() - 0.5);

  return {
    question: `What country is ${selectedEntry.city} the capital of?`,
    options: options,
    correctAnswer: selectedEntry.country,
  };
}

export default getQuestionData;
