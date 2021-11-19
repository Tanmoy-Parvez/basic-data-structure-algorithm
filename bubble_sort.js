const numbers = [11, 5, 66, 54, 10, 2, 99, 25]

function bubble_sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }

        }

    }
    return array;
}

const sorted = bubble_sort(numbers)
console.log(sorted);