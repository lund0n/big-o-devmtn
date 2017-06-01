function bubbleSort(items) {
  var length = items.length;
  for (var i = length - 1; i >= 0; i--) {
    //Number of passes
    for (var j = length - i; j > 0; j--) {
      //Compare the adjacent positions
      if (items[j] < items[j - 1]) {
				swap(items, j - 1, j);
      }
    }
  }
	return items;
}

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

module.exports = bubbleSort;