"use strict";
const assert = require("assert");  // how to import module in node js
const fun = require("./w2d3codequality.js"); // fun is identifier


/* 1a.	Write a function named checkPrime that accepts a parameter and returns true if the argument is a prime number otherwise returns false. */
describe("checkPrime", function () {

    it("37 is prime", function () {
        assert.strictEqual(fun.checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(fun.checkPrime(77), false);
    });
});

/*
describe("areaOfCircle", function () {

    it("area of unit circle is Pi", function () {
        assert.strictEqual(fun.areaOfCircle(1), Math.PI * Math.PI);
    });
});
*/