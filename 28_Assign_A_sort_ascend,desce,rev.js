console.log("************************************Assign A sorting,ascending,descending,reverse*********************************************");

const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ] 
console.log("Given Array:" ,array_roll_numbers);
console.log("-------------------------- 1) Reverse Array-------------------------");
array_roll_numbers.reverse();
console.log("Reversed array:",array_roll_numbers);

console.log("-------------------------- 2) Sort()-------------------------");
array_roll_numbers.sort();
console.log("After sort:",array_roll_numbers);
console.log("Sort() is sorts only First digit of No & ignore other digit of no");


console.log("-------------------------- 3) Sort in ascending order-------------------------");
array_roll_numbers.sort((a,b)=>{
return a>b?1:-1;

})
console.log(array_roll_numbers);


console.log("-------------------------- 4) Sort in Descending order-------------------------");
array_roll_numbers.sort((a,b)=>{
return a>b?-1:1;

})
console.log(array_roll_numbers);

console.log("-------------------------- 5) Sort in Descending order using reverse()-------------------------");
var sortDesc= array_roll_numbers.sort((a,b)=>{
    return a>b?1:-1;
})
console.log(sortDesc.reverse());

console.log("--------------------------------6) Greatest no -------------------------------")

console.log(`Greatest no  is: ${sortDesc[0]}`); //array property to display element present st [index]

console.log("--------------------------------6) Smallest no -------------------------------")
let revForSmall=sortDesc.reverse()
console.log(`Smallest no  is: ${revForSmall[0]}`); //array property to display element present st [index] 

console.log("------------------------- 7) Removing duplicate no --------------------");
let setArray= [...new Set(array_roll_numbers)]    //set removes duplicate no
console.log("After removing duplicate no: ",setArray);