export function quickSort(array) {
  const animations = [];
  const arr = [...array];

  function quickSort(arr, low, high) {
    if (low < high) {
      const pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }

  function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      animations.push([j, high, false]); // compare with pivot
      if (arr[j] < pivot) {
        i++;
        animations.push([i, j, true]); // swap
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    animations.push([i + 1, high, true]); // swap pivot
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }

  quickSort(arr, 0, arr.length - 1);
  return animations;
}
