"use strict "
let prompt = require("prompt-sync")();
/*
Question 1 
//Write a program that helps a user choose the correct footwear for the day’s weather based on
the table shown below. If the user enters any other weather type, your program should output
“sneakers” */


let weather = prompt("How is the weather today? ")
weather = weather.toLowerCase()
if (weather === "hot"){
    console.log("Footwear:sandals")

}
else if(weather === "rain"){
    console.log("Footwear:galoshes")

}
else if (weather === "snow"){
    console.log("Footwear:boots")
}
else{console.log("Footwear:sneakers")}



/* Question 2
Write a program that reads from the keyboard a student's name and number of completed
credits and then outputs the student's name and label on following rules:
a. "Freshman" if 0<credits<30
b. "Sophomore" if 30<=credits<60
c. "Junior" if 60<=credits<90
d. "Senior" if credits>90
*/


let studentName = prompt("What is your name? ")
let totalCredit = +prompt("How many credit hours did you completed? ")
if (totalCredit >0 && totalCredit <30 ){
    console.log(`${studentName}: Your are Freshman`)
}
else if (totalCredit >=30 && totalCredit < 60 ){
    console.log(`${studentName}: Your are Sophomore`)
}
else if(totalCredit >=60 && totalCredit < 90){
    console.log(`${studentName}: Your are Junior`)
}
else if ( totalCredit >90){
    console.log(`${studentName}: Your are Senior`)
}
else{console.log("There is some error in your input ")}


// Question 3 
//Write a program that calculates down payment for a home loan based on following rules. 

let houseCost = +prompt("What is the cost of the house? ")
let downPayment; 
if(houseCost >0 && houseCost < 50000){
    downPayment = houseCost*0.05
    console.log("Down Payment is 5% of the cost :"+ downPayment)
}
else if (houseCost >=50000 && houseCost <100000){
    downPayment =  0.1*(houseCost-50000)+1000
    console.log("Down Payment is  :"+ downPayment)
}
else if (houseCost >= 100000 && houseCost < 200000 ){
    downPayment  = 0.15*(houseCost-100000)+2000
    console.log("Down Payment is  :"+ downPayment)
}
else if (houseCost >=200000){
    downPayment  = 0.1*(houseCost-200000)+5000
    console.log("Down Payment is  :"+ downPayment)
}
else{console.log("There is some problem with the input")}


/*
Question 4
A university library that loans book to students, faculty, and the public has a written policy that
determines how long someone may borrow a book before it is due, which is shown on the table
below. Write a defining table and JavaScript program that determines how long a person may borrow a book.
*/
// input : Students,Faculty,Others,Number of books
// process : Calculate the total books that are not returned on time for each individual 
// Determine the loan duration for each individuals depending on the overdue 


let status = prompt("What is your status in the Library? ")
status = status.toLowerCase();
//let totalBooksOverdue = +prompt("How many over due books do you have? ")
let loanDurationWeek;
if (status === "student"){
    let totalBooksOverdue = +prompt("How many over due books do you have? ")
    if (totalBooksOverdue === 0){
        loanDurationWeek = 6;
        console.log("Loan duration in weeks:",loanDurationWeek)
    }
    else if(totalBooksOverdue < 3){
        loanDurationWeek = 4
        console.log("Loan duration in weeks:",loanDurationWeek)
    }
    else if(totalBooksOverdue >= 3){
        loanDurationWeek = 2
        console.log("Loan duration in weeks:",loanDurationWeek)
    }
    else{console.log("input error")}
}
else if (status === "faculty"){
     totalBooksOverdue = +prompt("How many over due books do you have? ")
    if (totalBooksOverdue === 0){
        loanDurationWeek = 12;
        console.log("Loan duration in weeks:",loanDurationWeek)
    }
    else if(totalBooksOverdue < 3){
        loanDurationWeek = 10
        console.log("Loan duration in weeks:",loanDurationWeek)
    }
    else if(totalBooksOverdue >= 3){
        loanDurationWeek = 8
        console.log("Loan duration in weeks:",loanDurationWeek)
    }
    else{console.log("input error")}
    
}
else if(status === "other") {
    totalBooksOverdue = +prompt("How many over due books do you have? ")
    if (totalBooksOverdue === 0){
        loanDurationWeek = 4;
        console.log("Loan duration in weeks:",loanDurationWeek)
    }
    else if(totalBooksOverdue < 3){
        loanDurationWeek = 3
        console.log("Loan duration in weeks:",loanDurationWeek)
    }
    else if(totalBooksOverdue >= 3){
        loanDurationWeek = 2
        console.log("Loan duration in weeks:",loanDurationWeek)
    }
    else{console.log("input error")}

}
else{console.log("some input error")}



/*
Question 5
 Write a defining table and then a program that determines what time a child should go to bed.
Your program must read a child’s age and the season (winter, spring, summer, or fall) from the
keyboard and output the child’s bedtime according to this table:

input : child's age, season
process: compare the child's age with the season and detrmine the bed time.
output : child's bed time
*/

let age = +prompt("How old are you? ")

let bedtime;
if(age <= 5){
    let season = prompt("What is the season? ")
    season = season.toLowerCase()
    if(season ==="summer" || season ==="fall"){
        bedtime = "8:30PM"
        console.log("bed time :",bedtime)
    }
    else if(season === "winter"||season === "spring"){
    bedtime = "8:00PM"
    console.log("bed time :",bedtime)}
    else {console.log("some error ")}

}
else if (age >=6 && age <= 12){
    season = prompt("What is the season? ")
    season = season.toLowerCase()
    if(season ==="summer" ){
        bedtime = "9:30PM"
        console.log("bed time :",bedtime)
    }
    else if(season === "winter"||season === "spring"|| season ==="fall"){
    bedtime = "8:30PM"
    console.log("bed time :",bedtime)}
    else {console.log("some error ")}
}
else if (age >=13){
     season = prompt("What is the season? ")
     season = season.toLowerCase()
    if(season ==="summer" ){
        bedtime = "10:30PM"
        console.log("bed time :",bedtime)
    }
    else if(season === "winter"||season === "spring"|| season ==="fall"){
    bedtime = "9:30PM"
    console.log("bed time :",bedtime)}
    else {console.log("some error ")}
}
else{console.log("some input erorr")}


