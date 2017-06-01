const sum = require('./src/sum');
const randomNumbers = require('./src/random-numbers');

const count = Number(process.argv[2] || 10);
const label = `Time-${count}`;
const values = randomNumbers(count, 25);
console.time(label);
sum(values);
console.timeEnd(label);
