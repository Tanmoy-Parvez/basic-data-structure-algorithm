const numbers = [12, 22, 35, 46, 58, 65, 74, 89, 92, 100]

function binary_search(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === target) {
            return mid
        }
        if (target < array[mid]) {
            end = mid - 1
        }
        if (target > array[mid]) {
            end = mid + 1
        }

    }
    return -1;

}

const array = binary_search(numbers, 58)
console.log(array);