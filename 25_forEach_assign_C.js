console.log("*********************************************For Each********************************************");
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

var array_employee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
console.log(array_employee.length);

console.log("-----------------------------1 TCS emp---------------------------");
array_employee.forEach((currentValue) => {
    if (currentValue.emp_company == " TCS ") {
        console.log(`Employee Name: ${currentValue.emp_name}, Compony: ${currentValue.emp_company}`);
    }
})

console.log("-----------------------------2 Emp sal>=50k---------------------------");
array_employee.forEach((currentValue) => {
    if (currentValue.emp_salary >= 50000) {
        console.log(currentValue);
    }
})
console.log("-----------------------------3 sum of all emp sal---------------------------");
var sal = 0
array_employee.forEach((currentValue) => {
    sal = sal + currentValue.emp_salary;

})
console.log(`Sum of all emp salary: ${sal}`);

console.log("-----------------------------4 Avg of emp sal---------------------------");
var sal = 0;
array_employee.forEach((currentValue) => {
    sal = sal + currentValue.emp_salary;
}
)
let avg = sal / array_employee.length;
console.log(`Average salary :  ${avg}`);

console.log("-----------------------------5 emp belongs to IT & HR dept with salary>=75K---------------------------");
array_employee.forEach((element) => {
    if (element.emp_dept == " IT " && element.emp_salary >= 75000) {
        console.log(element);
    } else {
        if (element.emp_dept == " HR " && element.emp_salary >= 75000) {
            console.log(element);
        }
    }

})