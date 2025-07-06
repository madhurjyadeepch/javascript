const user = {
    username: "Madhurjya",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website!`) // this is important
    }
}

console.log(this)
console.log(user.welcomeMessage())

// this only works under functions under objects, and won't work under simple functions.

// const chai = function (){
//     let username = "Madhurjya"
//     console.log(this.username)
// }

const chai = () => {
    let username = "Madhurjya"
    console.log(this)
}

const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwoNew = (num1, num2) => num1 + num2 // Implicit function usage of arrow functions.


chai()