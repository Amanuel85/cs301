"use strict";

exports.insertArray = insertArray;
//exports.getMiddle = getMiddle;
exports.isArrayEqual = isArrayEqual;
exports.isPalindrome = isPalindrome;
exports.reverse2String = reverse2String;
exports.enhancedIncludes = enhancedIncludes;
exports.ssReverse = ssReverse;
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
 * @param {array} arr input array
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
/**
 * 
 * @param {Array} array //
 * @param {Array separator} sep //
 * @returns{String}//
 */
function reverse2String(array,sep =" "){
    let rev = array.reverse()
    let arrayJoin = rev.join("_");
    return arrayJoin;

}
//console.log(reverse2String(["Quick", "Brown", "Fox"] ));
/*
    4.      Write a JavaScript function named enhancedIncludes that takes two parameters, an array, 
    and a value to search in the array and return an array result with three values.
    a.	First value is boolean representing if the search value exists in the array.
    b.	Second value is the first index of value found in the array or -1
    c.	Third value is the last index of value found in the array or -1.
*/
//([1, 2, 3, 4, 2], 2 ), [true, 1, 4])
//input array, value to search;
/**
 * 
 * @param {Array} arr the given array
 * @param {item} item the item to check in the array
 * @return {Array} returns an array
 */
function enhancedIncludes(arr,item){
    let searchExist ;
    let firstaIndex;
    let lastIndex;
    let newarr = [];
    for(let i = 0;i<arr.length;i++){
        if(item === arr[i]){
            searchExist = true;
            firstaIndex = arr.indexOf(item);
            lastIndex = arr.lastIndexOf(item);}}
            newarr.push(searchExist);
            newarr.push(firstaIndex);
            newarr.push(lastIndex);
        return newarr; }
//console.log(enhancedIncludes([1, 2, 3, 4, 2], 2 )) 



// /* 5. Write a function, ssReverse, that returns reversed copy of a given array (original array should remain intact). 
// Do this without using reverse method, instead use splice and slice methods.  */
// describe("ssReverse", function () {

//     it("[1, 2, 3, 4]", function () {
//         assert.deepStrictEqual(arrays.ssReverse([1, 2, 3, 4 ]), [4,3,2,1] );
//     });
// });
/**
 * it reverse and output the array
 * @param {Array} arr the input array
 * @returns{Array}    the output array
 */
function ssReverse(arr){
    let newarray = [];//arr.slice()
    let len  = arr.length;
    for (let i =0 ;i<len;i++){
        newarray[len-i-1] = arr[i];
    }
    return newarray;
}
console.log(ssReverse([1,2,3,4]));


/*   6. (EC) Write a function that merges two sorted arrays into one single sorted array.
  Make use of shift and push array methods. */
describe("merge via shift and push", function () {

    it("shiftPush helper", function () {
        console.log(arrays.shiftPush([1, 3, 8], 4, []));
        assert.deepStrictEqual(arrays.shiftPush([1, 3, 8], 4, []), [1, 3]);
    });

    it("138 merge with 059 ", function () {
        console.log(arrays.merge([1, 3, 8], [0, 5, 9]));
        assert.deepStrictEqual(arrays.merge([1, 3, 8], [0, 5, 9]), [0, 1, 3, 5, 8, 9]);
    });

    it("138 merge with 059 mergeTwo ", function () {
        console.log(arrays.mergeTwo([1, 3, 8], [0, 5, 9]));
        assert.deepStrictEqual(arrays.mergeTwo([1, 3, 8], [0, 5, 9]), [0, 1, 3, 5, 8, 9]);
    });
});
function mergeTwo(arr1,arr2){
    
}