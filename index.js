
// Basic control flow is to read statements from top to bottom. 
let theNumber = Number(5);
console.log("Your number is the square root of " + theNumber * theNumber);

// Converting values to strings and booleans. 
let newNunber = String(5)
let booleanNumner = Boolean(5)
console.log(typeof(newNunber))
console.log(typeof(booleanNumner))


// Number.isNaN returns true if the argument given is NaN
let anotherNumber = Number("five")
console.log(Number.isNaN(anotherNumber))

// Conditional statement
if (!Number.isNaN(anotherNumber)) {
    console.log("Your number is the square root of" + anotherNumber * anotherNumber)
} else {
    console.log("Not given a number")
}