const array = ['a', 'b', 'c', 'd', 'e']
const heroes = ["Superman", "Batman", "Spiderman"];

const myArray2 = new Array(1, 4, 5, 7, 6);

console.log(myArray2[3])

// ARRAY METHODS

array.push(2);
array.push(51);

console.log(array)

array.pop();
console.log(array)

array.unshift('e');
console.log(array);

array.shift();
console.log(array);


console.log(array.includes('e'));
console.log(array.indexOf('a'));


const newArray = array.join();

console.log(typeof newArray);


// Slice, Splice

// Slice = Without including the range, it slices the array and doesn't do anything with the original array.

// Splice = Slices the array, but also manipulates the array and also includes the last range.

