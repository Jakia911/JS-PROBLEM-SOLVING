function getmax(ar) {
  let max = ar[0];
  for (let i = 0; i < ar.length; i++) {
    const el = ar[i];

    if (el > max) {
      max = el;
    }
  }

  return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
const func = getmax(ar);

console.log(func);
