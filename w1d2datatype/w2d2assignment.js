"use strict";
let prompt = require("prompt-sync")();

// Question 1

let quarts = prompt("What is the  volume in quarts ?:");
quarts = Number(quarts);
let litter = quarts * 0.946;
console.log(`The volume in litter is ${litter}`);

// Question  2
let distKm = prompt("What is the distance in Km ?:");
distKm = Number(distKm);
let distMile = distKm * 0.62;
console.log(`The distance in mile is ${distMile}`);

//Question 3

const numberOfboxes = prompt("Enter total number of boxes: ");
const boxesPerstack = prompt("Enter number of boxes in each stack: ");
let numberofStack = numberOfboxes / boxesPerstack;
let remainder = numberOfboxes % boxesPerstack;
if (remainder == 0) {
  numberofStack = numberOfboxes / boxesPerstack;
} else {
  numberofStack = parseInt(numberofStack) + 1;
}
console.log(
  `For ${numberOfboxes} boxes if you put ${boxesPerstack} boxes per stack you need ${numberofStack} stacks`
);

// Question 4

const begnningOdometer = prompt("Enter beginning odometer reading: ");
const endingOdometer = prompt("Enter ending odometer reading: ");
const galonsOfgas = prompt("Enter the total number of galons of gas: ");
const totalMilage = endingOdometer - begnningOdometer;
const milagePergalon = Math.ceil(totalMilage / galonsOfgas);

console.log(`Your beginning mileage was ${begnningOdometer}, your ending mileage was ${endingOdometer} and 
 you used ${galonsOfgas} galons of gas, so your milage per gallon is ${milagePergalon} miles/galon`);

//Question 5
const age = prompt("What is your age?: ");
const maxHeartrate = 220 - age;
const slowestRate = (maxHeartrate * 65) / 100;
const fastestRate = (maxHeartrate * 85) / 100;
console.log(`For your age your maximum heart rate is ${maxHeartrate},
 your slowest heart rate is :${slowestRate} and your fastest  heart rate is:${fastestRate} per minute`);
