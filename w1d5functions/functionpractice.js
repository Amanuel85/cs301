"use strict "
let prompt = require("prompt-sync")();
// for(let i=1; i<10; i++){
//     if(i%3===0) break;
//     console.log(i);
//    }

// for (let i = 1;i<10;i++)
/*
Write a function named testPrime that returns true when
argument to the function is a prime number, otherwise returns false.
• Now call the function to test if user input is prime or not. */

// function testPrime(num){
//     let isprime = true;
//     for(let i = 2;i<num;i++){
//         if(num%i=== 0){
//             isprime = false}}
//     return isprime}
// console.log(testPrime(15))
// let userName = "John";
// function showMessage() {
// let userName = "Bob"; // declare a local variable
// let message = 'Hello, ' + userName; // Bob
// console.log(message);
// }
// showMessage();
// console.log( userName ); // John, unchanged

// function a(){
//     console.log(x); // consult Global for x and print 20 from Global
//     }
//     function b(){
//     let x = 10;
//     a(); // consult Global for a
//     console.log(x);
//     }
//     let x = 20;
//     b();
// function f() {
//     let a = 1, b = 20, c;
//     console.log(a + " " + b + " " + c); // 1 20 undefined
//     function g() {
//     let b = 300, c = 4000;
//     console.log(a + " " + b + " " + c); // 1 300 4000
//     a = a + b + c;
//     console.log(a + " " + b + " " + c); // 4301 300 4000
//     }
//     console.log(a + " " + b + " " + c); // 1 20 undefined
//     g();
//     console.log(a + " " + b + " " + c); // 4301 20 undefined
//     }
//     f();

// let x = 10;
// function main() {
// let x = 0;
// console.log("x1 is " + x);
// x = 20;
// console.log("x2 is " + x);
// if (x > 0) {
// x = 30;
// console.log("x3 is " + x);
// }
// console.log("x4 is " + x);
// function f(x) {
// console.log("x5 is " + x);
// }
// f(50);
// console.log("x6 is " + x);
// console.log(x)}
// main();
// console.log("x7 is " + x);

// let num = 8;
// let sum = 0;
// for(let i = 1;i<num;i++){
//     if(num %i === 0){
//         sum = sum+i
//     }
// }
// console.log(sum)
// if (num === sum){
//     console.log(num + "is perfect number")
//     }
//     else {console.log("it is not perfect number")}


/*  Q3
 * Write a program that calculates the total volume of a house, including the volume of the roof
space. Your program must allow the user to enter width, depth, height and sweep as shown in
figure below. Write code to call and test your function
 */
let houseWidth = +prompt("Enter the width of the house: ");
let houseDepth = +prompt("Enter the depth  of the house: ");
let houseHeight = +prompt("Enter the height  of the house: ");
let houseSweep = +prompt("Enter the Sweep  of the house: ");

function livingvolume(houseWidth,houseHeight,houseDepth){
    let livingAreaVolume = houseWidth*houseHeight*houseDepth
    return livingAreaVolume
}
function triangleArea(a = houseSweep,b = houseSweep,c = houseWidth){
    let s = (a+b+c)/2
    let areaofTriangle = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    
   areaofTriangle = Math.floor(areaofTriangle)
   return areaofTriangle
}

//console.log(triangleArea())
function roofVolume(trianglearea,houseDepth){
    let volumeofRoof = houseSweep *  triangleArea()  //roof volume = treagle are *
    return volumeofRoof
}
function houseVolume(living,roof){ // house volume = living room volume = roof voluem 
    return living + roof
}
console.log("The house voulume is "
,houseVolume(livingvolume(houseWidth,houseHeight,houseDepth),roofVolume(houseSweep,triangleArea())))
