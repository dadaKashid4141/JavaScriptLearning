console.log("*********************************************filter & reduce********************************************");
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {

        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, " Anil ", " IT ", 50000, " TCS ");
const emp_radha = new Employee(33, " Radha ", " HR ", 74000, " Wipro ");
const emp_rishi = new Employee(55, " Rishi ", " Finance ", 47000, " TCS ");
const emp_sonali = new Employee(66, " Sonali ", " Finance ", 45000, " Infy ");
const emp_monika = new Employee(77, " Monika ", " IT ", 40000, " Wipro ");
const emp_viny = new Employee(88, " Vinayak ", " IT ", 75000, " TCS ");
const emp_mahi = new Employee(99, " Mahesh ", " HR ", 85000, " Infy ");

var array_emps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]

console.log("-----------------------1) emp from Wipro-----------------");
array_emps.filter((element) => {
    if (element.emp_company == " Wipro ") {
        console.log(element.emp_name);
    }
})

console.log("-----------------------2) emp from IT or HR dept-----------------");
var newemp = array_emps.filter((element) => {
    if (element.emp_dept == " IT " || element.emp_dept == " HR ") {
        console.log(element.emp_name);
    }
})

console.log("-----------------------3) emp id>50-----------------");
var newemp = array_emps.filter((element) => {
    if (element.emp_id > 50) {
        console.log(element.emp_name);
    }
})

console.log("-----------------------4) emp name start with A||V||M-----------------");
var newemp = array_emps.filter((element) => {
    if (element.emp_name.startsWith(" A") || element.emp_name.startsWith(" V") || element.emp_name.startsWith(" M")) {
        console.log(element.emp_name);
    }
})

console.log("-----------------------5) Avg salary for all dept-----------------");
sum = 0;
var len = (array_emps.length);
array_emps.filter((element) => {
    sum = element.emp_salary + sum;
    avg = sum / len;

})
console.log(avg);

console.log("-----------------------6) Avg salary for IT dept-----------------");
const itDept = [];
array_emps.filter((element) => {
    if (element.emp_dept == " IT ") {
        itDept.push(element.emp_salary);
    }
});
console.log(itDept);

let itSalary = itDept.reduce((sum, value) => sum + value);
// console.log(itSalary);
let avg1 = itSalary / itDept.length;
console.log(avg1);