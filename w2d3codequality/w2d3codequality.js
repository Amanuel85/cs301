"use strict";
let prompt = require("prompt-sync")();

exports.isPrime = isPrime;
exports.areaOfCircle = areaOfCircle;
exports.volumeOfCylinder =volumeOfCylinder;
exports.houseVolume = houseVolume;
exports.livingVolume = livingVolume;
exports.roofVolume = roofVolume;
exports.triangleArea = triangleArea;
/* triangleArea roofVolume livingVolume houseVolume volumeOfCylinder
1. checkPrime
a. Write a function named checkPrime that accepts a parameter and returns true if the
argument is a prime number otherwise returns false.
b. Now write a program that prompts user to input a number and calls the function
checkPrime to see if the entered number is a prime number or not.
input : number;
process:  start for loop from 2 to one less the number 
if number divided by i === 0 then it is not prime number
//a
*/
/**
 * isprime 
 * @param {number} num the number to check if prime on not
 * @returns{boolean} returns if num is prime or not
 */
function isPrime(num){
    let prime = true;
         for(let i = 2;i<num;i++){
             if(num%i===0){
             prime =  false;} }
return prime;}
console.log(isPrime(11));
//1b
let number = +prompt("Enter a number: ");
console.log(isPrime(number));

/* question 2 volumeOfCylinder
a. Write a function, areaOfCircle, that computes and returns area of a circle based on the
value of input radius.
b. Write a function, volumeOfCylinder, that compute volume of a cylinder and making use
of the areaOfCircle function.
c. Write code to call and test your function
input 
*/
//a
/**
 * calculate radius.
 * @param {radius} radius The radius of the circle.
 * @param {number} num2 The second number.
 * @returns {number} The area of the circle.
 */
 function areaOfCircle(radius){
    let circleArea = (Math.PI*(radius*radius));
    
    return circleArea;
    //console.log(circleArea)
}
console.log(areaOfCircle(5));

//b  
/**
 * calculate the volume 
 * @param {number} radius radius
 * @param {number} height  the hieight
 * @returns{number} it returns the volume of the object
 */
function volumeOfCylinder(radius, height){
    let cylnderVolume = Math.floor((areaOfCircle(radius)* height));
  
    return cylnderVolume;   //console.log(cylnderVolume)
}
//volumeOfCylinder(5,2)
console.log(volumeOfCylinder(5,2));
// c
let radius = +prompt("Enter radius");
let height = +prompt("Enter height");
console.log("The radius of the circle is:",areaOfCircle(radius));
console.log("The volume of the cylnder is: ", volumeOfCylinder(radius,height));

/*
3.	Write a program that calculates the total volume of a house, including the volume of the roof space. Your program must allow the user to 
enter width, depth, height and sweep as shown in figure below. 
houseVolume = livingVolume + roofVolume
	livingVolume = width * height * depth
	roofVolume = triangleArea*depth
	triangleArea = √s(s−a)(s−b)(s−c)
	s = (a+b+c)/2
*/
/**
 *  calculates the volume of huouse
 * @param {number} width  width of the house 
 * @param {number} height  // 
 * @param {number} depth //
 * @param {number} sweep  sweep of the roof
 * @returns{number} retruns the living room  volume + houseVolue
 */ 
function houseVolume(width, height, depth, sweep){
    const lvol = livingVolume(width, height, depth); 
    const rvol = roofVolume(sweep, width, depth);
    return  lvol + rvol;  
}

/**
 * calculate living room volume 
 * @param {number} width //
 * @param {number} height //
 * @param {number} depth //
 * @returns{number} width multiplied by height and depth
 */
function livingVolume(width, height, depth){ 
    return width * height * depth;
}

/**
 * 
 * @param {number} sweep used as the two side of the triangle
 * @param {number} width  //
 * @param {number} depth house depth
 * @returns{number} // calls triangle area function and multiply 
 * the result by the other parameters
 */ 
function roofVolume(sweep, width, depth){
    const rvol = triangleArea(sweep, sweep, width) * depth;
    return rvol;
}
/**
 * 
 * @param {number} sideA // sweep
 * @param {number} sideB // sweep 
 * @param {number} sideC // widht of the house 
 * @returns {number} the triangle Area that will be called 
 * in the roofVolume function
 */
function triangleArea(sideA, sideB, sideC){
    const sidCalc = (sideA + sideB + sideC)/2;
    const product = sidCalc * (sidCalc - sideA) * (sidCalc - sideB) * (sidCalc - sideC);
    const result = Math.sqrt(product);
    return result;  
}

console.log("expect 2080", houseVolume(16,10,10,10));
//roof:  8 * 6 = 48, * 10 = 480
// living 10*10*16 = 1600
//tot 2080