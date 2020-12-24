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
// Về cơ bản interface thiết lập một số rằng buộc cho class muốn inplement nó, sự khác biệt cơ bản của interface vs abstract là một class có thể implement từ nhiều interface (tận dụng lợi ích của việc đa kế thừa) nhưng không thể extends từ nhiều abstract class..
// Hiểu đơn giản chúng ta sử dụng Interface khi muốn thiết lập một số rằng buộc là đặc tả cho duy nhất cho nhiều class khác nhau, nói rõ ràng hơn thì chúng ta sẽ sử dụng interface khi muốn nhiều class khác nhau làm việc cùng nhau, Interface xác định các luật lệ nhưng nó không quan tâm đến class là sẽ Implement nó.
//  Chúng ta sử dụng Abstract khi muốn thiết lập rằng buộc cho nhiều class giống nhau về mặt bản chất, có liên hệ chặt chẽ với nhau (có chung quan hệ kế thừa)
// Ví dụ : Abstract class Person, Interface Development, Interface Office
// Giả sử chúng ta muốn triển khai class Developer thì Developer trong trường hợp này về mặt bản chất rõ ràng nó là Person => class Developer extends Person (đây là mối quan hệ is - a hiểu đơn giản là : Developer là Person)
// Giống như vậy nếu chúng ta muốn triển khai class Receptionist (lễ tân) thì Receptionist cũng là Person => class Receptionist extends Person
// Developer thì có khả năng debug, program... đây là những function  => Developer sẽ implement từ Interface Development (đây là mối quan hệ has a tức là Developer có khả năng abcxyz...)
// Receptionist thì có khả năng pha trà, tiếp khách,... đây làn những function => Receptionist sẽ implement từ Office
