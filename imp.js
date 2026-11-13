const os = require("os");

console.log("hola mundo");

let casa = "Es una casa";
console.log("Mayuscula: " + casa.toUpperCase());
console.log("Terminacion: " + casa.endsWith("a"));
console.log("Well formed: " + casa.isWellFormed());
console.log("At index: " + casa.at(5));

function IterationString(str) {
    for (const char of str) {
        console.log(char);
     }
     
}
console.log(casa.toLowerCase().split("a").join("_").split(" ").join("-"));
// console.log(IterationString(casa));

console.log("abcd", "Abcd");