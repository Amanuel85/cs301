"use strict";
"eslint-disable"
/*
A porcupine number is a prime number whose last digit is 9 and the next prime number that
follows it also ends with the digit 9. For example, 139 is a porcupine number because:
a. it is a prime
b. it ends in a 9
c. The next prime number after it is 149 which also ends in 9.
Write a method named findPorcupineNumber which takes an integer argument n and
returns the first porcupine number that is greater than n. So findPorcupineNumber(0)
would return 139 (because 139 happens to be the first porcupine number) and so would
findPorcupineNumber(138). But findPorcupineNumber(139) would return 409 which
is the second porcupine number.
#procupine_number 1111111111111111
 */

function findPrime(n){
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false
        }
    return true}
} /// uncoment 
console.log(findPrime(159))

function lastDigit(num){
    let lastdgt;
    lastdgt = num%10

return lastdgt}
console.log(lastDigit(138))

function findPorcupineNumber(number){
let arr =[];
let secondPorcu = 0
while(secondPorcu <2){
    number = number+1
    if(findPrime(number)=== true && lastDigit(number)===9){
        arr.push(number)
        secondPorcu +=1
    }
}
return arr}
console.log(findPorcupineNumber(138))


/* Given an array of integers nums and an integer target, return indices of the two numbers such
that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the
same element twice. You can return the answer in any order.
*/

function sumTarget(arr,num) {
    let newarr = []
    for (let i =1 ;i<arr.length;i++){
        if (arr[0]+ arr[i]=== num){
            newarr.push(0)
            newarr.push(i)} 
        
        }
    
   
 return newarr }
let nums =[2,7,11,5]
//console.log(sumTarget(nums,9))

/*Write a function named mostFrequent() that given an array, finds the most frequent element
in it. If there are multiple elements that appear maximum number of times, returns any one of
them.
#most_frequent */
function mostFrequent(arr){
let count = 0
let frequent  = 1 
let item
for(let i = 0 ;i<arr.length;i++){
    for(let j =i;j<arr.length;j++){
        if(arr[i] === arr[j]){
            count +=1}
            if(frequent < count){
                frequent = count
            item = arr[i]}
       }
      count = 0
       } 
       
       return (`item ,${item},${frequent},times` ) }

let arr1 = ['b','b','b','b','b','a','a','a','a','a','a','a',1,3,4,5,6,7]

console.log(mostFrequent(arr1))

//const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let mf = 1;
// let m = 0;
// let item;
// for (let i=0; i<arr1.length; i++)
// {
//         for (let j=i; j<arr1.length; j++)
//         {
//                 if (arr1[i] == arr1[j])
//                  m++;
//                 if (mf<m)
//                 {
//                   mf=m; 
//                   item = arr1[i];
//                 }
//         }
//         m=0;}
// console.log(`${item} ( ${mf} times ) `) ;

/*Given an array of integers, write a function that finds the pair in array whose sum is closest to 0.
If there are more than one pair, return any pair.
For e.g., [4,2, -1,3,-2,-3] → [2,-2] */
let ar = [4,2, -1,3,-2,-3,-4]
function closeToZero(arr) {
    let newarr =[]
    for (let i = 0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]+arr[j]===0){
                //break
                newarr.push(arr[i])
                newarr.push(arr[j])
                
            }
        }
    }
return newarr }
//console.log(closeToZero(ar))
 /* 5 Write a function, that given two arrays representing two non-negative integers with digits, adds
the two numbers, and return it as an array. */
function addTwoArray(arr,arr1){
    arr = +arr.join("")
    //arr = 
    arr1 = +arr1.join("")
    return arr+arr1
}
//console.log(addTwoArray([1,1], [9,9] ))


/*7. Given a positive integer, return its corresponding column title as appear in an Excel Sheet.
For example:
1 →A, 2→B, 3→C,…,26→z,27→AB, →28->AB, … */

function numToExcel(n){
    let str = ""
    while(n>0){
        n--
        str = String.fromCharCode(65+(n%26))+str
        n = Math.floor(n/26)
    }
return  str}
console.log(numToExcel(702))

/*Given a column title as appear in an excel sheet, return its corresponding column number.
#excel_sheet_column_number  Input Output A 1 AB->28 */
//function fromExcelToNumber(str){
    //let str  = String.}
    var titleToNumber = function(s) {
        // s is a string, but basically converts to a number in base 26 
        // also instead of zero we have 26 
        const dict = {
            A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14,
            O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
        }
        let number = 0;
    
        for (let i = 0; i < s.length; i++) {
            number = number*26 + dict[s[i]];
        }
        return number;
    };
   //console.log(titleToNumber("ZZ"))

   /*Given an array containing n distinct numbers taken from 0,1,2,…,n, find the one that is missing
from the array.
#missing_number  [9,6,4,2,3,5,7,0,1] 8
*/
function findMissingNum(arr){
    let len = arr.length
    let total = len*(len+1)/2
    ///let sum = 0
    for(let i = 0;i<len;i++){
        total = total-arr[i] 
    
    } return  total}
//console.log(findMissingNum([9,6,4,2,3,5,7,0,1] ))
// function getMissingNo(a, n) {
  
//     let total = Math.floor((n + 1) * (n + 2) / 2);
//     for (let i = 0; i < n; i++)
//         total -= a[i];
//     return total;
// }

// // Driver Code

// let arr = [ 1, 2, 4, 5, 6 ];
// let n = arr.length;
// let miss = getMissingNo(arr, n);
// console(miss);
/* 11 Given a sorted array and a target value, return the index if the target is found. If not, return the
index where it would be if it were inserted in order. */

// const  searchInsert = function(nums, target) {
//     let l = 0;
//     let r = nums.length - 1;
//     let middle = Math.floor((r + l) / 2);
//     if (nums[l] > target) return 0;
//     if (nums[r] < target) return r + 1;
//     while (nums[middle] !== target && l < r) {
//         if (nums[middle] < target) {
//             l = middle + 1;
//         } else {
//             r = middle;
//         }
//         middle = Math.floor((r + l) / 2);
//     }
//     return middle;};

function SearchIndex(arr,target){
    let firstIndx = 0;
    let lastIndx = arr.length-1;
    let middleIndx = Math.floor((firstIndx+lastIndx)/2)
    if (target > arr[lastIndx]){
        return lastIndx+1;}
    if(target <arr[firstIndx]){
        return 0;}
        while(firstIndx < lastIndx && arr[middleIndx]!== target){
        if (arr[middleIndx] < target){
             firstIndx = middleIndx+1}
        else{lastIndx = middleIndx}
        middleIndx = Math.floor((firstIndx+lastIndx)/2)}
        return middleIndx
}
/*
[1,3,5,6], 5 2
[1,3,5,6], 2 1
[1,3,5,6], 7 4
[1,3,5,6], 0 
*/
// console.log(SearchIndex([1,3,5,6], 7 )) 

/* 12 Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum. 
[-2,1,-3,4,-1,2,1,-5,4] */

function contiguousSum(arr){
    let max_sofar  = 0 ;
    let max = 0;
    for(let i =0 ;i<arr.length;i++){
        max = max+arr[i]
        if(max_sofar < max){
            max_sofar = max
        }
        if(max < 0){
            max = 0
        }
    }
return max_sofar}
console.log(contiguousSum([-2, -3, 4, -1, -2, 1, 5, -3]))

/* 13. Given an array of integers and an integer k, find out whether there are two distinct indices i and
j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most
k. 
nums=[1,2,3,1], k=3 true
*/
function distinctIndex(arr,k){
    //let newarr = arr.slice()
    for(let i = 0 ;i<arr.length;i++){
        for (let j = i ;j<arr.length;j++){
            if(arr[i]=== arr[j]){
             if(Math.abs(i-j) === k){
                 return true
             }
            }
        }
    }
return false }
console.log(distinctIndex(nums= [1,2,3,1,2,3],2))

/* 14 Given a list of words and two words word1 and word2, return the shortest distance between
these two words in the list.
#shortest_word_distance
Assume the words ["practice", "makes", "perfect", "coding", "makes] 
Note: You may assume that word1 does not equal to word2, and word1 and word2 are both in
the list.
*/

//function shortDisBtwnWords(){}

/*  15 Given an array nums, write a function to move all 0's to the end of it while maintaining the
relative order of the non-zero elements.
#move_zeroes
Example:
Input: [0, 1, 0, 12, 3]
Output: [1,3,12,0,0]
Note: you must do this in-place without making a copy of the array.
*/

/* 16 Write a function that takes a string as input and reverse only the vowels of a string.
# reverse_vowels_of_a_string */
// function reverseVowel(str){
//     let len = str.length ;
//     let revrseWord = " "
//     for(let i = len;i>=0;i--)
    

// }
const reverseVowels = function(s) {
    const LEN = s.length;
    const str = [...s];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const rev = [];
    for (let i = 0; i < LEN; i++) {
      if (vowels.includes(s[i])) { rev.push(s[i]); }
    }
    for (let i = 0; i < LEN; i++) {
      if (vowels.includes(str[i])) { str[i] = rev.pop(); }
    }
    return str.join('');
  };
  console.log(reverseVowels("Hello"))