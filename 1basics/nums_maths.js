// number declaration
const score = 400
const balance= new Number(200)
// console.log(balance)


// convert number to strings 
let s = score.toString()

console.log(typeof s)
// by converting number into strings we can  apply strings methods on it

//toPrecision method
const othnumber=123.3599
// console.log(othnumber.toPrecision(4))

// toLocaleString()
const hundreds= 1000000
// console.log(hundreds.toLocaleString()) // converting according us standards 
// console.log(hundreds.toLocaleString('en-IN')) // converting according Indian Standards 

// there are many more methods that can be performed on numbers 




// ***********************************************************************MATHS*******************************************************************************************
// maths library comes with js 
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))// top value
console.log(Math.floor(4.7)) // floor value
console.log(Math.min(4,5,6,7))
console.log(Math.max(4,5,6,7))



console.log(Math.random()) //  gives random values from o - 1 mostly decimal values

console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1)//this will generate numbers from 1 - 10 

// in case if you want a custom random number genarator between two numbers 
const min= 10
const max= 20


console.log(Math.floor(Math.random()* (max-min +1)) + min ) // formula will generate number between min and max  