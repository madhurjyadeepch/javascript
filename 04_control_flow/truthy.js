const userEmail = "madhurjyadeepch@gmail.com";

if (userEmail) {
    console.log("Got user email.");
} else {
    console.log("Didn't got user email.")
}

// Falsy values: 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// Rest of them are truthy values.
// Truthy values:

// "0", 'false', " ", {}, [], function(){}

if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coaelescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10;

val1 = null ?? 10;

val1 = null ?? 10 ?? 20;

console.log(val1)

//  Ternary Operator.

// condition : true ? false

const iceTeaPrice = 100;

iceTeaPrice > 80 ? console.log("More than 80") : console.log("Less than 80.")