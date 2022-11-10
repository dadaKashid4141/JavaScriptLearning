console.log("**********************************Assignment for filter************************************");

const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("-------------------------1)  no >50---------------------------");
let newArray=array_numbers.filter((value)=>{
 return value>50;
})
console.log(newArray);

console.log("-------------------------2) All even no---------------------------");
var evenArray=array_numbers.filter((value)=>{
    return value%2==0;
   })
   console.log(evenArray);

   console.log("-------------------------3) All odd no---------------------------");
   var oddArray=array_numbers.filter((value)=>{
    return value%2!==0;
   })
   console.log(oddArray);

   console.log("-------------------------4) No which R multiple by 5---------------------------");
   var Array=array_numbers.filter((value)=>{
    return value%5==0;
   })
   console.log(Array);


   console.log("-------------------------5) No in Bet 20-50---------------------------");
   var Array=array_numbers.filter((value)=>{
    return value>=20&&value<50;
   })
   console.log(Array);