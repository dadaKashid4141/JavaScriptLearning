console.log("------------Que1----------");
var sqr=function(num){
    console.log(num*num);
}
sqr(5);
sqr(6);
sqr(25);
sqr(100);

console.log("-------------Que 2---------");
var add=function(val1,val2) {
    console.log(val1+val2);
    console.log("type of function=");
    
}
add(1,3);
console.log(typeof(add));
console.log("--------------Q3----------------");
var areaT = function (base, height) {
    console.log((base * height) / 2);
}
areaT(45, 34);


console.log("--------------Q4----------------");

var areaR = function (length, width) {
    console.log(length * width);
}
areaR(499, 917);

console.log("--------------Q5----------------");

var swap = function (sno1, sno2) {
    console.log("Before Swap:", sno1, sno2);
    var temp = sno1;
    sno1 = sno2;
    sno2 = temp;
    console.log("After Swap:", sno1, sno2);
}


swap("Virat", "Anushka");
swap(1000, 2000);

console.log("---------------Q6---------------");
var str = function () {
    var a = "JavaScript the most popular language";
    console.log(a.length);
    console.log(a.indexOf('S'));
    console.log(a.indexOf('lang'));
    console.log(a.charAt(a.length - 1));
    console.log(a.charAt(a.length - 3));
}
str();