"use strict"
let prompt = require("prompt-sync")();


/* Q4 Write a function expression and assign it to the variable
greatestCommonDivisor, which will compute GCD (Greatest Common Divisor) of two
numbers. GCD is the largest number that divides both. For example GCD of 20 and 28 is 4 and
GCD of 98 and 56 is 14.
 input : two numbers,
process: using euclid's algorithm
let a and b two numbers
check if b > a  if so swap and b
remainder = a%b
divide a%b until remainder = 0
set a =b, b = remainder 
and return b , the last divisor will be the GCD*/


const greatestCommonDivisor = function(num1,num2){
    let remainder 
    let c 
    //let LCM = num1*num2
    if (num2>num1){
        c = num2;
        num2 = num1
        num1 = c
    }
    while (num1%num2 >0) {  // using 
        remainder = num1%num2;
        num1 = num2;
        num2 = remainder
        
    }
    //LCM = LCM/num2
    //return LCM
    return num2 }
console.log(`Expect 14 for GCD of(98 and 56): ${greatestCommonDivisor(98,56)}`)


/* Q5 Write a function expression to find LCM of any two numbers using the
greatestCommonDivisor function from previous question. Assign it to the variable
leastCommonMultiple. LCM of two numbers is the smallest number that can be
divided evenly by both numbers. Write it as a function expression 
input : two numbers 
process : after the GCD is found LCM is num1*num2/ GCD
*/

const leastCommonMultiple = function(num1,num2){
    let remainder 
    let c 
    let LCM = num1*num2
    if (num2>num1){
        c = num2;
        num2 = num1
        num1 = c
    }
    while (num1%num2 >0) {  // using euclid's algorithm 
        remainder = num1%num2;
        num1 = num2;
        num2 = remainder  // the last divisor will be the GCD
        
    }
    LCM = LCM/num2 // LCM is the product of num1 and num2 divided by GCD
    return LCM
   }
   console.log(`Expect 392 for LCM of(98 and 56): ${leastCommonMultiple(98,56)}`)
   
   
   /* Q6
   Now write a new version of leastCommonMultiple that uses the
greatestCommonDivisor function and the mathematical relationship between LCM
and GCD to find the LCM. Research the LCM and GCD relationship online.
   */
  
const leastCommonMultiple2 = function(a,b){
    let GCD = greatestCommonDivisor(a,b)
    let LCM = (a*b)/GCD
    return LCM
}
console.log(`Expect 392 for LCM of(98 and 56):${leastCommonMultiple2(98,56)}`)


/* Q7
Write a function compute, that takes three parameters. First parameter is a call back
function that does the actual operation, second and third are the operands.

*/
const compute = function(add,a,b){
    add(a,b)
};
const add = function(a,b){
    console.log(a+b)
};
compute(add,2,3) // expect 5

/// Refactor to pass add logic as an anonymous function. (Make a copy first)
compute(

    function (x,y){
        console.log(x+y)
    },2,4
) // expect 6

// Refactor to pass add logic as an arrow function. (Make a copy first)
compute(

    (x,y)=>{
        console.log(x+y)
    },2,9
) // expect 11