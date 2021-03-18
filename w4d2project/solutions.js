'use strict'

exports.divisibleSumPairs =divisibleSumPairs;
exports.mostFrequentSight = mostFrequentSight
exports.countSockPair = countSockPair;
exports.computeHeight = computeHeight;

// Q1 
/**
 * @augments Tam 
 * @param {array} arr 
 * @param {number} k 
 * @returns 
 */
function divisibleSumPairs(arr, k) {
 let count = 0;
 for (let i = 0; i < arr.length - 1; i++) {
 for (let j = i + 1; j < arr.length; j++) {
 if ((arr[i] + arr[j]) % k === 0) {
 count++;
 }
 }
 }
 return count;
}
console.log(divisibleSumPairs([1, 2, 3, 4, 5, 6], 5));

// Q2 by Amanuel 
/**
 * @author Amanuel Abuhay <aabuhay.miu.edu>
 * @param {Array} arr input takes array
 * @returns {number} // the most frequent item
 */
function mostFrequentSight(arr){
    let count = 0;
    let frequent  = 1;
    let item;
    for(let i = 0 ;i<arr.length;i++){
        for(let j =i;j<arr.length;j++){
            if(arr[i] === arr[j]){
                count +=1;}
                if(frequent < count){
                    frequent = count;
                item = arr[i];} 
           }
          count = 0;
           } 
           
           return (frequent) }

           console.log(mostFrequentSight([1,4,4,4,5,3]))
//Q3  by Kisanet
/**
 * @author Kisanet Tekie <ktekie.miu.edu>
 * @param {Aray} arr //arr is the input 
 * @returns{number } how many pairs
 */
function countSockPair(arr) {
    let counter = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
    count = 1;
    for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
    count++;
     }
     }
    if (count % 2 == 0) {
    counter++;
     }
     }
    return counter;
    }
    console.log(countSockPair([10, 20, 20, 10, 10, 30, 50, 10, 20]))
    console.log(countSockPair([1,2,1,2,1,3,2]))


    // q4 
/**
 * @author Kisanet Tekie <ktekie.miu.edu>
 * @param {Number} height is the input 
 * @param {Number} cycles is the input
 * @returns how height after n growth cycle
 */
 function computeHeight(height, cycles) {
 
    let year = cycles / 2;
    
    for (let i = 0; i < year; i++) {
    
    height = height * 2;
    
    height = height + 1;
    }
    return height;
    }
    console.log(computeHeight(1,4));

    //q5
    // const charges = [{custId: 1,charges:[5,7,3]}, {custId: 2, charges: [20,60,50,30]}]

    //Q6
    /**
     * 
     * @param {Array} arr 
     * @returns {number}
     */
    function findMinDistance(arr) {
        let minDist = Number.MAX_VALUE;
        let distance = 0;
        for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
        distance = Math.abs(j - i);
        minDist = Math.min(distance, minDist);
        break;
        }
        }
        }
        if (minDist === Number.MAX_VALUE) {
        return -1;
        }
        return minDist;
       }
       console.log(findMinDistance([3, 2, 1, 2, 3]));