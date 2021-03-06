"use strict";

exports.insertArray = insertArray;
//exports.getMiddle = getMiddle;
exports.isArrayEqual = isArrayEqual;
exports.isPalindrome = isPalindrome;
exports.reverse2String = reverse2String


/* 0.  Write a function that will take an index and two arrays and splice the 
second array into the first at the given position 
*/
//(2, [1, 2, 5], [3, 4]), [1, 2, 3, 4, 5]
/**
 * 
 * @param {number} index of place to insert
 * @param {Array} source the array to be spliced
 * @param {Array} insert the array to be inserted
 * @returns {Array} the resulting array
 */
function insertArray(index, source, insert){

    source.splice(index,0,...insert);
return source;}
console.log(insertArray(2, [1, 2, 5], [3, 4]));

//Write a function, isArrayEqual, that returns true if two arrays have === elements, else false;
//([1, 2, 3], [1, 2, 3]), true)

/**
 * 
 * @param {Array} arr1  first array
 * @param {Array} arr2  second array
 * @returns{Boolean} if the two arrays are eaqual or not 
 */
function isArrayEqual(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false ;
    }
    for (let i = 0;i<arr1.length;i++){
        if (!arr1.includes(arr2[2])){
            return false ;}}
return true; }
//console.log(isArrayEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]));

//2 Write a function that checks if an array is palindrome by using push and pop array methods to
// reverse the array and then isArrayEqual method you wrote for 1.
/**
 * 
 * @param {array} array input array
 * @return {array}//
 */
 function isPalindrome (arr){
    let len = arr.length ;
if( len%2 === 0){
    return false ;
}
for (let i = 0; i<arr.length;i++){
    if(arr[i]!== arr[len-i-1]){
        return false ;
    }
}
 return true;}

//console.log(isPalindrome(["a","b","a"]));

//["Quick", "Brown", "Fox"] ), "Fox_Brown_Quick");
/*
Write a function, reverse2String,  that transforms a given array as following. Use appropriate array methods. 
Input (Array) 	Output (String) 
['Quick', 'Brown', 'Fox'] 	"Fox_Brown_Quick" */
function reverse2String(array,sep =" "){
    let rev = array.reverse()
    let arrayJoin = rev.join("_")
    return arrayJoin

}
console.log(reverse2String(["Quick", "Brown", "Fox"] ))