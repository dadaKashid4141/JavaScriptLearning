console.log("=====================================Q1===============================");

function EvenOrOdd(value) {
    if (value%2==0) {
        console.log(`${value} is EVEN ` );
    }
    else{
        console.log(`${value} is ODD`);
    }
    
}
EvenOrOdd(45);
EvenOrOdd(70);
EvenOrOdd(67);
EvenOrOdd(98)

console.log("=====================================Q2===============================");
function voting(age) {
    if (age>=18) {
        console.log(`${age} is eligible for voting`);
    }
    else{
        console.log(`${age} is not eligible for voting`);
    }
}
voting(18);
voting(20);
voting(17);
voting(40)

console.log("=====================================Q3===============================");

function lengthOfString(string) {
    var str=string;
    var strlen=str.length;
    if (strlen>10) {
        console.log(`"${string}" contain more than 10 char`);
    }
    else{
        console.log(`"${string}" has not more than 10 char`);
    }
    
}
lengthOfString("JavaScript-ES6");


console.log("=====================================Q4===============================");
function newStr(string) {

   if (string.startsWith("Java")) {
    console.log(`"${string}" is start with 'Java'`);
   }
   else{
    console.log("No");
   }
    
}
newStr("JavaScript Language");
