console.log(("****************************************Arrow Function **********************************"));
console.log(("----------------------------------Q 1 A-------------------------------------"));
let simpleFunc=()=>{
    console.log("Good Morning ,Today is Friday");
}
simpleFunc()

console.log(("----------------------------------Q 2  A-------------------------------------"));
let mult=(val1,val2,val3)=>{
    var final=val1*val2*val3;
    console.log(`Multiflication of three no=  ${final}`);

}
mult(5,5,2)

console.log(("----------------------------------Q 2  B-------------------------------------"));
let Multiflication=(val1,val2,val3=1)=>{
    var final=val1*val2*val3;
    console.log(`Multiflication of two no=  ${final}`);

}
Multiflication(10,4)


console.log(("----------------------------------Q 3  A-------------------------------------"));

let add=(n1,n2,n3,n4,n5)=>{
    var sum=n1+n2+n3+n4+n5;
    return sum;

}
console.log(`Addition of 5 no :  ${add(100,100,200,349,756)}`);

console.log(("----------------------------------Q 3  B-------------------------------------"));
console.log(`concat o/p:  ${add("I am" ,  "learning",   "ES6", "features","in depth")}`);
