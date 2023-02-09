let objectPerson={
    fullName:"Sachin tendulkar",
    age:42,
    married:true,
    address:{
        homeNo:1,
        pin:146565,
        city:"pune",
    },eat:function() {
       console.log("Veg"); 
    }
    eat();
}
// console.table(objectPerson);

console.log(objectPerson.fullName);//accessing element by .
console.log(objectPerson.married);

console.log(objectPerson["age"]);//access by[]
objectPerson.fullName="sachin"//update

objectPerson.profession="player";  //add
console.table(objectPerson)





console.log(typeof objectPerson);   //checking type


