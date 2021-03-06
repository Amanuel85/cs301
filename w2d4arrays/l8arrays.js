 "use strict";

const { kMaxLength } = require("buffer");
const { resourceUsage } = require("process");

 let prompt = require("prompt-sync")();

 exports.addends = addends;
 exports.getMiddle = getMiddle;
 exports.rotateLeft = rotateLeft;
 exports.rotateRight = rotateRight;
 exports.rotateNRight =rotateNRight;
 exports.filterRange = filterRange; 
 // 1 Write a function addend(arr) that accepts an array of numbers 
 //as parameters and returns the sum of firs and last elements of the array.

/**
 * the function takes array of input and return one number
 * @param {Array} arr // array input 
 * @returns{number} returns the sum of first and last element of array
 */
function addends(arr){
    //let sum;
    //for (let i = 0;i<arr.length;i++){
    //}
    let sum = arr[0]+arr[arr.length-1];
return sum;
}
//let aray = [1,2,3,4,10];
//console.log(addends(aray));

//2
/** this function takes array if it has even 
 * @param{array} arr  takes arrays
 * @returns{number}// returns the middle value of the array
 * or the average of the two middle value
 */
function getMiddle(arr){
    let midindex;
    let midvalue;
     if(arr.length %2 !==0 ){
     midindex = Math.floor(arr.length/2);
     midvalue = arr[midindex];
    }
    else {midindex = Math.floor(arr.length/2);
        midvalue = (arr[midindex]+(arr[midindex-1]))/2;}
return midvalue;}

//console.log(getMiddle([-1, -100, 1, 2, 3, -55]));

// 3 3. Write a function to rotate the elements in an array to the left by 1.
//[-1, -100, 1, 2, 3, -55]), [-100, 1, 2, 3, -55, -1]

//let arrtest = [-1, -100, 1, 2, 3, -55];
//let arrtest2 = arrtest.shift();
//arrtest.push(arrtest2);
//console.log(arrtest);
/**
 * @param {aray} aray takes array 
 * @returns{array} array is rerurned after shifted left 
 * 
 */
function rotateLeft(aray){
let leftrotate = aray.shift();
aray.push(leftrotate);
return aray ;
}
//console.log(rotateLeft([-1, -100, 1, 2, 3, -55]));

//4  Write a function to rotate the elements in an array to the right by 1
//[-1, -100, 1, 2, 3, -55]), [-55, -1, -100, 1, 2, 3]
/**
 * 
 * @param {array} array takes array of elements
 * @returns {array } retruns an array rotated right by 1 
 */
function rotateRight(array){
    let rightrotate = array.pop();
    array.unshift(rightrotate);
return array ;

}
//console.log(rotateRight([-1, -100, 1, 2, 3, -55]))

// Modify rotate functions to rotate array by n times where, n is the second parameter passed in
// the function (optional).
//5a 
/**
 * //
 * shift the array by n times in the right 
 * @param {array} array //
 * @param {numer} n //
 * @returns{Array}//
 */
function rotateNRight(array,n=1){
    let rightrotateN
    for(let i = 1;i<=n;i++){
        let rightrotateN = array.pop();
        array.unshift(rightrotateN);}
    return array ;}

   // [-1, -100, 1, 2, 3, -55], 3), [2, 3, -55, -1, -100, 1, 2]
   //console.log(rotateNRight([-1, -100, 1, 2, 3, -55],3));

/* 6
Write a JavaScript program that number input from the user at once as comma separated values
and stores it into an array and do following operations
a. Filters out negative values
b. Maps the filtered elements to sum of its digits (optional)
c. Reduce to get sum of all the elements (optional)
*/
/**
 * 
 * @param {strint} input 
 * @returns {number}//
 */

/**
 * 
 * @param {string} input  //
 * @returns{number}// number
 */
function fmrString(){
let input = prompt("enter list of arrays ");
let arryList = input.split(',');
let postiveElement = [] ;
//let arryList = Array(input);
//console.log(arryList[0]+arryList[1]);
for(let i = 0;i<arryList.length;i++){
    arryList[i] = parseInt(arryList[i]);
}
postiveElement = arryList.filter(item =>item>=0);
return postiveElement;}

/*for(let i =0;i<arryList.length;i++){
    if(arryList[i]>=0){
        postiveElement[i]= arryList[i]
    }
    */
//console.log(fmrString(input))

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with
// values >= a and values<= b and return a result as an array.
/*
/* 7.    Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and
lower or equal to b and return a result as an array. */

       // assert.strictDeepEqual(arrays.filterRange([0, 100, 3, 6, -555], 6, 160), [100, 6]);
       /**
        * 
        * @param {Array} arr //
        * @param {number} a //
        * @param {number} b //
        * @returns{Array}// ti returns array 
        */
function filterRange(arr,a,b){
    let nwArry = [] ;
    for (let i = 0 ;i<arr.length;i++){
        nwArry = arr.filter(item=> item >= a)
     
return nwArry}}
//console.log(filterRange([0, 100, 3, 6, -555], 6, 60));

//8. Write a function that takes an array of strings and returns array of palindrome strings only.

