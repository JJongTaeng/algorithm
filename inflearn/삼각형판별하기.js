function t(a, b, c) {

  const max = Math.max(a, b, c);
  const sum = a + b + c;

  return (sum - max > max) ? 'YES' : 'NO';

}

console.log(t(10, 20, 31))
