// let myDate = new Date();

// console.log(myDate)

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2001, 8, 11);
// console.log(myCreatedDate.toDateString());

// let myNewCreatedDate = new Date ("11-06-2004")
// console.log(myNewCreatedDate.toDateString());

let newDate = new Date();
console.log(newDate);
console.log(newDate.toDateString());

console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    calendar: "default"
}))
