console.log("***********************************Assign on for Each()********************************************");
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

console.log("--------------------------1 Emp name-------------------");
const namearray=[];
array_employee.forEach((element)=>{   
       namearray.push(element.emp_name)
});
console.log(namearray);


console.log("--------------------------2 Emp dept-------------------");
let newSet=new Set();
array_employee.forEach((currentValue)=>{
    newSet.add(currentValue.emp_dept)

})
console.log(newSet);


console.log("--------------------------3 Emp id-------------------");
const idarray=[];
array_employee.forEach((element)=>{   
       idarray.push(element.emp_id)
});
console.log(idarray);
