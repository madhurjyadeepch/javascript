myObj = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObj) {
        
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ['js', 'cpp', 'rb', 'swift']

for (const key in programming) {
    console.log(programming[key])
}