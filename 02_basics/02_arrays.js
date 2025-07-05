const marvel_heroes = ["spiderman", "ironman", "thor", "hulk"];

const dc_heroes = ["batman", "spiderman", "flash"]

// marvel_heroes.push(dc_heroes);

console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes);  // => Just using concat won't save it anywhere, you need to save it in a variable unfortunately.

console.log(...marvel_heroes);

const allHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allHeroes);

// .flat() function converts all the elements of the array into simple elements of array. Even nested array. Makes it flat!

const myNewArray = Array.from("Madhurjya Deep Chakravarty")
console.log(myNewArray);

console.log(Array.from({name: "Madhurjya"})) // interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

