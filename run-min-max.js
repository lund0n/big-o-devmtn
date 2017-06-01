const minMax = require('./src/min-max');
const randomNumbers = require('./src/random-numbers');

const source = randomNumbers(10, 25);
const { min, max }= minMax(source);

console.log('Values:', JSON.stringify(source));
console.log(`Minimum: ${min}, maximum: ${max}.`);