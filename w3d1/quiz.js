"use strict"
/*eslint-disable*/

/*
1. Which of the following are destructive array methods?
a. pop // destructive 
b. push// destructivr 
c. shift//destrctive 
d. slice//
e. splice // destructive
f. concat// 
g. reverse //destructive
h. join
i. forEach
j. sort //destructive
*/
/*
Get the file arrayReviewTests.js from the 301DemosNew/mochaTests folder and write code in your IDE
to make the tests pass for the following. Put these in your w3d1ObjectsStrings folder that will hold
your work for today.
*/
/*
2. Write a function findMin that takes an array as a parameter and returns the minimum value.
Use a for .. of loop.
*/
function findMin(arry){
    let min = arry[0] ;
    for(let i = 0 ;i<arry.length;  i++){
        if( arry[i] < min){
            min = arry[i]
        }
        }
    return min}
console.log(findMin([7, 10, 100, 88, 4]))

/*
3. Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum
of values on the odd indices. 
*/
function sumOddIndicesValues(arry){
    let len = arry.length
    //let oddIndex ;
    let sum =0
    for (let i = 0 ; i<len;i++){
        if(i%2!==0){
            //oddIndex = oddIndex
            sum = sum + arry[i]

        }
    }
return sum}
console.log(sumOddIndicesValues([1,3,4,6,4,7,2]))//4+6+7