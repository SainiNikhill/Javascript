 /*

 there are two types of data types in js 
 primtive and non primitive.

 */

"use strict"; // treat all js code as newer version

// alert("hello") we are using node js not browser so it wont work 
// code readabilty should be high


// primitive data types
/*
Number
Bigint number bigger than the range of number 
String (should be in single and double qoutes)
Boolean => true or false
undefined=> variable is declared but didnt have value 
Null=> standalone value (null is not undefined unlike undefined it shows empty (example temperature))
Symbol=>used for uniquesness 
*/

//Non- primitive DataTypes
/*
 objects
 (arrays and functions)
 objects is collection of values 
*/

let Name= 'nikhil'
let age =18
let DOB=Date
let isMarried=false
let salary

console.log(typeof(salary))
console.log(typeof(Name))
console.log(typeof(age))
console.log(typeof(DOB))
console.log(typeof(isMarried))



// how to create an object

const student={
    Name:'nikhil saini',
    Roll_no:34,
    age:20,
    isPass:true,

};
console.log(student["age"])
console.log(student.Name)
// we can use . or [""] to acces object variables

student.age =student.age+1;
// this is how we can modify objects data
console.log(student.age)
