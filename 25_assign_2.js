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
console.log(array_employee);

console.log("----------------------------1   Emp from TCS-------------------------------");
for (const iterator of array_employee) {
    //console.log(iterator);

    if (iterator.emp_company === " TCS ") {
        console.log(`Employee name= ${iterator.emp_name},   compony name= ${iterator.emp_company}`);
    }

}
console.log("----------------------------2  Emp from Finance dept-------------------------------");
for (const iterator of array_employee) {
    //console.log(iterator);

    if (iterator.emp_dept === " Finance ") {
        console.log(`Employee name= ${iterator.emp_name},   compony name= ${iterator.emp_dept}`);
    }

}


console.log("----------------------------3  Emp name start with 'R'-------------------------------");
for (const iterator of array_employee) {
    if (iterator.emp_name.startsWith(" R")) {
        console.log(iterator);

    }

}



console.log("----------------------------4  Emp sal greater than 70k -------------------------------");
for (const iterator4 of array_employee) {
    if (iterator4.emp_salary > 70000) {
        console.log(`Emp name:  ${iterator4.emp_name}, company name:  ${iterator4.emp_company}, salary:  ${iterator4.emp_salary}`);
    }

}
console.log("----------------------------5  Emp. sal >=50k &belongs to IT Dept-------------------------------");
for (const iterator4 of array_employee) {
    if (iterator4.emp_salary >= 50000 && iterator4.emp_dept == " IT ") {
        console.log(iterator4);
    }

}


console.log("----------------------------6 Emp. from INFY-------------------------------");
for (const iterator4 of array_employee) {
    if (iterator4.emp_company == " Infy ") {
        console.log(iterator4);
    }
}