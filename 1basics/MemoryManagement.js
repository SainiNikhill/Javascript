// stack(primitve)=>gives copy   
// heap (non- primitve )=> provides reference of the  orignal value,   so any changes will reflect dircetly in the value 
// all non primitives stroed in heap and primitves in stack

// stack memory example 



let myname="nikhilsaini"
let anothername= myname
anothername= "chaiorcode"
console.log(anothername)
console.log(myname)
// here in stack memory once the variable is declared and some other other variable copies it ( var2= var1 ) then the copy of var 1 will we passed not the orignal value so the changes in copy doesnt reflect changes in orignal 


// heap memory example

let obj1 = {
    name:"nikhil",
    age:21,
    email:"nikhil@2911",
};

let obj2 =obj1;

console.log(obj1.name)
console.log(obj2.name)
obj2.name="pratham"

console.log(obj1.name)
console.log(obj2.name)
// here in heap memory once a object is created in memory its refrence is passed to the variable  if another variable copy its refrence ( obj2 =obj1) so same refrence will be passed so if obj2 performs any changes in objet than it will reflect on every other which holds its refrence


