// "use strict";
// abstract class Department {
//   protected employees: string[] = []; // property kiểu protected chỉ cho phép class cha hoặc class con kế thừa sử dụng nó.
//   constructor(private name: string, protected id: string) {}
//   abstract describe(this: Department):void
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
//   static createEmployeee(name: string) {
//     return { name };
//   }
// }
// class ITDepartment extends Department {
//   constructor(id: string, public admin: string[]) {
//     super("IT", id); // invoked constructor of base class
//   }
//   describe(){
//       console.log("Id Itdepartment",this.id)
//   }
// }
// class AccountingDepartment extends Department {
//   private lastReport: string;
//   static countReport: number = 0;
//   private static instance:AccountingDepartment;
//   private constructor(id: string, private reports: string[]) {
//     super("Accounting", id);
//     this.lastReport = reports[0];
//   }
//   describe(){
//       console.log('Id accounting department',this.id)
//   }
//   static getInstance(){
//       if(AccountingDepartment.instance) return this.instance;
//       this.instance = new AccountingDepartment('d2',[])
//   }
//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error("No report found!");
//   }
//   set mostRecentReport(value: string) {
//     if (!value) throw new Error("Please pass in a valid value");
//     this.addReport(value);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//     AccountingDepartment.countReport ++;
//     return this;
//   }
//   getReport() {
//     console.log(this.reports);
//   }
//   addEmployee(name: string) {
//     if (name === "Hiep") return this.employees;
//     this.employees.push(name);
//     return this;
//   }
// }
// const itDepartment = new ITDepartment("abx", []);
// itDepartment.describe();
// itDepartment.addEmployee("LeHiep");
// itDepartment.addEmployee("LeSinh");
// const accountingDepartment = new AccountingDepartment("acc", []);
// accountingDepartment.addReport("Something went wrong!");
// console.log(accountingDepartment.mostRecentReport);
// accountingDepartment.mostRecentReport = "Year end report..";
// console.log(AccountingDepartment.countReport)
// console.log(accountingDepartment);
// const accounting = AccountingDepartment.getInstance( );//Trường hợp sử dụng singleton phổ biến nhất đó là bạn chỉ muốn tạo ra một số lượng giới hạn instance từ một class.
