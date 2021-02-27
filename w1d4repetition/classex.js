"use strict"
let prompt = require("prompt-sync")();
//Write a loop that prints all even number between 1 to 20 (inclusive)
// Write both while and for versions
/*
for (let i = 1;i<=20;i++){
    if(i%2===0)
    console.log(i)
}

let i = 1
while (i<=20){
    if (i % 2 ===0){
        console.log(i)    
    }
    i++
}
*/
//Write a loop that keeps on prompting for age until you enter age
// older than 18 • Write both while and do while versions

/*
let age = +prompt("Enter your age: ")
while (age < 18){
    age = +prompt("Enter your age: ")
    console.log("you are  above 18")
}

let age = +prompt("Enter your age: ")
do { age = +prompt("Enter your age: ")

}while(age < 18)
console.log("you are  above 18")
*/
//Make a defining table and program to print out the balance of a
//savings account that compounds interest monthly. Prompt the use for the  initial amount 
//:annual interest rate ,number of years to compound
// input: initial amount, annual interest rate, number of years, 

// process :prompt user ,compute total amount
// divide annual rate to monthly rate
// multiply years by 12 to get months 
//calculate monthly interst
// output : displaye the amount 
/*
let initialAmount = +prompt("What is the initial amount ")
let interst = +prompt("interest rate:")
let years = +prompt("number of years")
let monthltyinterst  = interst/12
monthltyinterst = monthltyinterst/100
let totalmonth = 12 * years
let balance = initialAmount;
for(let i = 1; i<= totalmonth;i++){
    balance = balance+ balance*monthltyinterst
}
console.log(balance)
*/

//const prompt = require("prompt-sync")();
// const initialBalance = +prompt("enter initial amount: ");
// const years = +prompt("enter number years: ");
// const annualInterest = +prompt("enter annual interest rate, e.g., 10 for 10% interest: ");

// const months = years * 12;
// const monthlyInterest = .01 * annualInterest/12;

// let balance = initialBalance;

// console.log("Month    Balance");
// console.log("  0        ", balance);

// for (let i = 1; i <= months; i++) {
//   balance = balance + (monthlyInterest * balance);
//   console.log("  ", i, "        ", balance.toFixed(2));
// }
//fibnachi serious
// let num = prompt("enter num")
// console.log(0);
// console.log(1);
// let previous = 0;
// let current = 1;
// for(let i =2;i<= num;i++){
//     let sum = previous +current
//     console.log(sum)
//     previous = current
//     current = sum
// }

//fucntion scope let x = 10;
// function main() {
//     let x;
//     console.log("x1: " + x);
//     if (x > 0) {
//     let x = 30;
//     console.log("x2: " + x);
//     }
//     x= 40;
//     let f = function(x) { console.log("x3: " + x); }
//     f(50);
//     }
//     main();
// let x = 10;
// function test(){
//     //console.log(x)
// }
// console.log(test());

let x = 5;


function display() {

    let x = 3;

    let y = 7;

    console.log(x, y); // Blank 1. Fill in the blank, read surrounding text.

}

//display();

console.log(x); // Blank 2. Fill in the blank, read surrounding text.

console.log(y); 

//Write a defining table and then a JavaScript function isReversedPrime,
// that takes a number as an input and check if the reverse of the input number is prime or not.
let num = 123;
let reverse = 0
while (num >0){
    let lastdigit = num/10
    reverse = 

}