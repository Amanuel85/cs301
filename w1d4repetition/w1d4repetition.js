"use strict"

let prompt = require("prompt-sync")();
// question 1 
/*A prime number (or a prime) is a natural number greater than 1 that is not a product of two
smaller natural numbers. In other words, it is a number that is only perfectly divisible by number
1 and itself. Write a JavaScript program to test weather user input is a prime number or not.
a. Your logic should be based on factor count. i.e., prime number will have 0 factors (not
counting 1 and itself), while composite will have 1 or more factors.
b. This time think of a logic to use break statement so that you can break early from the
loop, right when you know number is not prime. For example, you know number 8 is not
prime right on the first loop because it is perfectly divisible by 2 itself, that's why further
testing is not required. If the number is prime loop will proceed until the end.
*/
// input : user inputs a number 
/*process:
set counter to 0 
start counter i = 2
 loop to the number and devid the number by i 
update the counter 
if the counter > 0 the number is not prime */
/*
let number = prompt("Enter your number: ")

 let counter = 0 ;
 //let isPrime = true;
 for(let i = 2;i<number;i++){
     if(number%i ===0){
      counter +=1
     }
 }
 console.log(counter)
 if (counter > 0 ){
     console.log("Not prime")
 }
 else(console.log("prime"))
 */

 //b 
 /*
 let isPrime = true
 for (let z = 2;z<number;z++){
     if(number %z ===0){
         isPrime = false
         break; 
     }
    
 }
 console.log(isPrime)
 */
// Write a JavaScript program to calculate the factorial value of a given number.
// E.g., factorial 4 = 4*3*2*1 = 24
// input user input number
// process :
  /* find all numbers from the input number to 1 
  --multiply eachother
  outpu : factorial value
  */
 /*
 let num = +prompt("Enter a number:")
 let sum = 1
 for(let i = 1 ;i<= num;i++){
     sum = sum*i

 }
  console.log("factorial value of "+num+ " is: "+sum)
  */
 /*question 3
 Write a JavaScript program that gives the user three tries to guess the correct pin of the
account. You set the pin as a constant. When correct display “Correct, welcome back.” When
incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
locked out.” 
input : user input (number)
process:  input prompt
          save the pin as constant number
          ask the user to enter a number
          set counter to 0
          compare the user input with the saved number 
          if matched  display message
          update counter

          while the input != pin , ask the user again
          if counter === 3 
          message = locked out 
out put : messeage display
*/
let pin = +prompt("please enter your pin: ")
let savedPin = 5432
let counter = 0 
//let condition = true 
while(counter < 3){
if(pin === savedPin ){
    console.log("Correct,Welcome Back!")
break
  }
  pin = +prompt("Incorrect, try again: ")
  counter = counter+1
  }
  if (counter >2){
  console.log("Sorry but you have been locked out")}

/* question 4
 Write a defining table and JavaScript program to Display Fibonacci series up to N terms. N
being positive integer from user input. 
The Fibonacci series is a sequence such that each number is the sum of the two preceding ones,
starting from 0 and 1. That is, fib(0) = 0, fib(1) = 1, fib(n) = fib(n – 1) + fib(n – 2) for n > 1.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
*/
//user input 
// process :
// the firtst two terms are
// F1=0, F2 = 1;
// fn = f(n-1)+f(n-2)
/*
let number = +prompt("Enter a number")
let f0 = 0;
let f1 = 1;
let nextItem ;
console.log("fibnachi serious:")
for(let i = 1;i<=number;i++){
    console.log(f0)
    nextItem = f0+f1;
    f0 = f1;
    f1 = nextItem;

}
*/

/*
5. Write a JavaScript program to compute sum of all the digits in a given integer number.
eg. input 123 ,output 6
input : user input integer number
process 
get the input number
start loop until all digits are summed 
initialize sum = 0;
find the first digit from the right using modulo operator = number%10
update sum = sum + number%10
update number = number/10 , because the last digit has been removed
change number to Integer
*/ 
/*
let num = +prompt("Enter number :")
let sum = 0; 
while(num>0){
    //let sum = 0  123
    sum = sum+ num%10
    num = num/10
    num = parseInt(num)
}
console.log(sum)
*/
/*6. Write JS code to print following patterns using nested loops */
//6 a
/*

for(let i = 1;i<=5;i++){
    let row = ""
    for(let j =1;j<= i;j++){
        row += i
    }console.log(row)
}

//6b
for(let i = 1;i<=5;i++){
    let row = '';
    for (let j = 1;j<=i;j++){
    row +=j}
    console.log(row)
}

//6c 
for(let i=5;i>=1;i--){
    let  row ='';
    for(let j = 1;j<=i;j++){
        row +=i }
    console.log(row) }

*/