console.log("======================Step1=====================");
var maleMarriageEligibility =function(gender1,age1,boyName) {
    var result= gender1=="Male" &&age1 >=21
    ? `Hey ${boyName} you are eligible for marriage`:
    `Hey ${boyName} you Not eligible for marriage`;
    console.log(result);
    
}
maleMarriageEligibility("Male",25,"BillGate");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log("======================Step2=====================");
var femaleMarriageEligibility =function(gender,age,girlName) {
   if (gender=='female'&&age>=18) {
        console.log(`Hey ${girlName} you are eligible to marriage`);
    }
    else{
    console.log(`Hey ${girlName} you are Not eligible to marriage`);
    }
}
femaleMarriageEligibility("female",16,"Jenifer");
femaleMarriageEligibility("female",27,"Malinda Gates")
 