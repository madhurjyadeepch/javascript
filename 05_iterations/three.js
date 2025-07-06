// for of loop

// [{}, {}, {}]

for (const num of "Hello, World!") {
    // console.log(num);
}

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('Fr', "France")

console.log(typeof map)

for (const [key,value] of map) {
    console.log(`${key}: ${value}`)
}
