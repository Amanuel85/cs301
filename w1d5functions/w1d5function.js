"use strict"
let prompt = require("prompt-sync")();


/*
1. checkPrime
a. Write a function named checkPrime that accepts a parameter and returns true if the
argument is a prime number otherwise returns false.
b. Now write a program that prompts user to input a number and calls the function
checkPrime to see if the entered number is a prime number or not.
input : number;
process:  start for loop from 2 to one less the number 
if number divided by i === 0 then it is not prime numbe
*/
//a


function isPrime(n){
    let prime = true;
         for(let i = 2;i<n;i++){
             if(n%i===0){
             prime =  false}
         }
return prime;}
console.log(isPrime(11));
//b
let number = +prompt("Enter a number: ")
console.log(isPrime(number))

/* question 2 volumeOfCylinder
a. Write a function, areaOfCircle, that computes and returns area of a circle based on the
value of input radius.
b. Write a function, volumeOfCylinder, that compute volume of a cylinder and making use
of the areaOfCircle function.
c. Write code to call and test your function
input 
*/
//a

 function areaOfCircle(radius){
    let circleArea = Math.floor(Math.PI*(radius*radius))
    
    return circleArea
    //console.log(circleArea)
}
console.log(areaOfCircle(5))

//b  
function volumeOfCylinder(radius, height){
    let cylnderVolume = Math.floor((areaOfCircle(radius)* height))
    //console.log(cylnderVolume)
    return cylnderVolume
}
//volumeOfCylinder(5,2)
console.log(volumeOfCylinder(5,2))
// c
let radius = +prompt("Enter radius")
let height = +prompt("Enter height")
console.log("The radius of the circle is:",areaOfCircle(radius))
console.log("The volume of the cylnder is: ", volumeOfCylinder(radius,height))

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
    let areaofTriangle = Math.sqrt(s(s-a)*(s-b)*(s-c))
    
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


//console.log("The volume of the house is: ",)
