"use strict";
const assert = require("assert");
const fun = require("./w2d3codequality.js");


describe("isPrime", function () {

    it("37 is prime", function () {
        assert.strictEqual(fun.isPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(fun.isPrime(77), false);
    });
});


describe("areaOfCircle", function () {

    it("area of unit circle is Pi", function () {
        assert.strictEqual(fun.areaOfCircle(1), Math.PI*(1));
    });
});

describe("volume of cylnder",function(){
    it("volume of cylnder is ", function(){
        assert.strictEqual(fun.volumeOfCylinder(fun.areaOfCircle(1)*1),1);
    });
});

describe("area of triangel",function(){
    it("the area of triangle",function(){
        assert.strictEqual(fun.triangleArea(10,10,5),25);
    });
});
describe ("volume of roof",function(){
    it("the roof volume",function(){
        assert.strictEqual(fun.roofVolume(3,5,2),30);
    });
});

describe("living area volume",function(){
    it("the living area volume is",function(){
        assert.strictEqual(fun.livingVolume(4,2,6),16);
    });
});


describe ("volume of house",function(){
    it("volume of house is ",function(){
    assert.strictEqual(fun.houseVolume(16,10,10,10),1080);
    });
}) ;


