/*
type conversion = change the datatype of a value to another
(string, numbers, booleans)
*/

let age = window.prompt("how old are you?");
age = Number(age);
age += 1;
console.log(age, typeof age);