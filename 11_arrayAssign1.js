console.log("**************************Array Assignment 1***********************************");
const fruits_seasonal=["Banana","Orange","Apple","Mango","Watermelon"];
console.log(`given array=${fruits_seasonal}`);
console.log("---------------------------------1-----------------------------");
console.log(`First element of array: ${fruits_seasonal[0]}`);
var arrayLength=fruits_seasonal.length-1;
console.log(`Last element of array: ${fruits_seasonal[arrayLength]}`);
console.log("---------------------------------2) Add papaya before banana-----------------------------");
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);
console.log("---------------------------------3) remove Mango-----------------------------");
fruits_seasonal.splice(4,1)
console.log(fruits_seasonal);
console.log("---------------------------------4)add pineapple at last-----------------------------");
fruits_seasonal.splice(5,0,"pineapple")
console.log(fruits_seasonal);
console.log("---------------------------------5)add dragon fruit before watermelon-----------------------------");
fruits_seasonal.splice(4,0,"Dragon Fruit")
console.log(fruits_seasonal);

console.log("---------------------------------6) replace orange with kiwi-----------------------------");
fruits_seasonal.splice(2,1,"kiwi")
console.log(fruits_seasonal);

console.log("---------------------------------7) log 1 to 4-----------------------------");
console.log(`Main Array :${fruits_seasonal}`);
let slicedArray= fruits_seasonal.slice(1,5);
console.log(slicedArray);

console.log("---------------------------------8)log last 3 element-----------------------------");
console.log(`Main Array :${fruits_seasonal}`);

let last3=fruits_seasonal.slice(fruits_seasonal.length-3,fruits_seasonal.length)
console.log(last3);




