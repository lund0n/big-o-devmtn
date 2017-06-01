function randomNumbers(count, max) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * max));
  }
  return numbers;
}

module.exports = randomNumbers;
