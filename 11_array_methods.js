let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
arrayOfNumbers[4] = 11; //update
arrayOfNumbers.unshift(5);//add elements at start
arrayOfNumbers.unshift(0,99,77,66);
console.log(arrayOfNumbers);
console.log("---------------------------------------");
console.log(arrayOfNumbers.includes(7));//cheking 
console.log(arrayOfNumbers.includes(9));
console.log("---------------------------------------");
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index]; //travers for loop
    console.log(element);
}
console.log("---------------------------------------");
//travers using for in loop
for (const index in arrayOfNumbers) {
    const element = arrayOfNumbers[index];
    console.log(element);
}
console.log("-------------------rev--------------------");
//reverse traversing
console.log('given Array',arrayOfNumbers);


let totalElements = arrayOfNumbers.length-1;
revArray=[];
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
    // console.log(element);
revArray.push(element)
    
}
console.log('reveresed arrrray:',revArray);
console.log("---------------------------------------");

console.log("============ slice() ===========");
let arrayNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log("given array:",arrayNumbers);
let slicedElements =  arrayNumbers.slice(2);
console.log('After slice',slicedElements);
let slicedValues = arrayNumbers.slice(1, 4);
console.log('After slice:',slicedValues);
console.log('Given Array after process:',arrayNumbers);  //remain unchanged

console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3, 7];
console.log('given array:',array_numbers);
let splicedElements =  array_numbers.splice(4);
console.log('After splice:',splicedElements);
console.log('given array Aftr process',array_numbers);// Main array change while splice




console.log("============ splice() ===========");
let array_numberss = [1, 3, 7, 8, 9, 3];
console.log(array_numberss);
 // let splicedElements =  array_numbers.splice(4); // It remove elements from 4th index to the end
 // let splicedElements =  array_numbers.splice(2, 3) // It removes the total  element starting from index 2
 // console.log(splicedElements);
 // let splicedElements =  array_numbers.splice(2, 0, 22 ) // Will insert element 22 at index 2, 0 - means don't replace(i.e.add)
 // array_numbers.splice(2, 1, 22);
 array_numberss.splice(2,2,'x','x');
 console.log(array_numberss);


//  var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
// console.log("========== Resize array========");
// console.log(arrayOfNumbers.length);
// arrayOfNumbers.length = 3;
// console.log(arrayOfNumbers.length);
// console.log(arrayOfNumbers);
// console.log("========== Resize array========");
