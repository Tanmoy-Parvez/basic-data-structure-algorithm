// FIFO = First in first out

class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(element) {
        this.queue.push(element)
    }
    dequeue() {
        this.queue.shift()
    }
}

const number = new Queue;
number.enqueue('first');
number.enqueue('second');
number.enqueue('third');
number.enqueue('fourth');
console.log(number.queue);

number.dequeue();
console.log(number.queue);

number.dequeue();
console.log(number.queue);

number.dequeue();
console.log(number.queue);