import { timeStamp } from 'console';
import fs from 'fs'
// file csv nào cũng cần đọc sang định dạng utf-8
// những mỗi file csv sẽ có một cấu trúc khác nhau, có các trường khác nhau.
// như vậy chúng ta có thể thiết kế một abstract class có hàm đọc read do tất cả các file csv đều cần có hàm đọc nên đây là quan hệ kế thừa
// Nhưng với mỗi file csv thì nghiệp vụ của nó sẽ khác (hiểu đơn giản chúng ta sẽ có nhiều file csv có định dạng khác như MatchReader, MovieReader, CompanyReader) dẫn đến cách thức chúng ta convert như thế nào , chúng có các trường ra saosẽ khác nhau, vậy chúng ta gán abstract method cho hàm mapRow => mỗi class extends từ CsvFileReader đều phải override lại hàm này, định nghĩa cách chúng ta convert file csv
//  Sử dụng Generic giúp chúng ta xác định một Type có thể được sử dụng lại ở nhiều class, thay vì nhiều class có nghiệp vụ về bản chất nó giống nhau chúng ta sẽ tạo ra các kiểu khác nhau nếu thông qua Generic chúng ta chỉ cần define ra một Type Duy nhất, chúng ta trao quyền các class điều này cho phép người sử dụng class tạo ra các Instance có Type của riêng họ, thêm nữa nó tăng khả năng tái sử dụng code.
abstract class CsvFileReader<T> {
    abstract data: T[] = []
    constructor(public filename: string) {
        this.filename = filename
    }
    abstract mapRow(row: string[]): T
    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: "utf-8"
            })
            .split('\n')
            .map((el: string): string[] => {
                return el.split(',')
            })
            .map(this.mapRow)
    }
}
export default CsvFileReader