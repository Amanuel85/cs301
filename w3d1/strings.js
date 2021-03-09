"use strict"
exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkSpam =checkSpam;
exports.titleCase = titleCase;
/*Implement the following and test your code using the Mocha test file objectStringTests.js in the
mochaTests folder in the 301DemosNew repository.. Follow the standard submission instructions.
1. Write the code, one line for each action:
a. Create an empty object car
b. Add the property name make with value Toyota
c. Add the property name model with value Camry
d. Print the object
e. Without modifying the code structure of the object, change the value of the model to
RAV4.
f. Print the object
g. Without modifying the code structure of the object, Remove property make from the
object 
h. Print the object
*/
const car = {};
car.make = "Toyota";
car.model = "Camry";
console.log(car);
car.model = "RAV4";
console.log(car);
delete car.make;
console.log(car);

/* 2 Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
It can assume that the only properties it needs to check are name and age */
let sam1 = {["name"]:"Sam",age:10};
let sam2 = {name:"Sam",age:10};
let john = {name:"John",age:10};

/**
 * 
 * @param {obj1} obj1 takes object input
 * @param {obj1} obj2 takes object input
 * @returns{Boolean} //
 */
function isPersonEqual(obj1,obj2){
    if(obj1.name === obj2.name && obj1.age === obj2.age){
        return true;
    }
    else{return false;}
}

/* 3. Write the function countProperties(obj) which returns number of properties of an object. */
function countProperties(obj){
    let count = 0
    for (let key in obj){
        console.log(key)
        count = count+1
    }
return count }
const bob = { name: "Bob", age: 10 };
console.log(countProperties(bob));

/* Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize",
otherwise return false. */
//let string1 = "there is a prize in the lottery"
/**
 * 
 * @param {str} str //
 * @returns{boolean} if str contains the specified text 
 */
function checkSpam(str){
    let word = str.includes("lottery",0) || str.includes("prize",0);
    return word ;
}
// console.log(checkSpam(string1))

/* 5. Write a function named suffix that returns the common suffix of two strings. For example, the
common suffix of “swimming” and “walking” is “ing”. This function takes two parameters and
returns the common suffix. */
// function suffix(str,str2){
//     let word1 = str.endsWith();
//     let word2 = str.endsWith()
// }

/*
Write a function named titleCase with one parameter named s. This function returns a copy of s
but with the first letter of each word capitalized. */
/**
 * 
 * @param {string } str takes string 
 * @returns{string} 
 */
function titleCase(str){
    return str.charAt(0).toUpperCase() + str.slice(1);

}
   
console.log(titleCase("jackson"))