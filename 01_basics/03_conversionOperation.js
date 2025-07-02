let score = 22

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)

// console.log(typeof valueInNumber)

// "33" = 33
// "33abc" = NaN
// true = 1, false = 0
// undefined = NaN
// null = 0

let isLoggedIn = 1

let booleanIsLoggenIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggenIn)

// and more conversions are present

// ************ Operations *****************

let value = 3
let negValue = -value

console.log(negValue)

let str1 = "Madhurjya"
let str2 = " Deep Chakravarty"

let str3 = str1 + str2

console.log(str3)

console.log("2" + 3)
console.log(3 + "3")

console.log(+true)
console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2+2 // although it generates result, this kind of things should be avoided.

let gameCounter = 100
gameCounter++
console.log(gameCounter)


// let x = 3
// const y = x++
// console.log (x,y)

let x = 3
const y = ++x
console.log(x, y)

