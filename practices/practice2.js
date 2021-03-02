"use strict"
const prompt = require("prompt-sync")();
/*
set count = 1
create for loop to
for(let i = 2;i)
*/
// let num = prompt("Enter a number")
// let counter = 0;
// let prime = true
// for(let i = 2;i<num;i++){
//     if(num%i===0){
//         //counter +=1
//         prime = false
//         break
//     }
// }

// console.log(prime)
// factorial value
// process start for loop form 1 to the number
// start from 1 and multiply it by the next number untill the end
// let n = 6
// let sum = 1 
// for(let i = 1;i<=n ;i++){
// sum = sum*i
// }
// console.log(sum)
/*Write a JavaScript program that gives the user three tries to guess the correct pin of the
account. You set the pin as a constant. When correct display “Correct, welcome back.” When
incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
locked out.”
*/
// input const pin, input pin
// process  set counter = 0, write if codition to compare the pin and saved pin
// if matched print "correct"
//it not matched  dispalye try agin and update counter
// if matched print correct , try againg until counter is 3 , then print "loged out"
// let pin = +prompt("enter pin");
// const savedPin = 5;
// let counter = 1
//     while(counter <3){
//         if (pin === savedPin){
//             console.log("Correct ,welcome back")
//         break}
//     pin = +prompt("enter pin")
//     counter +=1
//     if (pin === savedPin){
//         console.log("Correct ,welcome back")
//     break;}
    
// }
// if(counter>2&&pin!==savedPin)
// console.log("loge out")
/*fibinachi
input 
process 
*/
//fib0 = 0 ,fib1 = 1, fbn = fbn-1 + fbn-2
// let fibfirst =0
// let fibprevious = 1
// let fibcurrent = fibfirst+fibprevious
// let num = 8
// console.log(0)
// console.log(1)
// for (let i = 2;i<=num;i++){
//     fibcurrent = fibfirst+fibprevious
//     console.log(fibcurrent)
// fibfirst = fibprevious
// fibprevious = fibcurrent
// }
//5. Write a JavaScript program to compute sum of all the digits in a given integer number.
// input : number 1234
// process 
// set sum = 0
// loop to find digits
// find digits = num%10
//add the digit to sum
// divide the number by integer 10
//let num = 12314
//let sum  =0 
// while(num>0){
//     sum = sum+ num%10
//     num = parseInt(num/10)
// }
// console.log(sum)
// while(num>0){
//     let digit = num%10
//     sum = (sum*10)+digit
//     num = parseInt(num/10)
// }
// console.log(sum)
// for (let i = 5;i>=0;i--){
//     let row ="*" ;
//     for(let j = 1;j<=5;j++){
//         row +=i
//     }
// console.log(row)
// }
/******************* functions *******/
/*function a(){
    console.log(x); // consult Global for x and print 20 from Global
    }
    function b(){
    let x = 10;
    a(); // consult Global for a
    console.log(x);
    }
    let x = 20;
    b(); */
// factorial of a number;
let smallest 
let largerst;
let middile
function compare(num1,num2,num3){

    if(num1>num2&&num1>num3){
        if(num2>num3){
            largerst = num1;
            middile = num2
            smallest = num3
        }
        else{middile = num3
        largerst = num1
        smallest = num2}
    }
    else if(num2>num1&&num2>num3){
        if(num1>num3){
            largerst = num2
            middile= num1;
            smallest = num3
        }
        else{middile = num3;
        smallest = num1}
    }
    else if (num3>num1&&num3>num2){
        if(num1>num2){
            largerst = num3;
            middile = num1
            smallest = num2
        }
        else {middile = num2
        smallest = num1;
    largerst = num3}
    }
console.log("largest",largerst,"smallest",smallest,"middle",middile)}

compare(11,25,65)