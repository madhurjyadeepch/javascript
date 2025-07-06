myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let myNums = myNumbers.map ( (num) => num+10 )
console.log(myNums)

// Chaining of functions:

myNums = myNumbers.map( (num) => num * 10 ).map ((num) => num + 1).filter ((num) => num > 50)

console.log(myNums)


