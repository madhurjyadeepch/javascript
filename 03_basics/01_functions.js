function addTwoNumbers(number1, number2) {  // Parameters
    let result = number1 + number2
    return result;
}

// addTwoNumbers(3, null); // Arguments

const result = addTwoNumbers(2,4);

// console.log("Result: ", result);

function loginUserName (username = "User") {

    if (username === undefined){   // Or if you want, you can write if (!username) => implies the same thing.
        console.log("Please enter a username!");
        return;
    }
    return `${username} just logged in!`
}

console.log(loginUserName());


function cartCalculatedPrice (...num1) { // ... is called rest operator here.
    return num1
}

console.log(cartCalculatedPrice(200,500,2000,320));

const user = {
    username: "Madhurjya",
    price: 300
}

function objectHandle (anyObject) {
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}.`)
}

objectHandle(user);





