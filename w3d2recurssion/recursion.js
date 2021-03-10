"use strict";
exports.power =power;
exports.reverse = reverse
exports.countDigits =countDigits
//Write recursive functions to 

// //calculate the power of any base
/**
 * 
 * @param {number} a takes number input
 * @param {number} b ..
 * @returns{number} ..
 */
function power(a,b){
    if(b === 1){
        return a;
    }
    else{return a*power(a,b-1)}
}
console.log(power(10,4));

//count the digits of a given number */
/**
 * 
 * @param {number} num , it takes number input
 * @returns{number} returns the count of digits
 */
function countDigits(num){
    if (num === 0){
        return 0;
    }
    else  {return 1+ countDigits( parseInt(num/10)); }
}
console.log(countDigits(12348));



//reverse a given string. 
/**
 * 
 * @param {string} str takes string 
 * @returns {string} returns reversed string
 */
function reverse(str){
    if(str === ""){
        return "";
    }
    else {return reverse(str.substr(1))+str.charAt(0);}
}
console.log(reverse("Hello"));