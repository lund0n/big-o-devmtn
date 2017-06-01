const { words } = require('superb');
const shuffle = require('lodash.shuffle');
const bubbleSort = require('./src/bubble-sort');
const quickSort = require('./src/quick-sort');

let results = bubbleSort(shuffle(words));
console.log('Bubble sort');
console.log('First 10 sorted items:', JSON.stringify(results.slice(0,10)));
console.log('Last 10 sorted items:', JSON.stringify(results.slice(-10)));

results = quickSort(shuffle(words));
console.log('Quicksort');
console.log('First 10 sorted items:', JSON.stringify(results.slice(0,10)));
console.log('Last 10 sorted items:', JSON.stringify(results.slice(-10)));
