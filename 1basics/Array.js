// arrays 
/**JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
 * 
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies). */

const myArray=[1,2,3,4,5,6,6]
console.group(myArray[3])

// in case if you want to acces elemts from last use ( - ) indexes like lastv index at -1 and second last at -2 

const myHeros=['shaktiman', "iron man", "captain-america"]
console.log(myHeros[2])

// another declaration of arrays

const myArr2=new Array(1,2,3,4)
for(let i =0; i<myArr2.length;i++){
    console.log(myArr2[i])
}

// ****************************************************************array methods********************************************************


// push method
myArr2.push(6)
console.log(myArr2)

//pop method pop just deleted one element from last index 
myArr2.pop()
myArr2.pop()
console.log(myArr2)

//toString method => converts  array to string 
console.log(typeof myArr2)
const str= myArr2.toString()
console.log(typeof str)

// concat () adds multiple arrays and return result ( doesnt change orignal array as it return new array)
let a1= [1,2,3,4,565]
let a2=[6,8,8,90,0]
let hero= a1.concat(a2)
console.log(hero)



// shift method 
/** 
 two types of shift method 
 1 unshift() add to start
 2 shift() delete from start
 */ 
let marks = [90,70,78,99,100,81,98]
marks.unshift(90) //add 90 to starting
console.log(marks) 
marks.shift()
console.log(marks)


// slice() method this method return piece of array and it doesnt change orignal array 
// ********************************slice(start index, end index )
 let sliceArray= [1,2,3,4,5,6,7]
 console.log(sliceArray.slice(1,3))// from index 1 to index 2, it doesnt include value at index 3 (result ==== 2,3)
 console.log(sliceArray) // no change in orignal array 



 // splice() unlike  splice changes reflect in orignal array aswell

 // ******************************splice( start index , delete count , new element )
 // start index= from where you want to  add new element 
 // delete count = o incase you dont want to delete any thing 
 // new element 

   let spliceArray= [1,2,3,4,5,6,8]

  spliceArray.splice(2,0,2,34,5) // here start index is 2 so these elemts (2,3,4,5) will be inserted from index 2 and since the del count is 0 no elememt is delted 
  console.log(spliceArray)

  spliceArray.splice(1,4,"nikhil")
  console.log(spliceArray)