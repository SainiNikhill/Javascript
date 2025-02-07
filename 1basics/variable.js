// variables are containers for data 

// three types of vraibales are const, let ,  var we dont use var after 2015 because after getting es6 we have problems with var.

// declaring constants 
const accountId=1266464//cant redecalred and updated . a block scope variable 
// its must to declare const 

let accountEmail="nikhilsaini@gmail.com"// cant be redeclared but can be updated a block scope variable
let accountState 

var accountPassword="123445"// can be re declared and updated  aglobal scope variable 

accountCity="jaipur"
accountEmail="nikhil@2911"
accountPassword="2363"

console.log(accountId)

// table is used to fetch multiple values
console.table([accountEmail,accountCity,accountPassword, accountState])
