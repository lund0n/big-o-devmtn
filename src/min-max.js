function minMax(values) {
  let min = values[0];
  let max = values[0];

  for (let i = 0; i < values.length; i++) {
    if (values[i] < min) {
      min = values[i];
    }
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i];
    }
  }
  return { min, max };
}

module.exports = minMax;