// datatypes are divided in two types on the basis of how to are stored in the memory and how they will be accessed from the memory
// In this basis datatypes are stored in two parts  1) primitive  2) non-primitive
// primitive 7 types : string, number, boolean, null, undefined, symbol, bigInt (they all are call by value) 
// non-primitive(reference) types  : array, objects, functions (call by function)



const heros = ["shaktiman","naagraj","doga"]; //array

let myObj = {   //object
    name:"sourav",
    age: " 25"
}

const myFunction= function(){          // function
    console.log("hello sourav");
}

console.log(heros)
console.log(myObj)
console.log(myFunction)


//********************************************* */

// memory used by datatypes :- stack(primitive), heap (non-primitive)