abstract class Department {
  static fiscalYear = 2020;
  private employees: string[] = []
  constructor(protected readonly id: string, public name: string) {
    // Vời từ khóa private 
  }
  abstract describe(this: Department): void;
  addEmployee(employee: string) {
    this.employees.push(employee)
  }
  printEmployee() {
    console.log(this.employees.length);
    console.log(this.employees)
  }
  static createEmployee(name: string) {
    return { name }
  }
}
const employee = Department.createEmployee('hiep')
// const accounting = new Department("d1", "Accounting");
// accounting.addEmployee('Hiep');
// accounting.addEmployee('Le')
// accounting.describe();
// accounting.printEmployee();
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins
  }
  describe(this: ITDepartment) {
    console.log(`ITDepartment Department ${this.name} + id: ${this.id}`)
  }
}
const idDepartment = new ITDepartment('d2', ['hiep']);
console.log(idDepartment)

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment
  protected static numUser: number
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No report found.')
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");

    }
    this.addReport(value)
  }
  private constructor(id: string, private reports: string[]) {// private constructor mục đích chính của nó là class này chỉ được tạo nên duy nhất một đối tượng
    super(id, 'accounting');
    this.lastReport = reports[0]
    AccountingDepartment.instance
  }
  static getInstance() {//từ khóa static có thể truy cập được các biến static thông qua từ khoa this do static chỉ được gọi bởi class, lúc này this sẽ trỏ vào chính class đó
    if (AccountingDepartment.instance) {//check xem instance đã được define hay chưa thì trả về
      return this.instance
    }
    this.instance = new AccountingDepartment('d1', [])
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text
  }
  getReports() {
    console.log(this.reports)
  }
  describe() {//Overide method describe của Department
    console.log(`Acccounting Department ${this.id} : ${this.name}`)
  }
}
// const accountingDepartment = new AccountingDepartment('d3', ['hieple']);
// console.log(accountingDepartment)
// accountingDepartment.mostRecentReport = ''
// Về cơ bản từ khóa abstract sẽ buộc các class con phải triển khai một abstract method từ lớp cha, lớp cha chỉ mô tả tên hàm, kiểu giá trị trả về và tham số của hàm đó còn việc khai báo sẽ là việc của class con
const acccounting = AccountingDepartment.getInstance()// singleton dựa trên private constructor nó có thể hữu ích trong trường hợp bạn muốn tạo object từ class nhưng muốn các đối tượng luôn giống nhau mỗi lần được tạo ra.
console.log(acccounting)