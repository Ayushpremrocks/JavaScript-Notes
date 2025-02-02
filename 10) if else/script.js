/*
if statement = if a condition is true, excute some code
if not, do something else
*/

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit")
const resultElement = document.getElementById("resultElement");
let age;
mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
    if(age>=100){
        resultElement.textContent = `Too OLD to enter`;
    }else if(age ==0){
        resultElement.textContent = `U just born`;
    }else if(age>=18){
        resultElement.textContent = `old enough to enter the website`;
    }else if(age<0){
        resultElement.textContent = `heh?`
    }else{
        resultElement.textContent = `you must be 18+ to enter`;
    }
}