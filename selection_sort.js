const numbers = [12, 5, 99, -5, 68, 11, 20, 54]

function selection_sort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }

        }
        [array[i], array[min]] = [array[min], array[i]]
    }
    return array;
}

const sorted = selection_sort(numbers);
console.log(sorted);