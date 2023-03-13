console.log("*********************Assignment 2***************************");
const array_numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log(array_numbers);
console.log("------------------------------1------------------------------");
let arrayLength = array_numbers.length;
console.log(`Length of array:${arrayLength}`);
console.log("------------------------------2------------------------------");
console.log(`1st element :${array_numbers[0]}`);
let lastElement = arrayLength - 1;
console.log(`last element :${array_numbers[lastElement]}`);

console.log("------------------------------3 rd last element------------------------------");
let thirdLast = arrayLength - 3;
console.log(`3 rd last element: ${array_numbers[thirdLast]}`);

console.log("------------------------------4 even no------------------------------")
console.log("even no are:");

for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];

    if (element % 2 == 0) {
        console.log(element);

    }
}

console.log("------------------------------5) Odd no------------------------------")
console.log("odd no are:");

for (let index = 0; index < array_numbers.length; index++) {
    var element = array_numbers[index];

    if (element % 2 != 0) {
        console.log(element);

    }
}

console.log("------------------------------6)even position------------------------------")
for (let index = 0; index < array_numbers.length; index++) {
    var elements = array_numbers[index];
    if (index % 2 == 0) {
        console.log(elements);
    }
}

console.log("------------------------------7)Odd position------------------------------")
for (let index = 0; index < array_numbers.length; index++) {
    var elements = array_numbers[index];
    if (index % 2 != 0) {
        console.log(elements);
    }
}

console.log("------------------------------8)sum ------------------------------")
sum = 0;
for (let index = 0; index < array_numbers.length; index++) {

    var elements = array_numbers[index];
    sum = sum + elements;

}
console.log(sum);

console.log("------------------------------9)multiple of 5------------------------------")
for (let index = 0; index < array_numbers.length; index++) {
    var elements = array_numbers[index];
    if (elements % 5 == 0) {
        console.log(elements);
    }
}

console.log("--------------------10)check 115 is  available or not----------------------")
console.log(`Array : ${array_numbers}`);
console.log(array_numbers.includes(115));

console.log("--------------------11)check 23 is  available or not----------------------")
console.log(array_numbers.includes(23));


