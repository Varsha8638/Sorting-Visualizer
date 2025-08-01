export function insertionSort(array) {
  const animations = [];
  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Highlight comparison
    animations.push([j, i, false]);

    while (j >= 0 && arr[j] > key) {
      animations.push([j + 1, j, true]); // swap
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
    animations.push([j + 1, i, true]); // insert
  }

  return animations;
}
