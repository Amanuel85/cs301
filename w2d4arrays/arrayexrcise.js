"use strict"
let prompt = require("prompt-sync")();
/*• Write code to create an array named scores and fill it with 5 test
scores 10, 20, 30, 40 and 50.
• Now write a function named findAverage, that takes an array as an
argument and return average of the array values.
• Call findAverage function passing array you created in step1 and save
the return result in a variable, average.
• Print the average, it should be 30 for this example.
• Create a second array filled with 10 random values between 0 to 10
and find the average of the array values.
• Make sure your program computes correct average for an array of any
size. */

// const scores = [10,20,30,40,50];
// let anyarray = Math.floor(Math.random()*10);
// //console.log(anyarray);
// const randomarray = []
// for(let i = 0;i<10;i++){
// randomarray[i]= Math.floor(Math.random()*10);
// }
// //console.log(randomarray);
// /**
//  * 
//  * @param {list} arr 
//  */
// function findAverage(arr){
//     let sum = 0 ;
//     let avg;
//     for(let i = 0;i<arr.length;i++){
//         sum += arr[i];
//     }
    
//     avg = sum/arr.length;
//     return   avg;
// }
// // //console.log(findAverage(scores))
// function checkPalindrome(str) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {  //madam
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);
// let randArray = [];
// let sum = 0
// for(let i =0;i<10;i++){
//     randArray[i] = parseInt(Math.random()*10)
//     sum += randArray[i]
// }
// let avg = sum/randArray.length
// console.log(avg)
// let fruits = ["Apple", "Orange"];
// fruits.push("Pear");
// console.log( fruits );
// function balanced (bracket){
//     let newarr = [];
//     for(let elem of bracket){
//         if (elm ==="("||elem === "[" || elem ==="{"){
//             bracket.pop(element)
//             newarr.push(element)
//         }
//     }
// for (let i = 0;i<newarr.length;i++){
//     if(newarr[i] !== bracket[i]){
//         return false}}
// return true}

// const myArray = ["Sam","am","I"];
// function revrsed(arr){
//     let newarr = arr.reverse()
//     newarr = newarr.join(" ")
// return newarr}
// console.log(revrsed(myArray))
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]];
//     console.log(matrix);
//     let sum = 0
//     for (let i = 0; i < matrix.length; i++) {

//     for (let j = 0; j < matrix[i].length; j++) {
//     //console.log(matrix[i][j]);
//     sum += matrix[i][j]
//     }
//     }
// console.log(sum)
// const arr = [1, 2, 3];
// for (const element of arr){
//     console.log("element: ", element);
//     console.log(arr);
//     console.log("shift: ", arr.shift());
//     console.log(arr);
// }
function revert(arr){
    let reverseArray =[];
    let len = arr.length
    for(let i = 0;i<len;i++){
    reverseArray[i] = arr[len-i-1]}
    return reverseArray
}
//console.log(revert([1,2,3,4,5,6]))
//console.log(ar.slice(3,6))
// function rotateLeft(arr){
//     let left = arr.shift();
//     arr.push(left)
//     return arr
// }
// console.log(rotateLeft(ar))

//console.log(rotateLeft(ar))
function rotateLeft(arr){
    let newArr = [];
    for(let i = 1;i<arr.length;i++){
        newArr[i-1] = arr[i]
    }
    newArr[arr.length-1] = arr[0]
return newArr}
//console.log(rotateLeft(ar))
let ar = [1,2,3,4,5,6];
let ar2 =[2,4,6,8,10,12]

function rotateRight(arr){
    let newArr = []
    for(let i = 0;i<arr.length-1;i++){
        newArr[i+1]= arr[i]
    }
    newArr[0] = arr[arr.length-1]
return  newArr}

//console.log(rotateRight(ar,3)) 
// function matrixAddition(a, b) {
//     let resultMatrix = [];
//     for (let i = 0; i < a.length; i++) {
//         let row = [];
//         for (let j = 0; j < a[i].length; j++) {
//             row.push(a[i][j] + b[i][j]);
//         }
//         resultMatrix.push(row);
//     }
//     return resultMatrix;
// }
// console.log(matrixAddition(ar,ar2))
let str = 'kayak'
function pilandrome  (str){
    let newstr = str.split("")
    let len = newstr.length
    //let piland = false
for(let i = 0;i<len;i++){
    if(newstr[i] === newstr[len-i-1]){
         return true }
        else {return false}
       }
}
//console.log(pilandrome(str))
let araytest = [ "a", "kayak", "racecar"]
//as = ("2 [1, 2, 5] [3, 4])

// function arrySplice(indec, arr,arr2){
// let nwarray = arr.splice(indec,0,arr2)
// return nwarray}
function comonsuffix(str1,str2){
    let len1 = str.length;
    let len2 = str.length;
    while(len > 0 ||len2 > 0){
        if(str[len-])

    }
}