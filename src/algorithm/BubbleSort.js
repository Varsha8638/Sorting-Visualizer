export function bubbleSort(array) {
    let animation = [];
    let tempArray = [...array];

    for (let i = 0; i < tempArray.length - 1; i++) {
        for (let j = 0; j < tempArray.length - 1 - i; j++) { // ✅ reduce comparisons
            animation.push([j, j + 1, tempArray[j] > tempArray[j + 1]]);
            
            if (tempArray[j] > tempArray[j + 1]) {
                // Swap
                let temp = tempArray[j];
                tempArray[j] = tempArray[j + 1];
                tempArray[j + 1] = temp;
            }
        }
    }

    return animation;
}
