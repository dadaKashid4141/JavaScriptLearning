function comparison(value1, value2) {
    var result = value1 > value2 ? value1 : value2;
    console.log(`[${value1},${value2}]greatest no=  ${result}`);

}
console.log("---------------1.1---------------");
comparison(10, -10)
console.log("----------1.2------------");
comparison(800, 899)

console.log("------------------2---------------");
var number = function (one) {

    var result = one % 2 == 0 ? true : false;
    console.log(`${one}  is even= ${result}`);
}
number(29);
number(44);
number(0);
number(101);
console.log("------------------3---------------");

var evenOrOdd = function (word) {
    var length = word.length;
    var result = length % 2 == 0 ? "EVEN" : "ODD";
    console.log(`Length of  ${word}=   ${result}`);
}

evenOrOdd("JavaScript");
evenOrOdd("Google");
evenOrOdd("Developer");