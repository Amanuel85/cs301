"use strict"
/*Write a JavaScript function isSumOfPrimesEven that takes an array of positive integers
as an argument and returns true if the sum of all the prime elements in the given array is
even otherwise returns false. If the array is empty or if the array does not contain any
prime element it should return false. */
// function isPrime(num){
//     let prime 
//     for(let i = 2;i<num;i++){
//         if(num%i === 0){
//             //prime = false;
//             prime = false
//         }
//         else{prime =  true}
//     }
// return prime}
//console.log(isPrime(4))
function isPrime(num){
    let prime = true;
         if (num ===1){
             prime = false
         }
         for(let i = 2;i<num;i++){
             if(num%i===0){
             prime =  false};
         }
return prime;}
//console.log(isPrime(4));

// function isSumOfPrimesEven(arr){
//     let sum = 0;
//     //let sumEven 
//     for(let  element of arr){
//         if(isPrime(element)){
//             sum = sum+ element
//         }
//     }
//     if (sum % 2 === 0){
//         return true
//     }
//     else{return  false}
    
// }

// console.log(isSumOfPrimesEven([1,2,2,3,9] ))

/* An array is called a perfectly odd array if every element at the odd indices of the array is
also odd. Write a function named isPerfectlyOdd that takes an array of integers as a
parameter and checks whether it is perfectly odd. Return false if the array is an empty array.*/
// function isPerfectlyOdd(arr){
//     //let oddinxes =[]
//     let perfectodd ;
//     for (let i =0 ;i<arr.length;i++){
//         if(i%2!==0){
//             //oddinxes.unshift(i)
//             if(arr[i]%2 !==0){
//                 perfectodd = true;
//             }
//             else{perfectodd = false}
//         }
//     }
// return perfectodd}
// console.log(isPerfectlyOdd([3,9,9,5,5,7,9]))

/* Write a function that given an array of integers returns the sum of elements at the prime
indices. For e.g. for an array [1,5,6,7,8,3] result would be a sum of 6+7+3=16 which are values
at the prime indices of the array. */

function indexOfPrime(arr){
    let sum = 0
    for (let i =1 ;i<arr.length;i++){
        if(isPrime(i)){
            sum = sum+arr[i]
        }
    }
return sum}
//console.log(indexOfPrime([1,5,6,7,8,3,4,2]))
/*Write a function that takes a string parameter and returns the middle character of the
string. If string is of even length then function should return the middle two characters. */
function middlValue(str){
    let len = str.length;
    let middle = Math.floor(str.length/2)
    if(len%2 !==0){
        return  str[middle]

    }
    else {return str[middle] + str[middle-1]}
}
//console.log(middlValue("Hellos"))
/*5. Write a function isSumEqual that takes two array parameters and returns true if the
sum of elements in both arrays are equal.*/
function isSumEqual(arr,arr2){
    let sum = 0 ;
    let sum1 = 0;
    for( let elem of arr){
        sum = sum+elem
    }
    for (let element of arr2){
        sum1 = sum1 + element
    }
    if(sum1 === sum){
        return true
    }
    else {return false}
}
//console.log(isSumEqual([1,2,3,],[0,6]))
let x = 5;
function double(x){
 x = x*2;
} 
double(x);
//console.log(x) //Output?_____
function oneToOne(arr){
    let len = arr.length;
    let lastIndex = len-1
    for(let i = 0 ; i<len;i++){
        if(arr[i]>=1 && arr[i]<3){
            if(arr[0]===1 && arr[lastIndex]===1 ){
            return true;}
            else{return false}} }
}
// console.log(oneToOne([1,2,2,1]))
// console.log(oneToOne([1,2,2,2,2,2]))
// console.log(oneToOne([1,2,2,4,2,1]))
// function Prime(num) {
//     for(var i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   }
//   console.log(Prime(2))

// let person = {name:"Allen",age:20,employed: true}
// let person1 = person
// console.log(person=== person1)
// person.sallary = 1000;
// person.age = 35;
// console.log(person1.age)
// delete person1.sallary
// person.sallary = 1500
// console.log(person1.sallary)
// function swap2(arr,i,j){
//     let temp =  arr[i]
//     arr[i] = arr[j]
//     arr[j] =  temp
// }
// let arr = [1,2,3]
// console.log(arr)
// swap2(arr,0,2)
// console.log(arr)

//Write a recursive function to compute the power of a negative exponent
//e.g., power(5, -3) = power(1/5, 3); 

// function power(a,b){
//     if(b ===1){
//         return a
//     }
//     else{ return a*(power(a,b-1))}
// }
// console.log(power(2,4))

// function powern(a,b){
//     if(b === 1){
//         return 1/a
//     }
//     else{return a*(powern(a,b+1))}
// }
// console.log(powern(5,-3))
function isStacked(num){
    let stack = false;
    let sum =0
    //while(num>sum){ // loop until sum is equal to number
    for(let i = 0;i<num;i++){
    sum = sum+i // add 1+2+3 sequence and compare with the num
    if( sum === num){
        stack = true }}
   
    return stack}
    console.log(isStacked(1))