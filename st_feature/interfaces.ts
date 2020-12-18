//Sử dụng Interfaces + Classes giúp chúng ta có thể tái sử dụng code trong TS
//Một trong những chức năng của Interfaces là tạo ra một kiểu mới, nó mô tả tên vào kiểu dữ liệu của giá trị thuộc tính đó của object bất kì.
interface Vehicle {
    name: string,
    year: number,
    broken: boolean,
    summary: () => string
}
type Vehicle_ = {
    name: string,
    year: number,
    broken: boolean,
    summary?: () => string
}
const oldCivic = {
    name: 'Honda Civic',
    year: 2004,
    broken: true,
    summary(): string {
        return this.name
    }
}
const printVehicle: (obj: Vehicle_) => void = (vehicle: Vehicle_): void => {

}
printVehicle(oldCivic)