// LIFO = Last in first out

class Stack {
    constructor() {
        this.stack = []
    }
    add(element) {
        this.stack.push(element)
    }
    remove() {
        this.stack.pop()
    }

}

const plates = new Stack();
plates.add('Abul')
plates.add('Babul')
plates.add('Kabul')
plates.add('Dabul')

console.log(plates.stack);

plates.remove()
console.log(plates.stack);

plates.remove()
console.log(plates.stack);

plates.remove()
console.log(plates.stack);

