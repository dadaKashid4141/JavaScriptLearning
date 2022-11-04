class Bank{
    constructor(bank_name,location,account_no,ifsc,interest_rate){
        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate;
    }
}

let axis_bank=new Bank("Axis","sangola",12345678910,"OKAXIS00001111","10%");
let sbi_bank=new Bank("SBI","jath",11111111111,"SBIN00002222","7%");
let icic_bank=new Bank("ICIC","Kolhapur",222222222222,"ICIC00003333","5%");
let kotak_bank=new Bank("Kotak","Pune",3333333333333,"KOTAK00004444","7%");
let hdfc_bank=new Bank("HDFC","Sangola",1232123212,"HDFC00005555","4%");
let panjab_bank=new Bank("Panjab","Mumbai",1232123212,"PNB00006666","4%");

const array=[axis_bank,sbi_bank,icic_bank,kotak_bank,hdfc_bank,panjab_bank];
console.log("------------C]  Bank name & location-------------");
for (const a of array) {
  
    console.log(`${a.bank_name} ${a.location}`)
}
console.log("----------------D]  Kotak Bank Details-------------");

for (const abc of array) {
    if (abc.bank_name=="Kotak") {
        
        console.log(`${abc.bank_name},${abc.location},${abc.account_no},${abc.ifsc},${abc.interest_rate}`);

    }
    
}
console.log("----------------E]  All Bank Deatails---------------");

for (const abc of array) {
    console.log(`${abc.bank_name},${abc.location},${abc.account_no},${abc.ifsc},${abc.interest_rate}`);
}