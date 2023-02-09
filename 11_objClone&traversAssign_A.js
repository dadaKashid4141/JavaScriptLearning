console.log("************************************Assign :A**********************************");
console.log("-------------------------------1)-------------------------------");
let bank_sbi = {
    fullName: "StateBankOfIndia",
    branch: "Jath",
    AccountHolders: 25000,
    staff: 10
}
console.log(bank_sbi);

console.log("------------------------------2)-------------------------------");
let bank_location = {
    city: "Sangola",
    street: "Pandharpur road",
    pinCode: 413307
}
console.log(bank_location);

console.log("------------------------------3)-------------------------------");
console.log("-----cloning by using object.assign()-----");
let cloneSbi = Object.assign({}, bank_sbi);
let cloneBankLocation = Object.assign(bank_location)
console.log(`full name: ${cloneSbi.fullName},  brach:${cloneSbi.branch},  Account holders:${cloneSbi.AccountHolders},  staff:${cloneSbi.staff}`);//for bank_sbi

console.log(`city:${cloneBankLocation.city},   street:${cloneBankLocation.street},   pin Code:${cloneBankLocation.pinCode}`);//log for bank_location



console.log("------cloning by using Spread operator:-----");
var cloneWithSpread1 = { ...bank_sbi }
let cloneWithSpread2 = { ...bank_location }
console.log(`full name: ${cloneWithSpread1.fullName},  brach:${cloneWithSpread1.branch},  Account holders:${cloneWithSpread1.AccountHolders},  staff:${cloneWithSpread1.staff}`);//log for bank_sbi

console.log(`city:${cloneWithSpread2.city},   street:${cloneWithSpread2.street},   pin Code:${cloneWithSpread2.pinCode}`);//log for bank_location


console.log("------------------------------4)-------------------------------");
let rate_of_interest = {
    home_loan_interest: "12%",
    personal_loan_interest: "10%",
    due_interest: "8%"
}
console.log(rate_of_interest);



console.log("------------------------------5)-------------------------------");
let sbi_details = Object.assign(bank_sbi, bank_location, rate_of_interest);
console.table(sbi_details);



console.log("------------------------------6)-------------------------------");
for (const key in sbi_details) {
    if (Object.hasOwnProperty.call(sbi_details, key)) {
        const element = sbi_details[key];
        console.log(`merged object Element & value:    ${key}   :${element}`);
    }
}

