//Dates 

let myDate= new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString('en-IN'))
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(typeof myDate)

let myCreatedDate= new Date(2023, 0 ,23)//  months starts from 0 

let Mydates= new Date("2023-01-20") // MM-DD-YYYY // month starts from 01
// console.log(myCreatedDate.toDateString())
// console.log(Mydates.toDateString())


let myTimeStamp =  Date.now()
// console.log(myTimeStamp)
// console.log(myTimeStamp.getTime())
console.log(Math.floor(Date.now()/1000))


let newDate= new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
console.log(myDate)

newDate.toLocaleString('default',{
    weekday:"long",


})
