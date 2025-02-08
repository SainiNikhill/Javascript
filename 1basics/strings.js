// **********************************************************************Strings*********************************************************************************************************



//string is sequence of characters used to represent text
const firstname= "nikhil"
const lastname="saini"
// console.log(firstname+lastname+ "value")// concatenation

// console.log(`hello first name is ${firstname} and my last name is ${lastname}`)//  string interpolation => phenomenon of adding expression in strings is called string interpolation

//  string length
let collegeName="college of engineering roorkee";// spaces are also inclued into strings 

// console.log(collegeName.length)
// console.log(collegeName[7])


let name="prtham"
let age=22;
let intro=`hello! my name is ${ name} and my age is ${age}`// template literals 
// console.log(intro)

// there is another way of declaring string 
let katapa= new String("katapa")
// console.log(katapa)



// ***************************************************************basic string methods********************************************************************************************

// str.toUpperCase()=>convert string into uppercase
let str= " nikhil saini "
let str2= "zeth"
console.log(str.toUpperCase())

// str.toLowerCase()
// console.log(str.toLowerCase())

// str.trim()=> remove white spaces
console.log(str.trim())

// str1.concat(str2)
console.log(str.concat(str2))


// str.replace(searchvalue, newvalue)=>only replace one character 
console.log(str.replace('nikhil','saini'))// this change will not reflect in str 
console.log(str.replaceAll('i','j'))// this will replace all the search value with the new value 
console.log(str)

// str.slice(start, end)=>( start and end  are the indexes only )
console.log(str.slice(0,3))// if str= nikhil then output is nik 
console.log(str.slice(-8,0)) // this start from index 8 to 0 right to left approach 


// str.charAt(index)
console.log(str.charAt(4))

//st.indexOf=>used to check the indexes of the  value
console.log(str.indexOf('n'))

//str.includes(''string')=> result will be true or false 
console.log(str.includes("Nikhil"))


//these all are the basic string functions 

