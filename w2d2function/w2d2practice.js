let greatestCD = function(a,b){
let temp ;
let remainder;
if(a < b){
    temp = a;
    a = b
    b = temp
}
while(a%b>0){
remainder = a%b
a =b
b= remainder
}
return b}
console.log(greatestCD(98,56))

let LeastCM = function (a,b){
let gcd =  greatestCD(a,b)
let lcm = a*b/gcd
return lcm
}