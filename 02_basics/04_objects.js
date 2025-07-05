// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Levi"
tinderUser.isLoggedIn = false;

const regularUser = {
    fullName: {
        userFullName: {
            firstName: "Madhurjya",
            middleName: " Deep",
            lastName: " Chakravarty"
        }
    }
}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {...obj1, ...obj2}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

const userDetails = [
    {
        id: "234243",
        email: "sam@google.com"
    },
    {
        id: "343453",
        email: "hey@google.com"
    }
]

console.log(userDetails[1].email)


console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));




const course = {
    courseName: "Javascript Fundamentals",
    coursePrice: "999.00",
    courseInstructor: "Chai aur Code"
}

const {courseInstructor: Instructor} = course;

console.log(Instructor); 


// JSON API

// {
//     "Name": "Madhurjya",
//     "CourseName": "Javascript Fundamentals",
//     "Price": "Free"
// }

[
    {},
    {},
    {}
]




