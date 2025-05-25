// console.log(process.argv);
// // argv[0]
// // argv[1]
// // argv[2]
// // argv[3]
let myVar = process.argv.length -2

// const arg = process.argv.slice(2)

if(myVar == 0){
    console.log("No argument");

} else if (myVar == 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
