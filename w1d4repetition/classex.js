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