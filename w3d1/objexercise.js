"use strict" ;
let prompt = require("prompt-sync")();

const { isMainThread } = require("worker_threads");

let sam1 = {["name"]:"Sam",age:10};
let sam2 = {name:"Sam",age:10};
let john = {name:"John",age:10};


function isPersonEqual(obj1,obj2){
    if(obj1.name === obj2.name && obj1.age === obj2.age){
        return true;
    }
    else{return false}
}

//console.log(isPersonEqual(sam1,sam2))
//console.log(isPersonEqual(sam1,john))
// function changeVal(msg1) {
//     msg1 = 'changed';
//     console.log(msg1)}
//     let msg2 = 'orginal';
//     changeVal(msg2);
//     console.log(msg2); 
    

// function changeObjProp(obj1) {
// obj1.msg = 'changed';
// }
// let obj2 = { msg: 'original' };
// changeObjRef(obj2);
// console.log(obj2.msg); 


// function changeObjRef(obj2) {
//     obj2 = { msg: 'changed' };
//     }
//     let obj1 = { msg: 'original' };
//     changeObjRef(obj1);
//     console.log(obj1.msg); 

//     let str = "Hello"

// //for (let char of "Hello") {
//     //alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)}
//     //let str  = "Hello"
// for (let i = 0 ;i<str.length;i++){
//     console.log(str[i]);
// }
/*
• Write a program that keeps on asking for user input and prints it, until
user types the word "stop" (without quotes). "Stop" word can be in
any case (small, capital or mixed)
• Write a function that takes a comma separated string of words and
converts it into an array of words and prints in reverse order.
• Write a function to replace the first occurrence of "for" in an input
string with 4. */

//let input = prompt("enter word");
let input;
do{
    input = prompt("Enter word");
    input = input.toLowerCase();
}while (input !== "stop");

function commaSep(str){
    let word = str.split(",")
    word = word.reverse()
    for(let words of word){
        console.log(words)
    }
}

//commaSep("it, is , hot, day")

let str = "Thanks for coming again and thanks for tommorow"
console.log(str.indexOf("for"));
 function replaceFirst4(str){
     let indexof4 = str.indexOf("for");
     let word = str.slice(0,indexof4)+4+str.slice(indexof4)
     return word
}

console.log(replaceFirst4(str))