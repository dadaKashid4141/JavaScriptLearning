console.log("*************************Object Asgmnt***************************");
let teacher = {
    subject: "JavaScript",
    experiance: "5yrs",
    institude: "sangola college",


    degrees: {
        Engineering: "CSC",
        PHD: "Adv computing",
        Graduate: "BCA",
        postGraduate: "MCA",
    },
    certificates: {
        participation: "Hacker Rank",
        course: "complete IFE course",
        other: "Adv Programming",
    },
    details: function () {
        let personDetails = `Details are : ${this.degrees.Graduate}, ${this.degrees.postGraduate},  ${this.degrees.Engineering},${this.degrees.PHD}`;
        return personDetails;
    },
    address: "Pandharpur",


}
console.log(teacher);
let pDetail = teacher.details();
console.log(teacher.details());
console.log("--------------------Adding new property-------------");

console.log(`Address :${teacher.address}`);
console.log("--------------------update subject as React-------------");
teacher.subject = "React";
console.table(teacher);
console.log("--------------------deleting certificate course-------------");
delete teacher.certificates.course;
console.table(teacher);
console.log("--------------------Adding certificate -------------");
teacher.certificates = "Tech Experience";
console.table(teacher)
