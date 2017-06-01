const { words } = require('superb');
const find = require('./src/find');
const binarySearch = require('./src/binary-search');

// const wordToFind = 'great';
// const wordToFind = 'mathematical';
const wordToFind = 'zzz';
console.log(`Searching for "${wordToFind}" through ${words.length} words.`);
console.log('Using find:', find(words, wordToFind));
console.log('Using binary search:', binarySearch(words, wordToFind));
