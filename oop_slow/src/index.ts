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
const acccounting = AccountingDepartment.getInstance()// singleton dựa trên private constructor nó có thể hữu ích trong trường hợp bạn muốn tạo object từ class nhưng muốn các đối tượng luôn giống nhau mỗi lần được tạo ra, nói ngắn gọn và đơn giản trên class singleton chúng ta chỉ có thể tạo ra duy nhất một instance từ nó. 
console.log(acccounting)


abstract class Warrior {
  readonly name: string;
  public weapon?: string;
  constructor(name: string, weapon?: string) {
    this.name = name;
    this.weapon = weapon
  }
  sayHi(): void {
    console.log(`Hello, I am ${this.name}`);
  }

  abstract arm(weapon: string): void; // hàm này phải được triển khai ở lớp dẫn xuất 
}

class SuperWarrior extends Warrior {
  constructor(name: string,) {
    super(name); // hàm khởi tạo trong lớp dẫn xuất phải gọi super()
  }
  arm(weapon: string): void {
    console.log(`${this.name} is a super warrior fighting with ${weapon}`);
  }
  fly(): void {
    console.log(`${this.name} can fly`);
  }
}
// let hercules: Warrior;
// hercules = new Warrior()
const hercules = new SuperWarrior('hiep');
hercules.arm('guom');
hercules.fly()
hercules.sayHi()