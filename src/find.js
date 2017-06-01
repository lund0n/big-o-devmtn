function find(vals, val) {
  let ops = 0;
  for (let i = 0; i < vals.length; i++) {
    ops++;
    if (vals[i] === val) {
      return [ i, ops ];
    }
  }
  return [ -1, ops ];
}

module.exports = find;
