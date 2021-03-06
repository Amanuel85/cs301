"use strict";

const fun = require("./l8arrays.js");
const assert = require("assert");



// /* 1a.	Write a function named checkPrime that accepts a parameter and returns true if the argument is a prime number otherwise returns false. */
/*
describe("checkPrime", function () {

    it("37 is prime", function () {
        assert.strictEqual(fun.checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(fun.checkPrime(77), false);
    });
});
*/
let arr = [2,3,4,5,6];
describe ("returnsum",function(){
    it("sum of last and first elements of [2,3,4,5,6]",function(){
        assert.strictEqual(fun.addend(arr),8);});
});