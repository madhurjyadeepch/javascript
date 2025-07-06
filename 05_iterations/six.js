// forEach doesn't return any value, even when you explicity mention it to do.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4 ) // because we didn't opened the scope, we can directly return this without saying return.
console.log(newNums);

const newNum = [];

myNums.forEach ( (num) => {
    if (num>4) {
        newNum.push(num);
    }
} )

console.log(newNum)


let userBooks = books.filter( (bk) => (bk.genre === "History"))
userBooks = books.filter( (bk) => bk.publish >= 2000 && bk.genre === "History" )
