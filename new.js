let variable_name = "Pune";

const mohitPerson =  {
    fullName: "Sachin Tendulkar",
    age: 42,
    "isMarried": true
}

console.log(Object.entries(mohitPerson));
console.log(Object.keys(mohitPerson));
console.log(Object.values(mohitPerson));

let person = {
    fullName: "Sachin Tendulkar",
    age: 42,
    "isMarried": true,
    address: {                                         //nested obj
        street: "AS CLUB",
        pin_code : 123456,
        city: "PUNE",
        state : "MH"
    },
    // eat:function(){
    //     console.log("I am vegetarian");
    // },
    // walk: function() {
    //     console.log("I do walk everyday");
    // },
    details: function(){
        let personDetails =  `Details are : ${this.fullName}, ${this.age},  ${this.address.city}`;
        return personDetails;
    }
}


let pDetail = person.details();
console.log(person.details());
console.log("==================");
console.log(typeof person);
console.log(person.address);
console.log(person.address.street);
person.address.landmark = "Near Main Road";

person.eat();

person.fullName = 'Sachin Ramesh Tendulkar';
person.pinCode = 123456;

delete person.age;

person.profession = "Angular Developer";

console.log(person);

console.log(person.city);
console.log(person["age"]);

let personFullName = person.fullName;
console.log(personFullName);
console.log(person.fullName);




//fabo series
function fabo(myNumber) {
    if (myNumber == 0) {
        return 0;
    }
    if( myNumber == 1) {
        return 1;
    }
    let fN = 0; sN=1; nextN = fN + sN;
    
    for (let index = 0; index < myNumber; index++) {
        fN = sN;
        sN = nextN;
        nextN = fN + sN;
        console.log(nextN);
    }
}

fabo(5);
