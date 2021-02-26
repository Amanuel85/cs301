
"use strict"
let prompt = require("prompt-sync")();
//4 Write a JavaScript program that prints numbers between 10 and 100 that are multiple of both 3 and 5

/*
for(let i = 10;i<=100;i++){
    if (i%3===0 && i%5===0){
        console.log(i)
    }
}
*/
/*
let x = 1;
let y = '2';
let z = true;
let s = x + y;
console.log(s) // output?
console.log(typeof s) // output?
x = x + z;
console.log(x) // output?
console.log(typeof x) // output?
y = x++ * y;
console.log("y is ",y)
console.log(x); // output?
console.log(typeof x); // output?
s = parseInt(s)
s+='3';
console.log(s); // output?
console.log(typeof s); // output?
z= !z;
console.log(z); // output?
console.log(typeof z); // output?
let x = 0;
 x++;
 console.log(x);
 ++x;
 console.log(x);
 console.log(++x);
 console.log(x);
 console.log(x++);
 console.log(x);
*/
// let x = 5;
// let y = 7+' ';
// //z = x +y
// console.log(x+y);
// console.log(y)
// console.log(typeof y)
// console.log(typeof z)

// let x= 0;
//  let y = "hello";
//  let z = x || "Hi";
//  console.log(z);
//  let w = y || 5;
//  console.log(w);
// for(let count =1; count<=10; count++){
//     console.log(count);
//    }
//    console.log(count); // value of count here?

//5. Write a program that asks for users age and prints "Happy Birthday!" based on the age. For e.g.
//if the user enters 5, program should print "Happy Birthday!" five time.
/*
let age = prompt("How old are you?")
for(let i =1;i<=age;i++){
    console.log("Happy Birth day")
}
*/
/*
let x = 1, y = 7;
let message = "Hi";
if (x < 2) {
 if (y > 7) {
 message = "Bye";
 }else{
message = "HOla";
}
} else {
 message = "Hello";
}
console.log(message);
*/

//Given the following JavaScript code, how many times will the computer display the word "Goodbye"?
//for (let i = 0; i > 3; i++) {
//console.log("Goodbye");}

//8. Given the following JavaScript code, how many times will the computer display the word "Snow"?
// let i = 0;
// while (i < 3) {
// console.log("Snow");
// }
/*
const  x = 5;
console.log(x); //5
if(x==5){
	let y = 2*x;
	console.log(y);// __________10______

	console.log(x); //________5________
}

console.log(x); //_______5_________
console.log(y);
*/
// let x ;
// if(x){
//     const y = 5
//     //console.log(y)
// }
// console.log(y)

// let x ;
// if(!x){
//     let y = 5;
//     console.log(y)
// }
//console.log(y)
// let x = null ;
// console.log(x)
// console.log(!x)
// console.log(typeof !x)
/*
3.	Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
Leap year definition: Every year that is exactly divisible by four is a leap year, except for years 
that are exactly divisible by 100, but these centurial years are leap years if they are exactly 
divisible by 400.
E.g., leap years: 2016, 2000
E.g., not leap years: 1700, 1800, 100

*/
let year = +prompt("Enter year: ")

    if((year %4 === 0&& year %100 !=0)|| (year%100 ===0 && year %400 ===0)){
        console.log("It is leap year")
    }
    else{console.log("It is not leap year")}


// let x ;
// if(!x){
// const y = 5;
// console.log(x)
// console.log(!x)
// console.log(!!x)
// }
