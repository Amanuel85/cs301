"use strict"

// let n = 4
// rec =1
// for(let i =1;i<=n;i++){
// rec = rec*i
// }
// console.log(rec)

// function factorial(num){
//     if(num===0 || num=== 1){
//         return 1
//     }
//     else{ return num*factorial(num-1)}
// }
// console.log(factorial(4))

// function A(){
//     console.log("A is called");
//     console.log("Before B is called");
//     B();
//     console.log("After B is called")
//     }
//     function B(){
//     console.log("B is called");
//     console.log("Before C is called");
//     C();
//     console.log("After C is called");
//     }
//     function C(){
//     console.log("C is called");
//     }
//     A();
//     console.log("After A is called");
// function recursiveSum(n){
//     if(n===0){
//     return 0;
//     }else{
//     return n + recursiveSum(n-1);
//     }
//     }
//     console.log(recursiveSum(10));
//     let sum =0;
// for (let i = 0 ;i<= 10;i++){
// sum +=i
// }
// console.log(sum)
//Find length of a String recursively, without using length property

// function strLength(str){
//     if(str === ""){
//         return 0
//     }
//     else {let length = 1+strLength(str.substr(1))
//     return  length}
    
// }
// console.log(strLength("Hello"))
const facto = (n)=>{
    return n>=1?n*facto(n-1):1
}
console.log(facto(4))