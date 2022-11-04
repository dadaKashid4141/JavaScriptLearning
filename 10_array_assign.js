const arrayOfNames=['Kamat','Memon','Nashpati','Taimur','Menon','Kamat','Andy',"Taimur"];
console.log(`Given Array:  ${arrayOfNames}`);
const newArray=[...new Set(arrayOfNames)]
console.log(`After removing duplicate elements:   ${newArray}`);


console.log(`-----------------Count of duplicate elements-------------------`);
let c=arrayOfNames.length;
let k=newArray.length;
console.log(c-k);
console.log(`-------------------Total no of unique element----------------`);
console.log(k);