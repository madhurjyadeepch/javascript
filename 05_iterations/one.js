// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// break and continue


for (let index = 0; index <= 20; index++) {

    if (index === 5) {
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${index}`);
    
}

for (let index = 0; index <= 20; index++) {

    if (index === 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}