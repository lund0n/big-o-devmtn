function binarySearch(vals, val) {
  let ops = 0;
  let start = 0;
  let end = vals.length - 1;

  while (start < end) {
    ops++;
    let mid = Math.floor((end - start) / 2) + start;
    let midValue = vals[mid];
    if (val > midValue) {
      start = mid + 1;
    } else if (val < midValue) {
      end = mid - 1;
    } else {
      return [ mid, ops ];
    }
  }
  return [ -1, ops ];
}

module.exports = binarySearch;
