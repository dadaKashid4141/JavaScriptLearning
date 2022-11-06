console.log("****************************For Each () with arrow function*****************************");
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log("-------------------------------------1---------------------------------------------");
array_numbers.forEach((currentValue, index) => {
    console.log(`Array element: ${currentValue} , Index: ${index}`);
});

console.log("-------------------------------------2 positive no---------------------------------------------");
array_numbers.forEach((currentValue) => {
    if (currentValue > 0) {
        console.log(currentValue);
    }

});

console.log("-------------------------------------3 Negative no---------------------------------------------");
array_numbers.forEach((currentValue) => {
    if (currentValue < 0) {
        console.log(currentValue);
    }

});

console.log("-------------------------------------4 Even no---------------------------------------------");
array_numbers.forEach((currentValue) => {
    if (currentValue % 2 == 0) {
        console.log(currentValue);
    }

})

console.log("-------------------------------------5 sum of element---------------------------------------------");
sum = 0;
array_numbers.forEach((element) => {
    sum = sum + element;
})
console.log(`Sum of all elements: ${sum}`);

console.log("------------------------------------6 Even positioned element---------------------------------------------");
array_numbers.forEach((currentValue, index) => {
    if (index % 2 == 0) {
        console.log(currentValue);
    }
})

console.log("------------------------------------7 odd position & -ve num---------------------------------------------");
array_numbers.forEach((currentValue, index) => {
    if (index % 2 !== 0 && currentValue < 0) {
        console.log(currentValue);
    }
})