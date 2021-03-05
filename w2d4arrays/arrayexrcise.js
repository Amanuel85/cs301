"use strict"
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
// //console.log(findAverage(scores))

function filterRange(arr,a,b){
    let nwArry //= [];
    for (let i = 0 ;i<arr.length;i++){
        if(arr[i] >= a && arr[i] <= b){
           
       } nwArry[i] = arr[i]
    }
return nwArry}
console.log(filterRange([0, 100, 3, 6, -555], 6, 60))