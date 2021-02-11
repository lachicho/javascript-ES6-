//Exercici 1
//Converteix a funcions fletxa:

// function multiply(num1, num2) {
//    return num1 * num2;
// }
const multiply = (num1, num2) => `El resultado es: ${num1 * num2}`;
console.log(multiply(7, 4));


// function toCelsius(fahrenheit) {
//    return (5/9) * (fahrenheit-32);
// }
const toCelsius = (fahrenheit) => `La temperatura en Celsius es ${(fahrenheit - 32) * 5 / 9} grados`;
console.log(toCelsius(59));

// //This function returns a string padded with leading zeros
// function padZeros(num, totalLen){
//    var numStr = num.toString();
//    var numZeros = totalLen - numStr.length;
//    for (var i = 1; i <= numZeros; i++) {
//       numStr="0" + numStr; 
//     } 
//    return numStr;
// } 

const padZeros = (num, totalLen) => `La respuesta es ${"0".repeat(totalLen - num.toString().length) + num.toString()}`;
console.log(padZeros(25, 5));

let num = 14;
let numStr = num.toString();

console.log(numStr.padStart(6, 0));


// function power(base, exponent) { 
//    var result=1; 
//    for (var i=0; i < exponent; i++) { 
//          result *=base; 
//    } 
//    return result;
// } 
let result = (b, e) => b ** e;
console.log(result(4, 3));

// function greet(who) {
//     console.log("Hello " + who);
// }
const greet = who => `Hello ${who}`;
console.log(greet("Maria"));
/*---------- */
// Exercici 2
var users = 
[{ firstName: 'Homer', lastName: 'Simpson' },
{ firstName: 'Marge', lastName: 'Simpson' },
{ firstName: 'Bart', lastName: 'Simpson' },
{ firstName: 'Lisa', lastName: 'Simpson' },
{ firstName: 'Maggie', lastName: 'Simpson' }];

let userNames = users.map(user => {return user.firstName});

console.log(userNames);
/*-------------- */
//Exercici 3

//Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let textoCompleto = epic.reduce((a,b) => {return a+' '+b} );

console.log(textoCompleto);


