let myname="Rahul";
let abc=myname;
console.log(abc);


let frdName=myname;

frdName="Anil";
myname="Sachin";
console.log(frdName,myname);

let person={
    Name:"Mohit",
    age:23,
    City:"mumbai"
}
let student=person;
student.City="pune";
console.log(student.City);
console.log(person.City);
//-------------------------------------

// let person = {
//     name: "Mohit",
//     age : 31,
//     city : "Pune",
//     address: {
//         pin: 431202,
//         street: "Kanch pokali"
//     }
// }
// console.log(person.name, person.age, person.city);
// console.log(person);
// let student = {...person};

// student.city = "Mumbai";
// person.age = 33;
// console.log(student.city, person.city);
// console.log(student.age, person.age);

// student.address.street = "Khav Galli";
// console.log(student.address.street);
// console.log(person.address.street);

// console.table(person);
// console.table(student);
