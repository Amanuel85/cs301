"use strict" ;
"eslint-disable"
let prompt = require("prompt-sync")();

// const { isMainThread } = require("worker_threads");

// let sam1 = {["name"]:"Sam",age:10};
// let sam2 = {name:"Sam",age:10};
// let john = {name:"John",age:10};


// function isPersonEqual(obj1,obj2){
//     if(obj1.name === obj2.name && obj1.age === obj2.age){
//         return true;
//     }
//     else{return false}}

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
// let input;
// do{
//     input = prompt("Enter word");
//     input = input.toLowerCase();
// }while (input !== "stop");

// function commaSep(str){
//     let word = str.split(",")
//     word = word.reverse()
//     for(let words of word){
//         console.log(words)
//     }
// }

// //commaSep("it, is , hot, day")

// let str = "Thanks for coming again and thanks for tommorow"
// console.log(str.indexOf("for"));
//  function replaceFirst4(str){
//      let indexof4 = str.indexOf("for");
//      let word = str.slice(0,indexof4)+4+str.slice(indexof4)
//      return word
// }

// console.log(replaceFirst4(str))
let str = ("Hello for ,world");
//console.log(str.charAt(0))
//console.log(str.substr(2,4))
// let input = prompt("enter  a word")
// input = input.toLowerCase();
// while(input !== 'stop'){
//     console.log(input)
//     input = prompt("Enter again")
//     input = input.toLowerCase();
// }
// console.log("exiting")
//console.log(str.indexOf("el"))
// let sp = str.split(",")
// console.log(sp)
// let forIndex = str.search("for")
// console.log(forIndex)
// let newword = str.substring(0,6)+4+ str.slice(9)
// console.log(newword)
// const bob = { name: "Bob", age: 10 ,lastname: "John"}
// function objCount(obj){
//     let count = 0;
//     for(let key in obj){
//         count = count+1
//     }
// return count}
// console.log(objCount(bob))
// function spam(str){
//     //let newstr = str.split(" ");
//     //for (let word of newstr){
//         //console.log(word)
//     if(str.includes("lottery")|| str.includes("prize")){
//         return true;}
//     else{ return false}
//     //}
// }

// console.log(spam("there is a spam of lottery"))
function commonSuffix(str,str2){
    let len1 = str.length - 1
    let len2 =  str2.length - 1
    let common = ""
    while(len1 >=0 || len2 >=0){
if(str[len1] !== str2[len2]){
    break;
}
else{common = str[len1]+common}
   len1--;
   len2-- }

return common}
//console.log(commonSuffix("some","firesome"))
function title(str){
    let newstr =  str.split("")
    for(let char of newstr){

    }
    return str.charAt(0).toUpperCase()+str.slice(0)
}
//console.log(title("aman how are you"))
// function f() {
//     let a = 1, b = 20, c;
//     console.log(a + " " + b + " " + c); // 1 20 undefined
//     function g() {
//     let b = 300, c = 4000;
//     console.log(a + " " + b + " " + c); // 1 300 4000
//     a = a + b + c;
//     console.log(a + " " + b + " " + c); // 4301 300 4000
//     }
//     console.log(a + " " + b + " " + c); 
//     console.log(a + " " + b + " " + c); // 1 20 undefined
//     g();
//     //console.log(a + " " + b + " " + c); // 4301 20 undefined
//     }
//     f();
// let x = 10;
// function main() {
// let x = 0;
// console.log("x1 is " + x);
// x = 20;
// console.log("x2 is " + x);
// if (x > 0) {
// x = 30;
// console.log("x3 is " + x);
// }
// console.log("x4 is " + x);
// function f(x) {
// console.log("x5 is " + x);
// }
// f(50);
// console.log("x6 is " + x);
// }
// main();
// console.log("x7 is " + x);

// let arr = ["this", "that", "Hi_there", "How_are_you"]
// let newarr = arr.filter( ()=> {return arr.includes("_")})
// console.log(arr.findIndex("this"))

function fibnaci(n){
    if (n===0){
        return 0
    }
    else if (n===1){
        return 1
    }
    else{
         
       let  nextfib = fibnaci(n-1)+fibnaci(n-2)
       return nextfib}
}

//console.log("nextfib",fibnaci(7))


const isPalindrome = str => {
    const strLen = str.length;
    if (strLen < 2) return true;

    if (str[0] === str[strLen - 1]) {
        return isPalindrome( str.slice(1, strLen - 1) );
    }

    return false;
};

//console.log(isPalindrome('kaya'));

function balanced (arr){
    let newarr = []
    for(let elem of arr){
        if(elem ==="("|| elem ==="["||elem==="{"){
            arr.pop(elem)
            newarr.push(elem)
        }
    }
    for (let i =0 ;i<newarr.length;i++){
        if( newarr[i] !== arr[i]){
            return false
        }
    }
     return true}
// //console.log(balanced( ["(", "(", ")", ")", "(", "(", ")"]))
// let arr = [1, 2, 5];
// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4
// arr.splice(2, 0, 3, 4);

//console.log( arr );
// let numbers = [1, 2, 11, 21, 3, 32];
// numbers.sort();
// console.log(numbers); 
// arr.sort( (a,b)=>{if a>b return a
// else if a ===b return 0
// else{return -1}})
/////one question

function reverseWord(str){
   let len = str.length-1
   let word = " "
   for (let i = len ;i>=0;i--){
       word = word+str[i]}
return word}

console.log(reverseWord("Hi how are you"))