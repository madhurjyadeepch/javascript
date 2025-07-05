// singleton

// Object.create ==> Constructor method and creates a singleton

// Object Literals

const mySym = Symbol ("key1")

const jsUser = {
    name: "Madhurjya",
    age: 20,
    location: "Guwahati",
    email: "madhurjya@google.com",
    [mySym]: "key1",
    isLoggedIn: false
}

console.log(jsUser.email)
console.log(jsUser["email"]);

console.log(jsUser[mySym])

jsUser.email = "madhurjya@chatgpt.com";
// Object.freeze(jsUser);

jsUser.greetings = function(){
    console.log("Hello, JS user! Nice meeting you here.");
}

jsUser.greetingsTwo = function(){
    console.log(`Hello, JS user, ${this.name}`);
}

console.log(jsUser.greetings());

console.log(jsUser.greetingsTwo())

