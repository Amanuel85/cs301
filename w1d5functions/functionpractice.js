"use strict "

// for(let i=1; i<10; i++){
//     if(i%3===0) break;
//     console.log(i);
//    }

// for (let i = 1;i<10;i++)
/*
Write a function named testPrime that returns true when
argument to the function is a prime number, otherwise returns false.
• Now call the function to test if user input is prime or not. */

function testPrime(num){
    let isprime = true;
    for(let i = 2;i<num;i++){
        if(num%i=== 0){
            isprime = false}}
    return isprime}
console.log(testPrime(15))