const numbers = [5, 10, 2, 85, 100, 11, 20, 15];

function linear_search(array, target) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === target) {
            return i;
        }
    }
    return -1;
}

const array = linear_search(numbers, 100)
console.log(array);