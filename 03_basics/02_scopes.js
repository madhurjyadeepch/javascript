// Block scope: The scope of the variables inside the blocks (or local scope as well).

// Global scope: Anything outside the block is known as global scope.

// var c = 300;
let a = 300
if (true) {
    let a = 10
    const b = 20
    // c = 20;
}

console.log(a);



function one () {
    const username = "Madhurjya"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website)

    two()
}

one();

if (true) {
    const username = "Madhurjya"
    if (username === "Madhurjya") {
        const website = " Youtube"
        console.log(username + website);
    }
}


// Concept of Hoisting

console.log(addOne(4))

function addOne (num){
    return num + 1;
}

// console.log(addTwo(2)); Error occurs. It is known as hoisting.

const addTwo = function (num) {
    return num + 1;
}



