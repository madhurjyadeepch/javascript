const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (value){
    console.log(value)
});

coding.forEach ( (value) => {
    console.log(value);
    
})

coding.forEach ((value, i, arr) => {
    console.log(value, i, arr)
})


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },{
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach ( (item) => {
    console.log(item.languageName);
} )