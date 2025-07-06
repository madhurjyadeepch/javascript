const myNums = [1, 2, 5]

// const myTotal = myNums.reduce( function (acc, currval) => {
//     return (acc + currval)
// }, 0)

// console.log(myTotal);

const myTotal = myNums.reduce ((acc, currval) => acc + currval, 0)

console.log(myTotal)

const shoppingCart = [
    {
        courseName: "JS course",
        price: 3900
    },
    {
        courseName: "PY course",
        price: 23900
    },
    {
        courseName: "CPP course",
        price: 39023
    },
    {
        courseName: "Data Science course",
        price: 39030
    }
    
];

const cartTotal = shoppingCart.reduce ((acc, obj) => acc + obj.price, 0 )
console.log(cartTotal)

