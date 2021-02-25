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
let salaried = prompt("Are you salaried or not salaried: ");
let sales = prompt("Sales amount: ")
let commision = 0

if(salaried === "Yes" || salaried === "yes"){
if (sales <300){
 console.log("no commision")
}
else if (sales > 300 &sales <=500){
    console.log("1 percent commision",sales*0.01) 
}
else {console.log("2 percent commision",sales*0.02)}
}
else{if (sales <300){
    console.log("no commision")
   }

    else if (sales >300 && sales <= 500){
        console.log("2 percent commision",sales*0.02)
    }
    else {console.log("2 percent commision",sales*0.03)}

}