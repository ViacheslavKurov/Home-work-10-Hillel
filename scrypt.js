"use strict";
class Employee {
  vacationDays = 18;
  constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }
  get fullName() {
    return (`Full name: ${this.firstName} ${this.lastName}`);
  }
getSalarOfEmployee () {
 console.log(`Year salary: ${this.salary * this.vacationDays}`)
}
}

const EmployeeInfo = new Employee("Dandy", "Bibik", 20, "Juniorloader", 500);
const EmployeeOfStock = new Employee("Garry", "Fisher", 25, "Supervisor", 1000);
console.log(EmployeeInfo);
console.log(EmployeeOfStock);
console.log(EmployeeInfo.fullName);
EmployeeInfo.getSalarOfEmployee();
console.log(EmployeeOfStock.fullName);
EmployeeOfStock.getSalarOfEmployee();
