"use strict"
let prompt = require("prompt-sync")()
// let a;
// let b = 5;
// console.log(a ?? b);
// let age = 18;
// let access = age > 18 ? true : false;
// console.log(access);
 //let age = +prompt("how old are you")
// if(age < 18){
//     console.log("Hi baby");
// }
// else{console.log("good morinign sir");}
// switch(age){
//     case  15:
//         console.log("Hi baby");
//         break;
//     case 18:
//     console.log("good morinign sir");
//     break;
//     // default:
//     //     console.log("uknown")
// }
//Week1Day3
//Quiz
// let x = null;
// let y;
// console.log(typeof(x))
// console.log(typeof(y))
// console.log(x++);
// y++
// console.log(x,y);
// y = false;
// console.log(x<y);
// x+="2";
// console.log(x);
// console.log(x>y);
//exercise 1;
// let weather = prompt("What is the weather looks like today?: ")
// if (weather === "rainy"){
//     console.log("Get un Umbrella")
// }
// let number = +prompt("Enter a number between 1-10")
// if(number ===7){
//     console.log("Bingo!")
// }
// else{console.log("Try Again")}

// let age = +prompt("Enter your age: ")
// if(age <=0){
//     console.log("Please enter valid age")
// }
// else if(age > 0 && age <=14){
//     console.log("You can't drive yet")
// }
// else if (age >=15 && age <=18){
//     console.log("you can drive under supervision")
// }
// else{console.log("you can drive ")}

// let message = (age <=0?)"Please enter valid age":age>0&&age<=14?"Please enter valid age"
// let number = +prompt("Enter number 1-5 inclusive")

// switch(number){
//     case 1:
//         console.log("one");
//         //break
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three")
//         break;
//     default:
//         console.log("try again")
// }
// let salaried = prompt("Are you salaried or not salaried: ");
// let sales = prompt("Sales amount: ")
// let commision = 0

// if(salaried === "Yes" || salaried === "yes"){
// if (sales <300){
//  console.log("no commision")
// }
// else if (sales > 300 &sales <=500){
//     console.log("1 percent commision",sales*0.01) 
// }
// else {console.log("2 percent commision",sales*0.02)}
// }
// else{if (sales <300){
//     console.log("no commision")
//    }

//     else if (sales >300 && sales <= 500){
//         console.log("2 percent commision",sales*0.02)
//     }
//     else {console.log("2 percent commision",sales*0.03)}

// }
//let prompt = require("prompt-sync")();

// let salary = prompt ("Enter your salary")

// let federalTax = 0;

// if (salary <20000){

// federalTax = 0}

// else if (salary >20000 && salary <50000){

// federalTax = (50000 - 20000)*0.05}

// else {

// federalTax = ((salary - 50000)*0.1)+1500}

// console.log("your federal tax amount is ",federalTax)
// second smallest 
// function  secondSmallest(num1,num2,num3){
//   let midlenum
//  if (num1>num2&num1<num3){
//     midlenum = num1
//  }
// else if (num2>num1&&num2<num3){
//     midlenum = num2
// }
// else {midlenum = num3}
// return midlenum }



// // smallest 
// function smallest (a,b,c){
//     let smallest ;
//     if(a < b && a<c){
//         smallest = a
//     }
//     else if( b<a && b<c){
//         smallest = b
//     }
//     else {smallest = c}
// return smallest}
// function greatestNum(x,y,z){
//     let greatest ;
//     if(x>y&& x>z){
//         greatest = x
//     }
//     else if(y>x&&y>z){
//         greatest = y
//     }
//     else{greatest = z}
// return greatest}
// console.log("2nd",secondSmallest(12,16,20))
// console.log("smallest",smallest(7,11,9))
// console.log("greateset",greatestNum(7,16,57))

// let x = 1;

// let y = '2';

// let z = true;

// let s = x + y;

// console.log(s)          // output?  12

// console.log(typeof s)   // output?  string

// x = x + z;

// console.log(x)          // output?  2

// console.log(typeof x)   // output?  number

// y = x++ * y;            

// console.log(y);         // output?  4

// console.log(typeof y);  // output?  number

// s = parseInt(s)

// s+='3';

// console.log(s);         // output?  123

// console.log(typeof s);  // output?  string

// z= !!s;

// console.log(z);         // output?  123

// console.log(typeof z);  // output?  string

// reversing a number

// function reverseDigit(n){
//     let sum = 0 
//     while(n>0){
//         let digit = n%10
//         sum =(sum*10)+ digit
//         n= parseInt(n/10)

//     }
// return sum}
// console.log("expect 4321",reverseDigit(1234))

/*
Write a defining table and JavaScript program that asks user to guess a number between 1 and
10 until the user enters 5. Program also keeps track of number of attempts user made before
guessing the correct number that is 5. Program should output following results based on the
attempts made:
1. If user guessed 5 in first attempt, program should print "Awesome!"
2. If user guessed 5 in second attempt, program should print "Great!"
3. If user guessed 5 in third attempt, program should print "Not bad!"
4. Otherwise, program should print "It took you n attempts!", where n is the number of
attempts user made before guessing the correct answer.
input: number
process :
ask the user to enter a number until number === 5 
count number of trials
if number === 5 and count = 1 print Awesome
if number === 5 and count = 2 print great
if number === 5 and count = 3 print notbad
else print it took you count number of times
*/
//let guess = +prompt("Guess a number:");
//let correctGuess = 5;
//let count = 1
// while(guess !== correctGuess){
    
// }
//let numberGuess = true
// if(guess === correctGuess && count === 1){
//     console.log("Awesome")
//     }
// while(guess > correctGuess || guess < correctGuess){

// guess = +prompt("Guess a number agin:")
// count = count+1

// if (guess === correctGuess &&count === 2){
//     console.log("Great")
//     break;
// }
// if (guess === correctGuess &&count === 3){
//     console.log("Not Bad")
//     break;
// }
// if (guess === correctGuess &&count > 4){console.log("It took you "+count+ " attempts")
// break} 
// }

// const x = 5;
// console.log(x);//5
// if(x==5){
// let y = 2*x;
// console.log(y);// __10_
// console.log(x);// 5___
// }
// console.log(x); //__5__
// console.log(y); //___error_
// let x;
// if(!x) {
// const y=5
// console.log("No")
// };
// console.log(y);
// let year = prompt("enter year")
// if((year%4===0 & year%100 !==0)||(year %100 ===0& year %400 ===0)){
//     console.log(year,"is leap year")
// }
// else {console.log(year,"is not leap year")}

// let x=null;
// let y;
// console.log(typeof(x));
// console.log(typeof(y));
// //console.log(x)
// console.log(x++);
// //console.log(y)
//  y++;
//  //console.log(y)
//  console.log(x)
// console.log(x,y);
// y=false;
// console.log(x<y);
// x+="2";
// console.log(x);
// console.log(x>y);

// let x = 0;
//  x++;
//  console.log(x);
//  ++x;
//  console.log(x);
//  console.log(++x);
//  console.log(x);
//  console.log(x++);
//  console.log(x);
// for(let count =1; count<=10; count++){
//     console.log(count);
//    }
//    console.log(count); // value of count here?

// let x = 5;
// let square_of_x = Math.pow(x, 2);
// console.log(square_of_x);
// console.log(Math.PI);
// console.log(Math.sqrt(36));
// console.log(Math.round(5.4));
// console.log(Math.round(5.6));
// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.2));
// console.log(Math.min(1,-1,4,3.-0.2,-9,9));
// console.log(Math.random());

//const prompt = require("prompt-sync")();

// let userInput = prompt("Please enter a command: ");
 //let loopCount = 0;
// while (userInput !== "stop") {
//   console.log("Your command was: ", userInput+" "+ loopCount);
//   loopCount = loopCount + 1;
//   userInput = prompt("Please enter a command: ");
// }
// console.log("exiting...");
//let Input = prompt("enter a command")
// let Input;
// do{
//     Input = prompt("enter a command")
//     loopCount+=1
//     console.log("your command is" ,Input)
// }while(Input !== "stop")
// console.log("exiting...")
/*
for(let i = 5;i >=0;i--){
    let row =""
    for(let j = i;j >=0;j--){
        row += j
    }
    
    console.log(row)
}
*/
// let sum = 0;
// while (true) {
// let value = +prompt("Enter a number", '');
// if (!value) break; // (*)
// sum += value;
// }
// console.log('Sum: ' + sum);
/*
*/
/* midexam
function isSumOddorEven(n){
    let sumevenodd = true
    
    let fist ;
    let last = n%10
    let last2;
    let sum = 0
    while (n>0) {
        last2 = n%10
        sum = sum+last2
        n = parseInt(n/10)
    }
    if((last2+last)%2 === 0){
        sumevenodd =false
        //console.log(last2+last)
    }
    console.log(last2+last)
        return sumevenodd}
isSumOddorEven(1234548)
console.log(isSumOddorEven(123456))
*/
// function strictNum(num){
//     let strnum = true
//     let sum  = 0
//     while(num>sum){
//         for(let i=1;i<num;i++){
//             sum = sum+i
//         }
//     }
//     if(sum!==num){
//         strnum =false
//     }
// console.log(sum)
// return strnum}

// console.log(strictNum(6))

// function houseVolume(width, height, depth, sweep){
//     const lv = livingVolume(width, height, depth);
//     const rv = roofVolume(sweep, width, depth);
//     return  lv + rv;  
// }

// function livingVolume(width, height, depth){
//     return width * height * depth;
// }

// function roofVolume(sweep, width, depth){
//     return triangleArea(sweep, sweep, width) * depth;
// }

// function triangleArea(sideA, sideB, sideC){
//     const s = (sideA + sideB + sideC)/2
//     const product = s * (s - sideA) * (s - sideB) * (s - sideC);
//     const result = Math.sqrt(product);
//     return result;
// }

// console.log("expect 2080", houseVolume(16,10,10,10));
// roof:  8 * 6 = 48, * 10 = 480
// living 10*10*16 = 1600
//tot 2080
const evenOrOdd = function(n){
    let even = true
    if (n%2!== 0){
       even = false
    }
return even}
evenOrOdd(5)