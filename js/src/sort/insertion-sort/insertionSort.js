/**
 * for j = 1 to A.length
 *   k = a[j]
 *   i = j -1
 *   while i >= 0 and a[i] > k
 *     a[i + 1] = a[i]
 *     i = i -1
 *   a[i + 1] = k
 */

const insertionSort = (a) => {
  let len = a.length;
  for (let j = 1; j < len; j++) {
    // current key
    let k = a[j]
    // Insert a[j] into the sorted sequence a[1...j-1]
    let i = j-1;
    while(i >= 0 && a[i] > k) {
      a[i + 1] = a[i];
      i -= 1;
    }
    a[i + 1] = k
  }
  return a;
}

export default insertionSort;

