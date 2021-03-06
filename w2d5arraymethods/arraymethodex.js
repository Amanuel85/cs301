"use strict";
"eslint-disable";
const { constants } = require("buffer");

// let fruits = []; // make an array

// fruits[99999] = 5; // assign a property with the index far greater than its length

// fruits.age = 25; // create a property with an arbitrary name
// //console.log(fruits["age"])
// let arr =[]
// arr[10] =10;
// arr[10000]= 20
// console.log(arr[11])

let myArray=['Sam','am','I'];
// myArray.reverse();
// let str  = myArray.join();
// consol.log(str);

// let arr = ['Bilbo', 'Gandalf', 'Nazgul'] ;
// let str = arr.join(); // glue the array into a string using ;
// console.log(str); // Bilbo,Gandalf,Nazgul
// str = arr.join("-");
// console.log(str); //Bilbo-Gandalf-Nazgul
function arrayJoin(arr,separator = " "){
     let rev = arr.reverse()
    let output = rev.join(separator)
    return output
}

console.log(arrayJoin(myArray))

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]];
//     console.log(matrix);
//     for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i]+[j]);
//     }
//     }