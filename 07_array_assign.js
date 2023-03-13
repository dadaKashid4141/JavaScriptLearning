const array1 = [1, 3, 4];
const array2 = [5, 6, 7];
// const array3 = array1.concat(array2);
const array3 = [...array1, ...array2]
console.log(array3);
console.log("-----------------------------");




var ar=[1,23,3,6,4,45,5];
var arr=[1,3,3,6,65,9,];
var spred=[...ar,...arr];//clone by using spred optr
var concat=ar.concat(arr)//concat
var assign=Object.assign([],ar,arr)//Object.assign
console.log('spred',spred);
console.log('concat',concat);
console.log('assign',assign);

var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers);
arrayOfNumbers.push(99);
console.log('After push ',arrayOfNumbers);
arrayOfNumbers.push(88);
console.log('After push',arrayOfNumbers);

arrayOfNumbers.pop();
console.log('After pop',arrayOfNumbers);
 var arrayLength = arrayOfNumbers.length;

console.log(`Total number elements available in array: ${arrayLength}`);

console.log(`Element at 4th Index is: ${arrayOfNumbers[4]}`);

//arrayOfNumbers[2] = 77;
console.log(arrayOfNumbers);

// let otherArray = arrayOfNumbers; // Shallow Copy
let otherArray = [...arrayOfNumbers];
console.log('cloned array=',otherArray);
arrayOfNumbers[3]  = 44;  //update element
console.table(arrayOfNumbers);
console.table(otherArray);
