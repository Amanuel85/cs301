"use strict";
const prompt = require("prompt-sync")();
// let name = prompt("What is your name?:");
// console.log(`Hi ${name}`);
// console.log(true * "7");

//let prompt = require('prompt-sync')();
// let tempInCelsius = prompt("Eneter value in celsius: ");
// let tempInFahrenheit = (9 / 5) * parseFloat(tempInCelsius) + 32;
// console.log(tempInFahrenheit);

// let tempInFahrenheit = prompt("Enter value in Fahrenheit? :");
// let tempInCelsius = (Number(tempInFahrenheit - 32) * 5) / 9;
// console.log(tempInCelsius);

// const foo = 5;
// const bat = "happy day";
// const zoo = foo && bat;
// console.log(zoo);
let radius = prompt("Enter the radius");
let height = prompt("Enter height");
radius = Number(radius);
height = Number(height);
let Volume = Math.PI * radius * radius * height;
console.log(Volume);
//exercise 2
let x1 = prompt("Enter x1");
let x2 = prompt("Enter x2");
let y1 = prompt("Enter y1");
let y2 = prompt("Enter y2");
const xdif = x2 - x1;
const ydif = y2 - y1;
let sumsqr = xdif * xdif + ydif * ydif;
let d = Math.sqrt(sumsqr);
console.log(d);

//let d = Math.sqrt((x2 - x1) ** 2) * (y2 - y1) ** 2;
//console.log(d);
