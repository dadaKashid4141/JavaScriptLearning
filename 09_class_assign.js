console.log("-------------------------------------------Class for vehicles------------------------------------------");

class Vehicles {
    constructor(Type, modelName, fuel, compony, price) {
        this.Type = Type;
        this.modelName = modelName;
        this.fuel = fuel;
        this.compony = compony;
        this.price = price

    }
    details() {
        console.log(`Vehicles Details:${Type} ,${modelName} ,${fuel} ,${compony}, ${price}`);
    }
}
let cretacar = new Vehicles("SUV", "creta", "petrol", "Maruti Suzuki", "17lakh");
let bolero = new Vehicles("SUV", "Bolero", "diesel", "Mahindra", "10lakh");
let pickup = new Vehicles("transport", "bolero PikUp", "diesel", "Mahindra", "9lakh")
let carnival = new Vehicles("MUV", "Carnival", "diesel", "kia", "35lakh")
let tractor = new Vehicles("tractor", "sonalika RX47", "diesel", "sonalika", "15lakh")
console.log(cretacar);
console.log(bolero);
console.log(pickup);
console.log(carnival);
console.log(tractor);
console.log("------------------------------------------Class for College--------------------------------------------");

class College {
    constructor(Name,founded,teacherStaff,totalStudent) {
        this.Name = Name;
        this.founded =founded ;
        this.teacherStaff= teacherStaff;
        this.totalStudent =totalStudent 
    }
    details() {
        console.log(`College Details:${Name} ,${founded} ,${teacherStaff} ,${totalStudent}`);
    }
}
let sang=new College("Sangola College","1978","150","15000");
let vdyn=new College("Vidnyan Mahavidyalaya","1991","100","12000");
let fab=new College("Fabtech","2011","300","25000");
let shiv=new College("Shivaji Polytechnic","2007","200","20000");
console.log(sang);
console.log(vdyn);
console.log(fab);
console.log(shiv);


function traverse(College) {
  for (const key in College) {
    if (Object.hasOwnProperty.call(College, key)) {
        const element = College[key];
        console.log(`${key}  ${element}`);
    }
  }  
  
}
console.log("♾️-=-=-=-=-=-=-=-=-=-All instances of College-=-=-=-=-=-=-=-=♾️ ");
traverse(sang);
console.log("-------------------------------------------------");
traverse(vdyn);
console.log("-------------------------------------------------");
traverse(fab);
console.log("-------------------------------------------------");
traverse(shiv)
