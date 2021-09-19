// const array = ['Diego', 'Karen', "Oscar"];
// console.log(array);
// console.log(array[0]);
// array.push('Ana');
// console.log(array);

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    shift(){
        const firstItem = this.data[0];
        this.shiftIndex(0);
        return firstItem;
    }
}

const myArray = new MyArray();
myArray.push("Diego");
myArray.push("Karen");
myArray.push("Oscar");
console.log(myArray);
console.log(myArray.get(1));
console.log(myArray.length);
