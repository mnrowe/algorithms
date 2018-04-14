a = [5, 2, 4, 6, 1, 3]

function insertionSort(a) {
  let len = a.length;
  for (let j = 1; j < len; j++) {
    let k = a[j];
    let i = j - 1;
    while (i >= 0 && a[i] > k) {
      a[i + 1] = a[i];
      i -= 1;
    }
    a[i + 1] = k;
  }
  return a;
}

console.log(`Sorted: ${insertionSort(a)}`);
