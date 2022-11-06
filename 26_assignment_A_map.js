console.log("**********************************Assign 2:map*************************************");
const array_numbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given array : ${array_numbers}`);
console.log("-------------------------Q 1  Adding 10 into each element------------------------------------");
var newArray = array_numbers.map((Element, index) => {
    return Element + 10;
}
)
console.log(newArray);


console.log("-------------------------Q 2  Square of each element------------------------------------");
var newArray = array_numbers.map((Element, index) => {
    return Element * Element;
}
)
console.log(newArray);

console.log("-------------------------Q 3  Adding index value into each element------------------------------------");


var newArray = array_numbers.map((Element, index) => {
    return Element + index;
}
)
console.log(newArray);
