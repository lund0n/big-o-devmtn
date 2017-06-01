function sum(vals) {
  let total = 0;
  for (let i = 0; i < vals.length; i++) {
    total += vals[i];
  }
  return total;
}

module.exports = sum;
