console.log("*********************************Assignment for reduce()*********************************");

const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
let sumArray=array_numbers.reduce((sum,value)=>{
  return sum+value;

})
console.log("--------------1)  Addition------------");
console.log(`Addition of all numbers: ${sumArray}`);

console.log("--------------2)  Sum of even no------------");
var evenArray=array_numbers.filter((value)=>{
    return value%2==0;
   })
 var sumEven=evenArray.reduce((sum,value)=>{
   return sum+value;
 } ) 
 console.log(`Addition of even no: ${sumEven}`);