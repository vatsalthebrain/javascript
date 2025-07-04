"use strict"; // treat all js code as a newer version 

//alert("hello") // we are using node.js not browser

let name = "vatsal"
let age = 20
let isLoggedin = false

//number
//bigint use for large numbers
//null -> standalone value
// undefined -> value not defined yet
// symbol 

console.log(typeof "vatsal") // used to get the type of variable wheather it is a string or a int or something else

//null->object
//undefined->undefined

// primitive : strings , number , boolean , null , undefined(variable is defined but value is not defined) , symbol->used to give different identity , bigint 

// non-primitive(reference) : array , objects , functions

const bigNumber = 3657865258958654365743654n

const heroes = ["ironman","spiderman"]
let obj = {
    name : "vatsal",
    age : 12,
}

const myFunction = function(){
    console.log("hello");
}