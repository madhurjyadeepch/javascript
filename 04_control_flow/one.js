// if

// if (condition) {
//     // if condition is true, then code will be executed.

//     // if condition is false, code won't be executed.

// }

// == : checks only the value, and not the type. 2 == "2" comes out to be true.
// === : checks both the value, and the type, wherease 2 === "2" comes out to be false.
// similarly, !== 

let temp = 41;

if (temp === 41) {
    console.log("Temperature is less than 50.");
    
} else {
    console.log("Temperature is greater than 50.");
}

// Implicit scope of an If statement.

const balance = 3000;

if (balance < 4000) console.log("Test!"), console.log("Test 2!"); // Bad practice. Unreadable code!

// else if can also be used to check multiple conditions.

const userLoggedIn = true;
const userDebitCard = true; 

const userLoggedInFromGoogle = true;
const userLoggedInFromEmail = false;

if (userLoggedIn && userDebitCard) {
    console.log("Allow to buy courses.");
}

if (userLoggedIn && (userLoggedInFromGoogle || userLoggedInFromEmail)) {
    console.log("User logged in!");
    
}





