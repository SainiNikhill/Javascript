const marvel = ["thor", " iron man", "spiderman"]
const dc= ["superman", "batman", "flash"]

// marvel.push(dc)

// these two dont merge with each other
// marvel will have dc array  as its 4rth element 

console.log(marvel)
// console.log(marvel[3][2])

// if you wanna merge these two array use concat
const DCxMARVEL=marvel.concat(dc)
console.log(DCxMARVEL)



// using spread operator 
const newHero= [...marvel,...dc]
console.log(newHero)

const confuseArray= [1,2,3,[3,4,5,6],[1,2,3,4,[5,3,7]]]
const reaArray= confuseArray.flat(Infinity)
console.log(reaArray)


//convert string into array
console.log(Array.isArray("nikhil"))
console.log(Array.from("nikhil"))


//convert multiple var Into Array
let score1= 100
let score2=200
let score3= 300
const varArray= Array.of(score1, score2,score3)
console.log(varArray)

