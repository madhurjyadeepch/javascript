const name = "Madhurjya"
const repoCount = 40

// console.log(name + repoCount + " Value")

console.log(`Hello, my name is ${name} and my Repo Count is ${repoCount}.`)

const gameName = new String('Madhurjya')

console.log(gameName.__proto__);

console.log(gameName[2])

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6, 3)
console.log(anotherString)


const newStringOne = "   Madhurjya    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://madhurjya.com/madhurjya%20deep%20chakravarty"

console.log(url.replace("%20", '-'))

console.log(url.includes('madhurjya'))

console.log(gameName.split("a"))